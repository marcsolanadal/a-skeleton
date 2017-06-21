
// TODO: Change the name of the component
AFRAME.registerComponent('laser', {
  init: function () {
    const entity = this.el
    const laser = entity.sceneEl.querySelector('#laser')

    entity.addEventListener('raycaster-intersection', (event) => {
      console.log('raycaster-intersection', event.detail.intersections[0].point)
      entity.emit('collide', event.detail.intersections[0].point)
      entity.setState('colliding')
    })

    entity.addEventListener('raycaster-intersection-cleared', (event) => {
      entity.removeState('colliding')
    })

    if (entity.is('colliding')) {
      // detect if the pointer already exists
      const point = entity.sceneEl.querySelector('#point')

      // if it doesn't exist create it to the intersection position
      if (point === null) {
        const laserPointer = document.createElement('a-image')
        laserPointer.setAttribute('id', '#laserPoint')
        laserPointer.setAttribute('src', '#laserPointer')
        laserPointer.setAttribute('position', event.detail.intersections[0].point)
        this.appendChild(laserPointer)

      // if it exists move it to the intersection position
      } else {
        point.setAttribute('position', event.detail.intersections[0].point)
      }

    }

  }
})
