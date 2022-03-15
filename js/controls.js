import { randomGeneration } from "./randMaze.js";
import levels from "./levels.js";


export function reset() {
    location.reload();
}

export function cont() {
    let finishDlgElm = document.querySelector("#finishDialog")
    finishDlgElm.setAttribute("style", "display: none");

    let menuDlgElm = document.querySelector("#menuDialog")
    menuDlgElm.setAttribute("style", "display: none");
}

export function level1() {
    let mazeElm = document.querySelector("[mazify]");
    mazeElm.setAttribute("mazify", { height: 20, width: 20, maze: levels[1] }, true)
}

export function level2() {
    let mazeElm = document.querySelector("[mazify]");
    mazeElm.setAttribute("mazify", { height: 20, width: 20, maze: levels[2] }, true)
}

export function levelRand() {
    let mazeElm = document.querySelector("[mazify]");
    mazeElm.setAttribute("mazify", { height: 20, width: 20, maze: randomGeneration() }, true)    
}

export function load() {
    if (localStorage.getItem("maze-data") != undefined) {
        let data = JSON.parse(localStorage.getItem("maze-data"));
        let mazeElm = document.querySelector("[mazify]");
        mazeElm.setAttribute("mazify", data, true)
    }
}