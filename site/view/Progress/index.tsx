// import * as Nerv from 'nervjs'

// import Progress from '../../../src/progress'
// import Button from '../../../src/button'
// const ButtonGroup = Button.Group
// class ProgressExample extends Nerv.Component {
//   constructor (props) {
//     super(props)
//     this.state = {
//       percent: 0
//     }
//     this.descPercent = this.descPercent.bind(this)
//     this.inscPercent = this.inscPercent.bind(this)
//     this.onSuccess = this.onSuccess.bind(this)
//   }
//   render () {
//     return (
//       <div className='Progress-example'>
//         <Progress percent='0' />
//         <Progress percent='60' />
//         <Progress percent='100' />
//         <Progress percent='50' status='error' />
//         <div className='col-sm-24 col-md-12'>
//           <Progress percent='0' strokeWidth='4' />
//           <Progress percent='60' strokeWidth='4' />
//           <Progress percent='100' strokeWidth='4' />
//           <Progress percent='50' status='error' strokeWidth='4' />
//         </div>
//         <div>
//           <Progress percent={this.state.percent} onStatusSuccess={this.onSuccess} />
//           <ButtonGroup size='small'>
//             <Button onClick={this.descPercent}><i className='icon icon-minus' /></Button>
//             <Button onClick={this.inscPercent}><i className='icon icon-plus' /></Button>
//           </ButtonGroup>
//         </div>
//       </div>
//     )
//   }
//   descPercent () {
//     let percent = this.state.percent
//     this.setState({
//       percent: percent - 10 < 0 ? 0 : percent - 10
//     })
//   }
//   inscPercent () {
//     let percent = this.state.percent
//     this.setState({
//       percent: percent + 10 > 100 ? 100 : percent + 10
//     })
//   }
//   onSuccess (percent) {
//     console.log(percent)
//   }
// }

// export default ProgressExample
