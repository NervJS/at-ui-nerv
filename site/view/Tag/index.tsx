import * as Nerv from 'nervjs'
import {renderIntoDocument} from 'nerv-test-utils'

import Tag from '../../../src/tag/index'

import './fadeanimation.scss'

class TagExample extends Nerv.Component {
  handleClose (evt, name) {
    console.log(evt, name)
  }
  componentDidMount () {
    console.log(Nerv.findDOMNode(this))
  }
  render () {

    return (
      <div className='tag_example'>
        <Tag>标签1</Tag>
        <Tag>标签2</Tag>
        <Tag closable={true} onClose={this.handleClose.bind(this)}>标签三</Tag>
        <Tag
          name='标签四'
          closable
          onClose={this
          .handleClose
          .bind(this)}>标签四</Tag>
        <Tag color='default'>标签一</Tag>
        <Tag color='primary'>标签二</Tag>
        <Tag color='success'>标签三</Tag>
        <Tag color='error'>标签四</Tag>
        <Tag color='warning'>标签五</Tag>
        <Tag color='info'>标签六</Tag>
        <Tag color='#ecefce'>#ecefce</Tag>
      </div>
    )
  }
}

export default TagExample
