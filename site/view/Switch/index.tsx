import * as Nerv from 'nervjs'

import Switch from '../../../src/switch'
import Icon from '../../../src/icon'
class SwitchExample extends Nerv.Component {
  constructor (props) {
    super(props)
    this.handler = this.handler.bind(this)
  }
  handler (e, value) {
    console.log('props handler', value)
  }
  render () {
    return (
      <div className='switch_example'>
        <Switch value='true' size='small' />
        <Switch value='true'/>
        <Switch value='true' size='large' />
        <Switch value='true'/>
        <Switch value='true' disabled/>
        <Switch value='true' disabled='false'/>
        <Switch value='true' disabled='true'/>
        <Switch>
          <span slot='checkedText'>开</span>
          <span slot='unCheckedText'>关</span>
        </Switch>
        <Switch>
          <span slot='checkedText'><Icon type='icon-arrow-left'  /></span>
          <span slot='unCheckedText'><Icon type='icon-arrow-right' /></span>
        </Switch>
        <Switch value='true' style='' onChange={this.handler}/>
      </div>
    )
  }
}

export default SwitchExample
