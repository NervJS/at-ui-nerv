import * as Nerv from 'nervjs'
import ButtonDoc from '@md/button.md'

import './style.scss'

class ButtonExample extends Nerv.Component {
  render () {
    return (
      <div className='button-example'>
        <ButtonDoc />
      </div>
    )
  }
}

export default ButtonExample
