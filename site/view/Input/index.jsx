import * as Nerv from 'nervjs'

import InputE from '@md/input.md'
import './style.scss'

class InputExample extends Nerv.Component {
  constructor (...args) {
    super(...args)
    this.onInputHandle = this
      .onInputHandle
      .bind(this)
  }
  onInputHandle (e) {
    console.log(e)
  }

  render () {
    return (
      <div className='input-example'>
        <InputE />
      </div>
    )
  }
}

export default InputExample
