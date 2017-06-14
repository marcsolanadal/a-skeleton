
// TODO: Change the name of the component
AFRAME.registerComponent('laser', {
  init: function () {
    const laser = this.el.sceneEl.querySelector('#laser');
    laser.addEventListener('raycaster-intersection', function(event) {
      console.log('raycaster-intersection', event.detail.intersections[0].point)
    });
  }
})
