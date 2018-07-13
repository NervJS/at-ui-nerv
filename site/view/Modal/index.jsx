import * as Nerv from 'nervjs'
import Modal from '@md/modal.md'

class ModalExample extends Nerv.Component {
  constructor (...args) {
    super(...args)
    this.state = {
      visible: false
    }
  }
  render () {
    return (
      <div className='modal-example'>
        <Modal />
      </div>
    )
  }
}

export default ModalExample
