import * as Nerv from 'nervjs'

// import Dropdown from '../../../src/dropdown'
import Dropdown from '@md/dropdown.md'
import './style.scss'

class DropdownExample extends Nerv.Component {
  render () {
    return (
      <div className='dropdown-example'>
        <Dropdown />
      </div>
    )
  }
}

export default DropdownExample
