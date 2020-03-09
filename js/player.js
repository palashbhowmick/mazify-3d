
AFRAME.registerComponent("player", {
    init: function () {
        this.finished = false;
        setTimeout(() => {
            let finishEl = document.querySelector("#finish-tile");
            if (finishEl != undefined) {
                this.finishPos = finishEl.getAttribute("position");
            }
        }, 1000)
        document.addEventListener('keyup', event => {
            let player = document.querySelector("#player");
            if (event.code === 'Space') {
                if (player.getAttribute("position").y <= 2) {
                    player.setAttribute('velocity', '0 12 0');
                }
            }
        })
    },
    tick: function () {
        let cameraEl = this.el.sceneEl.camera.el;
        let cameraPos = cameraEl.getAttribute("position");
        if (!this.finished && this.finishPos != undefined &&
            (
                cameraPos.x >= this.finishPos.x &&
                cameraPos.x <= this.finishPos.x + 3 &&
                cameraPos.z >= this.finishPos.z &&
                cameraPos.z <= this.finishPos.z + 3
            )) {

            let finishDlgElm = document.querySelector("#finishDialog")
            finishDlgElm.setAttribute("style", "display: block");
            this.finished = true;
        }
    }
})


