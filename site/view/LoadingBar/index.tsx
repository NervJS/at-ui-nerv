import * as Nerv from 'nervjs'

import Button from '../../../src/button'
import LoadingBar from '../../../src/loading-bar'

class LoadingBarExample extends Nerv.Component {
  start = () => {LoadingBar.start()}
  finish = () => {}
  error = () => {}
  update = () => { }
  componentDidMount () {
  }
  render () {
    return (
      <div className='loadingbar_example'>
        <div className='basic'>
          <Button onClick={this.start}>{}Start</Button>
          <Button onClick={this.finish}>{}Finish</Button>
          <Button onClick={this.error}>{}Error</Button>
          <Button onClick={this.update}>{}Update</Button>
        </div>
      </div>
    )
  }
}

export default LoadingBarExample
