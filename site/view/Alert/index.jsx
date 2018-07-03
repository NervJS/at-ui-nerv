import * as Nerv from 'nervjs'

// import Alert from '../../../src/alert'

import Alert from '@md/alert.md'

import './fadeanimation.scss'
import './style.scss'

class AlertExample extends Nerv.Component {
  render () {
    return (
      <div className='alert-example'>
        <Alert />
      </div>
    )
  }
}

export default AlertExample
