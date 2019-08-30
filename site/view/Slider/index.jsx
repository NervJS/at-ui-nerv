import * as Nerv from 'nervjs'

import Slider from '@md/slider.md'

class SliderExample extends Nerv.Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      percent: 0
    }
  }
  render () {
    return (
      <div className='slider-example'>
        <Slider />
      </div>
    )
  }
}

export default SliderExample
