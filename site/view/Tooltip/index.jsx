import * as Nerv from 'nervjs'
import Tooltip from '@md/tooltip.md'
import './style.scss'
class TooltipExample extends Nerv.Component {
  render () {
    return (
      <div className='tooltip-example'>
        <Tooltip />
      </div>
    )
  }
}

export default TooltipExample
