
AFRAME.registerComponent("player", {
    init: function () {
        document.addEventListener('keyup', event => {
            if (event.code === 'Space') {
                let player = document.querySelector("#player");
                if (player.getAttribute("position").y <= 2) {
                    player.setAttribute('velocity', '0 12 0');
                }
            }
        })
    }
})