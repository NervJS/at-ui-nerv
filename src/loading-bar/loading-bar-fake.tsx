import * as Nerv from 'nervjs'

import LoadingBar from './loading-bar'

class LoadingBarFake extends Nerv.Component {
  render () {
    return Nerv.createPortal(<LoadingBar />, document.body)
  }
}

export default LoadingBarFake
