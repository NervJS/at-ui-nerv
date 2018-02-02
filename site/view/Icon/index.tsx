import * as Nerv from 'nervjs'

import Icon from '../../../src/icon'

class IconExample extends Nerv.Component {
  render () {
    return (
      <div className='icon_example'>
        <Icon type='icon-cloud' style='font-size:30px;' >
        </Icon>
      </div>
    )
  }
}

export default IconExample
