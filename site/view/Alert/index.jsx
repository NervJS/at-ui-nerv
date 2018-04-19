import * as Nerv from 'nervjs'

// import Alert from '../../../src/alert'

import Alert from '@md/alert.md'

import './fadeanimation.scss'
import './style.scss'

class AlertExample extends Nerv.Component {
  render () {
    return (
      <Alert />
      // <div className='alert_example'>
      //   <div className='basic'>
      //     <Alert message='这里是提示的文案~这里是提示的文案~这里是提示的文案~' type='success' />
      //     <Alert message='这里是提示的文案~' type='error' />
      //     <Alert message='这里是提示的文案~' type='warning' />
      //     <Alert message='这里是提示的文案~' type='info' />
      //   </div>
      //   <div className='closable'>
      //     <Alert message='这里是不可关闭的警告提示' closable />
      //   </div>
      //   <div className='showIcon'>
      //     <Alert message='显示 ICON 的警告提示' showIcon />
      //   </div>
      //   <div className='description'>
      //     <Alert
      //       message='成功提示的标题'
      //       description='成功提示的详细说明成功提示的详细说明成功提示的详细说明成功提示的详细说明成功提示的详细说明成功提示的详细说明成功提示的详细说明成功提示的详细说明成功提示的详细说明'
      //       type='success'
      //       showIcon
      //       closable
      //     />
      //     <Alert
      //       message='错误提示的标题'
      //       description='错误提示的详细说明错误提示的详细说明错误提示的详细说明'
      //       type='error'
      //       showIcon
      //       closable
      //     />
      //     <Alert
      //       message='警告提示的标题'
      //       description='警告提示的详细说明警告提示的详细说明警告提示的详细说明'
      //       type='warning'
      //       showIcon
      //       closable
      //     />
      //     <Alert
      //       message='信息提示的标题'
      //       description='信息提示的详细说明信息提示的详细说明信息提示的详细说明'
      //       type='info'
      //       showIcon
      //       closable
      //     />
      //   </div>
      // </div>
    )
  }
}

export default AlertExample
