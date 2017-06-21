
AFRAME.registerComponent('spawner', {
  init: function () {
    const entity = this.el
    const blockHand = entity.sceneEl.querySelector('#blockHand')

    blockHand.addEventListener('triggerdown', (event) => {
      entity.addState('pressed')
    })

    blockHand.addEventListener('triggerup', (event) => {
      entity.removeState('pressed')
    })

    entity.addEventListener('collided', (event) => {
      console.log('collision detected', event)
    })
  }
})
