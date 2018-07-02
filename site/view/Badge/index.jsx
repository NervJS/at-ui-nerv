import * as Nerv from 'nervjs'

// import Badge from '../../../src/badge'
// import Button from '../../../src/button'

import Badge from '@md/badge.md'
// interface BadgeExampleState {
//   dot: boolean
//   num: number
//   show: boolean
// }

// import './badgeexample.scss'
import './style.scss'

class BadgeExample extends Nerv.Component {
  constructor (...args) {
    super(...args)
    this.state = {
      dot: false,
      num: 0,
      show: false
    }
  }
  // toggleDot = () => {
  //   const { show } = this.state
  //   this.setState({
  //     show: !show
  //   })
  // }
  render () {
    // const { num, show } = this.state
    return (
      <Badge />
      // <div className='badge_example'>
      //   <div className='basic'>
      //     <Badge value={4} />
      //     <Badge value={23} />
      //     <Badge value={199} />
      //   </div>
      //   <div className='textContent'>
      //     <Badge value='new' />
      //     <Badge value='hot' />
      //   </div>
      //   <div className='differentStatus'>
      //     Primary <Badge value='123' />
      //     <br />
      //     Success <Badge value='123' status='success' />
      //     <br />
      //     Warning <Badge value='123' status='warning' />
      //     <br />
      //     Info <Badge value='123' status='info' />
      //   </div>
      //   <div className='max-num'>
      //     <Badge value={123} maxNum={99} />
      //   </div>
      //   <div className='with_button'>
      //     <Badge value='3'>
      //       <Button>回复</Button>
      //     </Badge>
      //     <Badge value='111' maxNum='99'>
      //       <Button>回复</Button>
      //     </Badge>
      //     <Badge value='new'>
      //       <Button>回复</Button>
      //     </Badge>
      //   </div>
      //   <div className='dot'>
      //     <Badge value='12' dot />
      //     <Badge value='12' dot>
      //       <Button>回复</Button>
      //     </Badge>
      //     <Badge value='12' dot>
      //       <i class='icon icon-inbox' />
      //     </Badge>
      //     <Badge value='12' dot>
      //       <span>消息</span>
      //     </Badge>
      //   </div>
      //   <div className='dynamic_exhibition'>
      //     <Badge value={num} maxNum={12}>
      //       <span className='badge-example' />
      //     </Badge>
      //     <Badge value={num} show={show} dot>
      //       <span className='badge-example' />
      //     </Badge>
      //     <br />
      //     <Button.Group size='small'>
      //       <Button
      //         onClick={() => {
      //           this.setState({
      //             num: num - 1
      //           })
      //         }}
      //       >
      //         -
      //       </Button>
      //       <Button
      //         onClick={() => {
      //           this.setState({
      //             num: num + 1
      //           })
      //         }}
      //       >
      //         +
      //       </Button>
      //     </Button.Group>
      //     <Button size='small' onClick={this.toggleDot}>
      //       {show ? '隐藏' : '显示'}小红点
      //     </Button>
      //   </div>
      // </div>
    )
  }
}

export default BadgeExample
