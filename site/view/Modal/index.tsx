import * as Nerv from 'nervjs'

import Modal from '../../../src/modal'
import Button from '../../../src/button'

interface ModalExampleState {
  visible: boolean
}

class ModalExample extends Nerv.Component<any, ModalExampleState> {
  constructor (...args) {
    super(...args)
    this.state = {
      visible: false
    }
  }
  modaltoggle = () => {
    const { visible } = this.state
    this.setState({ visible: !visible })
  }
  onConfirmHandle = () => {
    console.log('confirm')
  }
  alert = () => {
    Modal.alert({
      title: '警告',
      content: '这是警告',
      callback: () => {
        console.log('finish')
      }
    })
  }
  confirm = () => {
    Modal.confirm({
      title: '提示',
      content: '此操作需要非常谨慎，您确定要这么做吗？'
    })
  }
  info = () => {
    Modal.info({
      content: '这里是提示的消息'
    })
  }
  render () {
    const { visible } = this.state
    return (
      <div className='modalExample'>
        <div className='basic'>
          <Button size='small' onClick={this.modaltoggle}>
            按钮
          </Button>
          <Modal value={visible} onCancel={this.modaltoggle} onConfirm={this.onConfirmHandle} title={'组成头部 '}>
            <Modal.body>组成身体</Modal.body>
            <Modal.footer okText='确认' cancelText='取消'>
              组成脚部
            </Modal.footer>
          </Modal>
        </div>
        <div className='direct'>
          <Button size='small' onClick={this.alert}>
            alert
          </Button>
          <Button size='small' onClick={this.confirm}>
            confirm
          </Button>
          <Button size='small' onClick={this.info}>
            info
          </Button>
        </div>
      </div>
    )
  }
}

export default ModalExample
