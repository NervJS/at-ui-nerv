import * as Nerv from 'nervjs'

// import ButtonExample from './view/Button'
// import TagExample from './view/Tag'
// import LayoutExample from './view/Layout'
// import CheckboxExample from './view/checkbox'
import InputExample from './view/Input'

import 'at-ui-style'

class App extends Nerv.Component {
  render () {
    return (
      <div className='app' id='app'>
        {/* <ButtonExample/> */}
        {/* <TagExample/> */}
        {/* <LayoutExample/> */}
        {/* <CheckboxExample/> */}
        <InputExample />
      </div>
    )
  }
}

Nerv.render(<App/>, document.getElementById('container')as Element)
