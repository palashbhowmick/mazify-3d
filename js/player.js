
AFRAME.registerComponent("player", {
    init: function () {
        document.addEventListener('keyup', event => {
            // Jump
            if (event.code === 'Space') {
                let player = document.querySelector("#player");
                if (player.getAttribute("position").y <= 2) { // prevent successive jump
                    player.setAttribute('velocity', '0 12 0');
                }
            }
        })

        this.el.addEventListener('collide', (evt) => {
            if (evt.detail.body.el.id != undefined && evt.detail.body.el.id == "finish-tile") {
                this.el.sceneEl.exitVR()

                let finishDlgElm = document.querySelector("#finishDialog")
                finishDlgElm.setAttribute("style", "display: block");
                this.finished = true;
            }
        });
    }
})


