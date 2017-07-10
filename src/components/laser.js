
// TODO: Change the name of the component
AFRAME.registerComponent('laser', {
  schema: {
    intersectionPoint: { type: 'string' }
  },

  init: function () {
    const entity = this.el
    let intersectionPoint

    entity.addEventListener('raycaster-intersection', (event) => {
      intersectionPoint = event.detail.intersections[0].point

      console.log('raycaster-intersection', intersectionPoint)

      entity.emit('collide', intersectionPoint)
      entity.setAttribute('intersectionPoint', intersectionPoint)
      entity.addState('intersecting')
    })

    entity.addEventListener('raycaster-intersection-cleared', (event) => {
      console.log('no longer intersecting')
      entity.removeState('intersecting')
    })

    if (entity.is('colliding')) {
      // detect if the pointer already exists
      const point = entity.sceneEl.querySelector('#point')

      // if it doesn't exist create it to the intersection position
      if (point === null) {
        const laserPointer = document.createElement('a-image')
        laserPointer.setAttribute('id', '#laserPoint')
        laserPointer.setAttribute('src', '#laserPointer')
        laserPointer.setAttribute('position', intersectionPoint)
        this.appendChild(laserPointer)

      // if it exists move it to the intersection position
      } else {
        point.setAttribute('position', intersectionPoint)
      }
    }
  }
})
