import * as Nerv from 'nervjs'
import InputNumber from '../../../src/input-number'

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
      <div className='InputNumber_example'>
        <div className='basic'>
          <p className='demo-desc'>基本输入框</p>
          <div className='row no-gutter'>
            <div className='col-md-4'>
              <InputNumber onChange={this.onChangeHandle} />
              <br />
            </div>
          </div>
          <p className='demo-desc'>有取值范围的输入框，min=0, max=5</p>
          <div className='row no-gutter'>
            <div className='col-md-4'>
              <InputNumber min={0} max={5} />
            </div>
          </div>
        </div>
        <div className='disabled'>
          <div className='row no-gutter'>
            <div className='col-md-4'>
              <InputNumber disabled />
            </div>
          </div>
        </div>
        <div className='float-step'>
          <p className='demo-desc'>step=0.3, min=1</p>
          <div className='row no-gutter'>
            <div className='col-md-4'>
              <InputNumber onChange={this.onChangeHandle} step={0.3} min={1} />
            </div>
          </div>
        </div>
        <div className='different-size'>
          <div className='row'>
            <div className='col-sm-12 col-md-4'>
              <InputNumber  size='small' />
            </div>
            <div className='col-sm-12 col-md-4'>
              <InputNumber  />
            </div>
            <div className='col-sm-12 col-md-4'>
              <InputNumber  size='large' />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default InputNumberExample
