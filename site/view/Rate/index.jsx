import * as Nerv from 'nervjs'

import Rate from '@md/rate.md'

class RateExample extends Nerv.Component {
  // constructor (...args) {
  //   super(...args)
  // this.state = {
  //   value: 0,
  //   value2: 3.5
  // }
  // }
  // onChangeHandle = (index) => {
  //   this.setState({
  //     value: index
  //   })
  // }
  // halfStarOnChange = (index) => {
  //   this.setState({
  //     value2: index
  //   })
  // }
  // onHoverChange = (index) => {
  //   console.log(index)
  // }
  render () {
    // const { value, value2 } = this.state
    return (
      // <div className='rate_example'>
      //   <div className='basic'>
      //     <Rate />
      //     <Rate count={6}/>
      //   </div>
      //   <div className='hasText'>
      //     <Rate showText={true} value={value} onChange={this.onChangeHandle}>
      //       <span>{value} 星</span>
      //     </Rate>
      //   </div>
      //   <div className='different_icon'>
      //     <Rate icon='icon-heart-on' />
      //   </div>
      //   <div className='halfStar'>
      //     <Rate allowHalf={true} showText={true} value={value2} onHoverChange={this.onHoverChange} onChange={this.halfStarOnChange}>
      //       <span> {value2} 星</span>
      //     </Rate>
      //   </div>
      //   <div className='disabled'>
      //     <Rate
      //       allowHalf={true}
      //       showText={true}
      //       disabled={true}
      //       value={value2}
      //       onChange={this.halfStarOnChange}
      //     />
      //   </div>
      //   <div className='allowClear'>
      //     <Rate
      //       allowHalf={true}
      //       allowClear={true}
      //       showText={true}
      //       value={value2}
      //       onChange={this.halfStarOnChange}
      //     />
      //     <Rate
      //       allowHalf={true}
      //       allowClear={false}
      //       showText={true}
      //       value={value2}
      //       onChange={this.halfStarOnChange}
      //     />
      //   </div>
      // </div>
      <Rate />
    )
  }
}

export default RateExample
