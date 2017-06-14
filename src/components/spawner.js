
AFRAME.registerComponent('spawner', {
  init: function () {
    const blockHand = this.el.sceneEl.querySelector('#blockHand');
    blockHand.addEventListener('triggerdown', function(event) {
      console.log('spawn');
    });
  }
})
