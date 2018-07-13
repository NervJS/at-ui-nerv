import * as Nerv from 'nervjs'
import Loadingbar from '@md/loadingbar.md'

class LoadingbarExample extends Nerv.Component {
  constructor (...args) {
    super(...args)
    this.state = {
      width: 2
    }
  }
  start () {
    Loadingbar.start()
  }
  finish () {
    Loadingbar.finish()
  }
  error () {
    Loadingbar.error()
  }
  update () {
    Loadingbar.update(50)
  }
  setWidth () {
    const {width} = this.state
    if (width === 2) {
      Loadingbar.config({width: 4})
      this.setState({width: 4})
    } else {
      Loadingbar.config({width: 2})
      this.setState({width: 2})
    }
  }
  render () {
    return (
      <div className='loadingbar-example'>
        <Loadingbar />
      </div>

    )
  }
}

export default LoadingbarExample
