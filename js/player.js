
AFRAME.registerComponent("player", {
    init: function () {
        document.addEventListener('keyup', event => {
            let player = document.querySelector("#player");
            if (event.code === 'Space') {
                if (player.getAttribute("position").y <= 2) {
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


