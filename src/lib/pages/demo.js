import { utilities } from '$lib/pages/Anime/src/utilities.js'
import anime from 'animejs'

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
// @ts-ignore
export const exchange = (registers, regName1, index1, regName2, index2) => {
  __exchange(registers, () => {
    // @ts-ignore
    const reg1 = registers.find(register => register.name === regName1)
    // @ts-ignore
    const reg2 = registers.find(register => register.name === regName2)
    const tmp = reg1.values[index1]
    reg1.values[index1] = reg2.values[index2]
    reg2.values[index2] = tmp
  }, regName1, index1, regName2, index2)
}
// @ts-ignore
export const assignment = (registers, regName, index, newValue, fromRegs = []) => {
  const _assignment = () => {
    __assignment(registers, () => {
      // @ts-ignore
      const reg = registers.find(register => register.name === regName)
      reg.values[index] = newValue
    }, regName, index, newValue)
  }
  const allRegsAreSame = fromRegs.every(reg => {
    return reg.name === regName
  })
  if (allRegsAreSame) {
    _assignment()
  }
  else {
    fromRegs.forEach(fromReg => {
      __duplicate(registers, () => {
        _assignment()
      }, regName, index, fromReg.name, fromReg.index)
    })
  }
}
// @ts-ignore
export const duplicate = (registers, regName, index, fromRegName, fromIndex) => {
  __duplicate(registers, () => {
    // @ts-ignore
    const reg = registers.find(register => register.name === regName)
    // @ts-ignore
    const fromReg = registers.find(register => register.name === fromRegName)
    reg.values[index] = fromReg.values[fromIndex]
  }, regName, index, fromRegName, fromIndex)
}

export const demo = {
  exchange, duplicate, assignment
}
