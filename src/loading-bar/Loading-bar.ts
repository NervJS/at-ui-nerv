import * as Nerv from 'nervjs'

import LoadingbarElem from './LoadingbarElem'
let instance

class LoadingBar {
  constructor (options) {
    options = options || {}

    instance = Nerv.createElement(LoadingbarElem, {
      ...options
    })
    Nerv.render(instance, document.body)
    document.body.appendChild(instance.dom)
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
    document.body.removeChild(instance.dom)
  }
}

export default LoadingBar
