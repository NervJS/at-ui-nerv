import * as Nerv from 'nervjs'

// import ButtonExample from './view/Button'
// import TagExample from './view/Tag'
// import LayoutExample from './view/Layout'
// import CheckboxExample from './view/checkbox'
// import InputExample from './view/Input'
// import InputNumberExample from './view/InputNumber/'
// import RadioExample from './view/Radio'
// import RateExample from './view/Rate'
// import AlertExample from './view/Alert'
// import BadgeExample from './view/Badge'
// import CardExample from './view/Card'
import CollapseExample from './view/Collapse'
// import LoadingBarExample from './view/LoadingBar'

import 'at-ui-style'

class App extends Nerv.Component {
  render () {
    return (
      <div className='app' id='app'>
        {/* <ButtonExample/> */}
        {/* <TagExample/> */}
        {/* <LayoutExample/> */}
        {/* <CheckboxExample/> */}
        {/* <InputExample /> */}
        {/* <InputNumberExample /> */}
        {/* <RadioExample /> */}
        {/* <RateExample /> */}
        {/* <AlertExample /> */}
        {/* <BadgeExample /> */}
        {/* <CardExample /> */}
        <CollapseExample />
        {/* <LoadingBarExample /> */}
      </div>
    )
  }
}

Nerv.render(<App />, document.getElementById('container') as Element)
