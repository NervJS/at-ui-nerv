import * as Nerv from 'nervjs'

import Collapse from '@md/collapse.md'
import './style.scss'

class CollapseExample extends Nerv.Component {
  render () {
    return (
      <div className='collapse-example'>
        <Collapse />
      </div>
    )
  }
}

export default CollapseExample
