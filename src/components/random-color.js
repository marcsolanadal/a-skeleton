
const Utils = require('../utils')

AFRAME.registerComponent('random-color', {
  init: function() {
    this.el.setAttribute('material', 'color', getRandomColor());
  }
})

function getRandomColor() {
  const hex = '0123456789ABCDEF'
  const color = [0, 0, 0, 0, 0, 0]
  return '#' + color.map(() => hex[Utils.randomIntRange(16)]).join('')
}
