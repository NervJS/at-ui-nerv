import * as Nerv from 'nervjs'

import Radio from '@md/radio.md'
import './style.scss'

class RadioExample extends Nerv.Component {
  constructor (...args) {
    super(...args)
    this.state = {
      val: '1',
      val2: '4',
      groupVal: '1',
      btnGroupVal: '北京'
    }
  }
  render () {
    return (
      <div className='radio-example'>
        <Radio />
      </div>
    )
  }
}

export default RadioExample
