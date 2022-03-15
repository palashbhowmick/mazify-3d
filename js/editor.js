import { randomGeneration } from "./randMaze.js";
import levels from "./levels.js";

var app = new Vue({
    el: '#app',
    data: {
        mazeData: [],
        n: 20,
        m: 20,
        blockSize: 20,
        selectedType: 1,
        tools: [
            {
                label: "Eraser",
                type: 0
            },
            {
                label: "Wall",
                type: 1
            },
            {
                label: "Start",
                type: 's'
            },
            {
                label: "Finish",
                type: 'f'
            },
        ]
    },
    mounted() {
        if (localStorage.getItem("maze-data") != undefined) {
            let data = JSON.parse(localStorage.getItem("maze-data"));
            this.load(data.maze, data.height, data.width)
        } else {
            let count = 0;
            for (let i = 0; i < this.n; i++) {
                for (let j = 0; j < this.m; j++) {
                    this.mazeData.push({
                        top: 0 + (i * this.blockSize),
                        left: 0 + (j * this.blockSize),
                        type: 0,
                        id: count++
                    })
                }
            }
        }
    },
    methods: {
        load(data, n, m) {
            let mazeData = data.map((v, idx) => {
                let i = Math.floor(idx / 20);
                let j = idx % 20;
                return {
                    top: 0 + (i * this.blockSize),
                    left: 0 + (j * this.blockSize),
                    type: v,
                    id: idx
                }
            });
            this.mazeData = mazeData;
            this.n = n;
            this.m = m;
        },
        changeTile(e) {
            if (e.buttons == 1 || e.type == "click") {
                let idx = parseInt(e.target.id);

                if (this.selectedType == 's') {//only one tile can be marked as start position
                    this.mazeData.map(m => {
                        if (m.type == 's') {
                            m.type = 0
                        }
                    })
                    this.mazeData[idx].type = this.selectedType;
                } else {
                    this.mazeData[idx].type = this.selectedType;
                }
            }
        },
        save() {
            let arr = [];
            this.mazeData.forEach(item => {
                arr.push(item.type);
            });

            let data = {
                "maze": arr,
                "height": this.n,
                "width": this.m
            }
            localStorage.setItem("maze-data", JSON.stringify(data));
        },
        gotoMaze() {
            location.href = "index.html"
        },
        clear() {
            this.load(levels[0], 20, 20);
        },
        level1() {
            this.load(levels[1], 20, 20);
        },
        level2() {
            this.load(levels[2], 20, 20);
        },
        levelRand() {
            this.load(randomGeneration(), 20, 20);
        }
    }
})