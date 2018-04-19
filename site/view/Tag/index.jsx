import * as Nerv from 'nervjs'

import Tag from '@md/tag.md'

class TagExample extends Nerv.Component {
  constructor (...args) {
    super(...args)
    this.handleClose = this.handleClose.bind(this)
  }
  handleClose (evt, name) {
    // alert(name)
    console.log(evt, name)
  }
  render () {
    return <Tag />
  }
}

export default TagExample
