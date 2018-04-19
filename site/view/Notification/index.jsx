import * as Nerv from 'nervjs'

// import Notification from '../../../src/notification'
// import Button from '../../../src/button'
import Notification from '@md/notification.md'

class NotificationExample extends Nerv.Component {
  // open = () => {
  //   Notification({
  //     title: '这里是标题'
  //   })
  // }
  // open2 = () => {
  //   Notification({
  //     title: '这里是标题',
  //     message: '这里是内容，文案~~~',
  //     duration: 0
  //   })
  // }
  render () {
    return (
      <Notification />
      // <div className='notificationExample'>
      //   <div className='basic'>
      //     <Button plain={true} onClick={this.open}>
      //       可自动关闭
      //     </Button>
      //     <Button plain={true} onClick={this.open2}>
      //       不会自动关闭
      //     </Button>
      //   </div>
      // </div>
    )
  }
}

export default NotificationExample
