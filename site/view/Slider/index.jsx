import * as Nerv from 'nervjs'

import Slider from '../../../src/slider'

class SliderExample extends Nerv.Component {
  constructor (props) {
    super(props)
    this.state = {
      percent: 0
    }
  }
  render () {
    return (
      <div className='Slider-example'>
        <Slider onChange={this.handleChange} />
        <div style='height:100px;' />
        <Slider disabled onChange={this.handleChange} value={20} />
        <div style='height:100px;' />
        <Slider onChange={this.handleChange} max={90} min={10} value={3} />
        <div style='height:100px;' />
        <Slider onChange={this.handleChange} step={3} />
      </div>
    )
  }
  handleChange (value) {
    console.log(value)
  }
}

export default SliderExample
