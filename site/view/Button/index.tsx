import * as Nerv from 'nervjs'

import Button from '../../../src/button/index'

class ButtonExample extends Nerv.Component {
  render () {
    return (
      <div className='button_example'>
        <Button size='small'>按钮</Button>
        <Button circle />
      </div>
    )
  }
}

export default ButtonExample
