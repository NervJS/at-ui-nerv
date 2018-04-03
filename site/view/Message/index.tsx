import * as Nerv from 'nervjs'

import Message from '../../../src/message'
import Button from '../../../src/button'

class MessageExample extends Nerv.Component {
  infoHandle = () => {
    Message['info']({
      message: 'isInfo',
      duration: 3000
    })
  }
  errorHandle = () => {
    Message['error']('isError')
  }
  warningHandle = () => {
    Message['warning']('isWarning')
  }
  successHandle = () => {
    Message['succeess']('isSuccess')
  }
  render () {
    return (
      <div className='messageExample'>
        <div className='basic'>
          <Button size='small' onClick={this.infoHandle}>
            info
          </Button>
          <Button size='small' onClick={this.errorHandle}>
            error
          </Button>
          <Button size='small' onClick={this.warningHandle}>
            warning
          </Button>
          <Button size='small' onClick={this.successHandle}>
            success
          </Button>
        </div>
      </div>
    )
  }
}

export default MessageExample
