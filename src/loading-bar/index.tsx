import LoadingBar from './loading-bar'
import * as Nerv from 'nervjs'

let loadingBarInstance = null
let timer: number | null = null
const getLoadingBarInstance = () => {
  loadingBarInstance = loadingBarInstance || <LoadingBar width={2} />
  return loadingBarInstance
}

function update (options) {
  // const instance = getLoadingBarInstance() as never
  // instance.update(options)
}

// function hide() {
//   setTimeout(() => {
//     update({
//       percent: 0,
//       show: false
//     })
//     destroy()
//   }, 800)
// }

// function destroy() {
//   const instance = getLoadingBarInstance() as never
//   clearTimer()
//   loadingBarInstance = null
//   // instance.destroy()
// }

function clearTimer () {
  if (timer) {
    clearInterval(timer as never)
    timer = null
  }
}
export default {
  start: () => {
    if (timer) {
      return
    }

    let percent = 0

    update({
      percent,
      status: 'success',
      show: true
    })

    timer = setInterval(() => {
      percent += Math.floor(Math.random() * 3 + 5)
      if (percent > 95) {
        clearTimer()
      }
      update({
        percent,
        status: 'success',
        show: true
      })
    }, 200)
  },
  finish: () => {},
  error: () => {},
  update: () => {},
  getInstance: () => {
    return loadingBarInstance || getLoadingBarInstance()
  }
}
