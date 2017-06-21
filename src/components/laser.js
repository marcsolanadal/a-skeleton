
// TODO: Change the name of the component
AFRAME.registerComponent('laser', {
  init: function () {
    const entity = this.el
    let lastIntersectionPoint

    entity.addEventListener('raycaster-intersection', (event) => {
      lastIntersectionPoint = event.detail.intersections[0].point

      console.log('raycaster-intersection', lastIntersectionPoint)

      entity.emit('collide', lastIntersectionPoint)
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
        laserPointer.setAttribute('position', lastIntersectionPoint)
        this.appendChild(laserPointer)

      // if it exists move it to the intersection position
      } else {
        point.setAttribute('position', lastIntersectionPoint)
      }
    }
  }
})
