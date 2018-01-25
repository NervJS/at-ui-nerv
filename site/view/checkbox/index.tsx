import * as Nerv from 'nervjs'
import {Checkbox, CheckboxGroup} from '../../../src/checkbox'

class CheckboxExample extends Nerv.Component {
  state = {
    val: 'false'
  }
  constructor (...args) {
    super(...args)
    this.onChangeHandle = this
      .onChangeHandle
      .bind(this)
  }

  onChangeHandle (e) {

    this.setState({
      val: e
        ? 'true'
        : 'false'
    })
  }
  render () {
    return (
      <div className='checkbox_example'>
        <div className='basic'>
          <Checkbox onInput={this.onChangeHandle} label='深圳'>深圳</Checkbox>
          <p className='demo-desc'>
            {this.state.val}
          </p>
        </div>
        <div className='disabled'>
          <Checkbox onInput={this.onChangeHandle} label='深圳' disabled>深圳</Checkbox>
          <Checkbox onInput={this.onChangeHandle} label='凹凸实验室' disabled checked>凹凸实验室</Checkbox>
        </div>
        <div className='checkboxGroup'>
          <CheckboxGroup v-model='checkboxValue4'>
            <Checkbox label='深圳'>深圳</Checkbox>
            <Checkbox label='北京'>北京</Checkbox>
            <Checkbox label='上海'>上海</Checkbox>
            <Checkbox label='广州' disabled>广州</Checkbox>
            <Checkbox label='凹凸实验室' disabled>凹凸实验室</Checkbox>
          </CheckboxGroup>
          <p class='demo-desc'>
              {this.state.val}
           </p>
        </div>

      </div>
    )
  }
}
export default CheckboxExample
