import * as Nerv from 'nervjs'

import Checkbox from '@md/checkbox.md'

import './style.scss'

class CheckboxExample extends Nerv.Component {
  // state = {
  //   val: 'false'
  // }
  // constructor (...args) {
  //   super(...args)
  //   this.onChangeHandle = this
  //     .onChangeHandle
  //     .bind(this)
  // }

  // onChangeHandle (e) {
  //   this.setState({
  //     val: e
  //       ? 'true'
  //       : 'false'
  //   })
  // }
  render () {
    return (
      <Checkbox />
      // <div className='checkbox_example'>
      //   <div className='basic'>
      //     <Checkbox onChange={this.onChangeHandle} label='深圳'>深圳</Checkbox>
      //     <p className='demo-desc'>
      //       {this.state.val}
      //     </p>
      //   </div>
      //   <div className='disabled'>
      //     <Checkbox onChange={this.onChangeHandle} label='深圳' disabled>深圳</Checkbox>
      //     <Checkbox onChange={this.onChangeHandle} label='凹凸实验室' disabled checked>凹凸实验室</Checkbox>
      //   </div>
      //   <div className='checkboxGroup'>
      //     <Checkbox.Group value={['深圳', '北京']} onChange={(...e) => { console.log(e) }}>
      //       <Checkbox label='深圳'>深圳</Checkbox>
      //       <Checkbox label='北京'>北京</Checkbox>
      //       <Checkbox label='上海'>上海</Checkbox>
      //       <Checkbox label='广州' disabled>广州</Checkbox>
      //       <Checkbox label='凹凸实验室' disabled checked>凹凸实验室</Checkbox>
      //     </Checkbox.Group>
      //     <p class='demo-desc'>
      //         {this.state.val}
      //      </p>
      //   </div>

      // </div>
    )
  }
}
export default CheckboxExample
