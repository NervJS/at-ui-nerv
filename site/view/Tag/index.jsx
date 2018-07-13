import * as Nerv from 'nervjs'

import Tag from '@md/tag.md'

class TagExample extends Nerv.Component {
  constructor (...args) {
    super(...args)
    this.handleClose = this.handleClose.bind(this)
  }
  handleClose (evt, name) {
    console.log(evt, name)
  }
  render () {
    return (
      <div className='tag-example'>
        <Tag />
      </div>
    )
  }
}

export default TagExample
