import * as Nerv from 'nervjs'
import Message from '@md/message.md'

class MessageExample extends Nerv.Component {
  render () {
    return (
      <div className='message-example'>
        <Message />
      </div>

    )
  }
}

export default MessageExample
