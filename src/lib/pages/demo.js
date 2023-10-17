import { utilities } from '$lib/pages/Anime/src/utilities.js'
import anime from 'animejs'
import { writable } from 'svelte/store'

export const registers2 = writable([
  { name: 'YMM0', size: 8, values: [0, 1, 2, 3, 4, 5, 6, 7], stroke: 'yellow', fill: 'purple' },
  { name: 'YMM1', size: 8, values: [7, 6, 5, 4, 3, 2, 1, 0], stroke: 'yellow', fill: 'pink' },
])

// @ts-ignore
const __exchange = (registers, update, regName1, index1, regName2, index2) => {
  // @ts-ignore
  const id1 = `${regName1}_${registers.find(register => register.name === regName1).size}_${index1}_demo`
  // @ts-ignore
  const id2 = `${regName2}_${registers.find(register => register.name === regName2).size}_${index2}_demo`
  const diff = utilities.calcCoordinatesDiffById(id1, id2)
  anime({
    targets: `#${id1}`,
    zIndex: [
      { value: 9999, duration: 0 }
    ],
  })
  anime({
    targets: `#${id2}`,
    zIndex: [
      { value: 9999, duration: 0 }
    ],
  })
  anime({
    targets: `#${id1}`,
    translateX: diff.diffX,
    translateY: diff.diffY,
    rotate: '0turn',
    duration: 800,
  })
  anime({
    targets: `#${id2}`,
    translateX: -diff.diffX,
    translateY: -diff.diffY,
    rotate: '0turn',
    duration: 800,
    complete: () => {
      update()
      anime({
        targets: `#${id1}`,
        translateX: 0,
        translateY: 0,
        duration: 0,
      })
      anime({
        targets: `#${id2}`,
        translateX: 0,
        translateY: 0,
        duration: 0,
      })
      anime({
        targets: `#${id1}`,
        zIndex: [
          { value: 0, duration: 0 }
        ],
      })
      anime({
        targets: `#${id2}`,
        zIndex: [
          { value: 0, duration: 0 }
        ],
      })
    },
  })
}
// @ts-ignore
const __assignment = (registers, update, regName, index, newValue) => {
  anime({
    // @ts-ignore
    targets: `#${regName}_${registers.find(register => register.name === regName).size}_${index}_demo`,
    zIndex: [
      { value: 9999, duration: 0 }
    ],
  })
  anime({
    // @ts-ignore
    targets: `#${regName}_${registers.find(register => register.name === regName).size}_${index}_demo`,
    translateY: [
      { value: -50, duration: 200, easing: 'easeOutQuad' },
      { value: 0, duration: 200, easing: 'easeInQuad' },
    ],
    rotate: [
      { value: 15, duration: 100, easing: 'easeOutQuad' },
      { value: -15, duration: 100, easing: 'easeInQuad' },
      { value: 0, duration: 100, easing: 'easeOutQuad' },
    ],
    duration: 0,
    complete: () => {
      update()
      anime({
        // @ts-ignore
        targets: `#${regName}_${registers.find(register => register.name === regName).size}_${index}_demo`,
        zIndex: [
          { value: 0, duration: 0 }
        ],
      })
    },
  })
}
// @ts-ignore
const __duplicate = (registers, update, regName, index, fromRegName, fromIndex) => {
  // @ts-ignore
  const id = `${regName}_${registers.find(register => register.name === regName).size}_${index}_demo`
  // @ts-ignore
  const fromId = `${fromRegName}_${registers.find(register => register.name === fromRegName).size}_${fromIndex}_demo`
  const diff = utilities.calcCoordinatesDiffById(id, fromId)
  anime({
    targets: `#${fromId}`,
    zIndex: [
      { value: 9999, duration: 0 }
    ],
  })
  anime({
    targets: `#${fromId}`,
    translateX: -diff.diffX,
    translateY: -diff.diffY,
    rotate: '0turn',
    duration: 800,
    complete: () => {
      update()
      anime({
        targets: `#${fromId}`,
        translateX: 0,
        translateY: 0,
        rotate: '0turn',
        duration: 300,
      })
      anime({
        targets: `#${fromId}`,
        zIndex: [
          { value: 0, duration: 0 }
        ],
      })
    },
  })
}

export const demo = {
  __exchange, __duplicate, __assignment
}
