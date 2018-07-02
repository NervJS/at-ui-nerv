<<<<<<< HEAD
import LoadingBar from './loading-bar'
import * as Nerv from 'nervjs'

let loadingBarInstance = null
let timer: number | null = null
const getLoadingBarInstance = () => {
  loadingBarInstance = loadingBarInstance || <LoadingBar width={2} />
=======
import Loadingbar from './Loading-bar'

let loadingBarInstance
let width = 2
let timer

function getLoadingBarInstance () {
  loadingBarInstance = loadingBarInstance || new Loadingbar({ width })
>>>>>>> 09ea1d76bf0345d2724506a38a1978042d623ce4
  return loadingBarInstance
}

function update (options) {
<<<<<<< HEAD
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
=======
  const instance = getLoadingBarInstance()
  instance.update(options)
}

function hide () {
  setTimeout(() => {
    update({
      percent: 0,
      show: false
    })
    destroy()
  }, 800)
}

function destroy () {
  const instance = getLoadingBarInstance()
  clearTimer()
  loadingBarInstance = null
  instance.destroy()
}

function clearTimer () {
  if (timer) {
    clearInterval(timer)
    timer = null
  }
}

export default {
  start () {
    if (timer) { return }
>>>>>>> 09ea1d76bf0345d2724506a38a1978042d623ce4

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
<<<<<<< HEAD
  finish: () => {},
  error: () => {},
  update: () => {},
  getInstance: () => {
    return loadingBarInstance || getLoadingBarInstance()
=======
  update (percent) {
    clearTimer()
    update({
      percent,
      status: 'success',
      show: true
    })
  },
  finish () {
    clearTimer()
    update({
      percent: 100,
      status: 'success',
      show: true
    })
    hide()
  },
  error () {
    clearTimer()
    update({
      percent: 100,
      status: 'error',
      show: true
    })
    hide()
  },
  config (options) {
    if (options.width) {
      width = options.width
    }
>>>>>>> 09ea1d76bf0345d2724506a38a1978042d623ce4
  }
}
