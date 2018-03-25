import * as Nerv from 'nervjs'
import Button from '../../../src/button'
import Loadingbar from '../../../src/loading-bar/index'

class LoadingbarExample extends Nerv.Component {
  state = {
    width: 2
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
  setWidth = () => {
    const { width } = this.state
    if (width === 2) {
      Loadingbar.config({ width: 4 })
      this.setState({
        width: 4
      })
    } else {
      Loadingbar.config({ width: 2 })
      this.setState({
        width: 2
      })
    }

  }
  render () {
    const { width } = this.state
    return (
      <div className='loadingbarExample'>
        <div className='basic'>
          <Button size='small' onClick={this.start}>
            start
          </Button>
          <Button size='small' onClick={this.finish}>
            finish
          </Button>
          <Button size='small' onClick={this.error}>
            error
          </Button>
          <Button size='small' onClick={this.update}>
            update
          </Button>
          <Button size='small' onClick={this.setWidth}>
            {width === 2 ? '设置线宽4px' : '设置线宽2px'}
          </Button>
        </div>
      </div>
    )
  }
}

export default LoadingbarExample
