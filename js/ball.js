AFRAME.registerComponent("ball", {
    init: function () {
        let sceneEl = this.el.sceneEl;
        let player = document.querySelector("#player");
        console.log("Ball init");
        console.log(sceneEl);
        document.addEventListener("click", () => {
            let playerPos = player.getAttribute("position")

            let ball = document.createElement('a-sphere');
            ball.setAttribute('radius', 0.5);
            ball.setAttribute('position', { x: playerPos.x, y: 0.1, z: playerPos.z })
            ball.setAttribute('velocity', "10 0 0")
            ball.setAttribute('dynamic-body', '');
            ball.setAttribute('material', 'src: #ball');

            sceneEl.appendChild(ball);
        });

    },
})


