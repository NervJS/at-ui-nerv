import * as Nerv from 'nervjs'

import Tag from '../../../src/tag/index'

class TagExample extends Nerv.Component {
  constructor (...args) {
    super(...args)
    this.handleClose = this
      .handleClose
      .bind(this)
  }
  handleClose (evt, name) {
    // alert(name)
    console.log(evt, name)
  }
  render () {

    return (
      <div className='tag_example'>
        <Tag/>
        {/* <Tag>标签1</Tag>
        <Tag>标签2</Tag>
        <Tag closable={true} onClose={this.handleClose}>标签三</Tag>
        <Tag name='标签四' closable onClose={this.handleClose}>标签四</Tag>
        <Tag color='default'>标签一</Tag>
        <Tag color='primary'>标签二</Tag>
        <Tag color='success'>标签三</Tag>
        <Tag color='error'>标签四</Tag>
        <Tag color='warning'>标签五</Tag>
        <Tag color='info'>标签六</Tag>
        <Tag color='#ecefce'>#ecefce</Tag> */}
      </div>
    )
  }
}

export default TagExample
