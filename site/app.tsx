import * as Nerv from 'nervjs'

import ButtonExample from './view/Button'

import 'at-ui-style'

class App extends Nerv.Component {
  render () {
    return (
      <div className='app' id='app'>
        <ButtonExample />
      </div>
    )
  }
}

Nerv.render(<App />, document.getElementById('container') as Element)
