import * as Nerv from 'nervjs'

import InputNumber from '@md/inputnumber.md'

class InputNumberExample extends Nerv.Component {
  constructor (...args) {
    super(...args)
    this.onChangeHandle = this.onChangeHandle.bind(this)
  }
  onChangeHandle (num) {
    console.log(num)
  }
  render () {
    return (
      <div className='inputNumber-example'>
        <InputNumber />
      </div>
    )
  }
}

export default InputNumberExample
