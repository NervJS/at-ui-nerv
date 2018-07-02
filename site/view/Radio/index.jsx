import * as Nerv from 'nervjs'
// import { Radio, RadioGroup, RadioButton } from '../../../src/radio'

import Radio from '@md/radio.md'
import './style.scss'

// interface RadioExampleState {
//   val: number | string
//   val2: number | string
//   groupVal: number | string
//   btnGroupVal: number | string
// }

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
  // onChangeHandle2 = (val) => {
  //   this.setState({
  //     val2: val
  //   })
  // }
  // onChangeHandle = (val) => {
  //   this.setState({
  //     val
  //   })
  // }
  // onChangeGroup = (val) => {
  //   this.setState({
  //     groupVal: val
  //   })
  // }
  // onBtnGroupChange = (val) => {
  //   this.setState({
  //     btnGroupVal: val
  //   })
  // }
  render () {
    // const { val, val2, groupVal, btnGroupVal } = this.state
    return (
      // <div className='radio_example'>
      //   <div className='basic'>
      //     <Radio onChange={this.onChangeHandle} value={val} label='1'>
      //       选项一
      //     </Radio>
      //     <Radio onChange={this.onChangeHandle} value={val} label='2'>
      //       选项二
      //     </Radio>
      //   </div>
      //   <div className='disabled'>
      //     <Radio onChange={this.onChangeHandle} value={val2} label='3' disabled>
      //       不可点且未选中
      //     </Radio>
      //     <Radio onChange={this.onChangeHandle} value={val2} label='4' disabled>
      //       不可点且选中
      //     </Radio>
      //   </div>
      //   <div className='radio_group'>
      //     <RadioGroup value={groupVal} onRadioGroupChange={this.onChangeGroup}>
      //       <Radio label='1'>选项一</Radio>
      //       <Radio label='2'>选项二</Radio>
      //       <Radio label='3'>选项三</Radio>
      //     </RadioGroup>
      //   </div>
      //   <div className='radio_btn_group'>
      //     <RadioGroup value={btnGroupVal} onRadioGroupChange={this.onBtnGroupChange}>
      //       <RadioButton label='北京'>北京</RadioButton>
      //       <RadioButton label='上海' disabled>
      //         上海
      //       </RadioButton>
      //       <RadioButton label='深圳'>深圳</RadioButton>
      //       <RadioButton label='凹凸实验室'>凹凸实验室</RadioButton>
      //     </RadioGroup>
      //   </div>
      //   <div className='radio_btn_color'>
      //     <RadioGroup fill='#FF6464' value={btnGroupVal} onRadioGroupChange={this.onBtnGroupChange}>
      //       <RadioButton label='北京'>北京</RadioButton>
      //       <RadioButton label='上海' disabled>
      //         上海
      //       </RadioButton>
      //       <RadioButton label='深圳'>深圳</RadioButton>
      //       <RadioButton label='凹凸实验室'>凹凸实验室</RadioButton>
      //     </RadioGroup>
      //     <RadioGroup
      //       textColor='#4C5D73'
      //       value={btnGroupVal}
      //       onRadioGroupChange={this.onBtnGroupChange}
      //     >
      //       <RadioButton label='北京'>北京</RadioButton>
      //       <RadioButton label='上海' disabled>
      //         上海
      //       </RadioButton>
      //       <RadioButton label='深圳'>深圳</RadioButton>
      //       <RadioButton label='凹凸实验室'>凹凸实验室</RadioButton>
      //     </RadioGroup>
      //   </div>
      //   <div className='size'>
      //     <div class='row'>
      //       <RadioGroup value={btnGroupVal} onRadioGroupChange={this.onBtnGroupChange} size='large'>
      //         <RadioButton label='北京'>北京</RadioButton>
      //         <RadioButton label='上海' disabled>
      //           上海
      //         </RadioButton>
      //         <RadioButton label='深圳'>深圳</RadioButton>
      //         <RadioButton label='凹凸实验室'>凹凸实验室</RadioButton>
      //       </RadioGroup>
      //     </div>
      //     <div class='row'>
      //       <RadioGroup value={btnGroupVal} onRadioGroupChange={this.onBtnGroupChange} size='normal'>
      //         <RadioButton label='北京'>北京</RadioButton>
      //         <RadioButton label='上海' disabled>
      //           上海
      //         </RadioButton>
      //         <RadioButton label='深圳'>深圳</RadioButton>
      //         <RadioButton label='凹凸实验室'>凹凸实验室</RadioButton>
      //       </RadioGroup>
      //     </div>
      //     <div class='row'>
      //       <RadioGroup value={btnGroupVal} onRadioGroupChange={this.onBtnGroupChange} size='small'>
      //         <RadioButton label='北京'>北京</RadioButton>
      //         <RadioButton label='上海' disabled>
      //           上海
      //         </RadioButton>
      //         <RadioButton label='深圳'>深圳</RadioButton>
      //         <RadioButton label='凹凸实验室'>凹凸实验室</RadioButton>
      //       </RadioGroup>
      //     </div>
      //   </div>
      // </div>
      <Radio />
    )
  }
}

export default RadioExample
