import * as Nerv from 'nervjs'

import LoadingbarElem from './LoadingbarElem'

let instance

class LoadingBar {
  container = document.createElement('div')

  constructor (options) {
    options = options || {}

    document.body.appendChild(this.container)
    instance = Nerv.createElement(LoadingbarElem, {
      ...options
    })
    Nerv.render(instance, this.container)
    // document.body.appendChild(instance.dom)
  }

  update (newOptions) {
    if (newOptions.percent) {
      instance.props.percent = newOptions.percent
    }
    if (newOptions.status) {
      instance.props.status = newOptions.status
    }
    if (newOptions.show) {
      instance.props.show = newOptions.show
    }
    LoadingbarElem.forceUpdate()
  }

  destroy () {
    document.body.removeChild(this.container)
  }
}

export default LoadingBar
