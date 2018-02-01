import * as Nerv from 'nervjs'

import ButtonExample from './view/Button'
import TagExample from './view/Tag'
import SelectExample from './view/Select'
import IconExample from './view/Icon'
import 'at-ui-style'

class App extends Nerv.Component {
  render () {
    return (
      <div className='app' id='app'>
        <ButtonExample />
        <TagExample />
        <SelectExample />
        <IconExample />
      </div>
    )
  }
}

Nerv.render(<App />, document.getElementById('container') as Element)
