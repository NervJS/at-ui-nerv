import * as Nerv from 'nervjs'

import './style.scss'

import Layout from '@md/layout.md'

class LayoutExample extends Nerv.Component {
  render () {
    // const getBaseRowDraw = () => {
    //   const result = []
    //   for (let i = 0; i < 24 / 2; i++) {
    //     result.push(
    //       <div className='row at-row no-gutter'>
    //         <div className={`col-md-${i}`}>
    //           <div className='at-box-row bg-c-brand-dark' />
    //         </div>
    //         <div className={`col-md-${24 - i}`}>
    //           <div className='at-box-row bg-c-brand-light' />
    //         </div>
    //       </div>
    //     )
    //   }
    //   return result
    // }
    // const getButterRowDraw = () => {
    //   const result = []
    //   for (let i = 0; i < 24 / 2; i++) {
    //     result.push(
    //       <div className='row at-row'>
    //         <div className={`col-md-${i}`}>
    //           <div className='at-box-row bg-c-brand-dark' />
    //         </div>
    //         <div className={`col-md-${24 - i}`}>
    //           <div className='at-box-row bg-c-brand-light' />
    //         </div>
    //       </div>
    //     )
    //   }
    //   return result
    // }
    // const getOffsetRowDraw = () => {
    //   const result = []
    //   for (let i = 0; i < 24 / 2; i++) {
    //     result.push(
    //       <div className='row at-row'>
    //         <div className='col-md-2'>
    //           <div className='at-box-row bg-c-brand-dark' />
    //         </div>
    //         <div className={`col-md-2 col-md-offset-${i}`}>
    //           <div className='at-box-row bg-c-brand-dark' />
    //         </div>
    //       </div>
    //     )
    //   }
    //   return result
    // }
    // const getFlexRowDraw = () => {
    //   return (
    //     <div className='flexBox'>
    //       <p className='demo-desc'>flex-start</p>
    //       <div className='row at-row no-gutter'>
    //         <div className='col-md-4'>
    //           <div className='at-box-row bg-c-brand-dark' />
    //         </div>
    //         <div className='col-md-4'>
    //           <div className='at-box-row bg-c-brand-light' />
    //         </div>
    //         <div className='col-md-4'>
    //           <div className='at-box-row bg-c-brand-dark' />
    //         </div>
    //         <div className='col-md-4'>
    //           <div className='at-box-row bg-c-brand-light' />
    //         </div>
    //       </div>
    //       <p className='demo-desc'>flex-center</p>
    //       <div className='row at-row no-gutter flex-center'>
    //         <div className='col-md-4'>
    //           <div className='at-box-row bg-c-brand-dark' />
    //         </div>
    //         <div className='col-md-4'>
    //           <div className='at-box-row bg-c-brand-light' />
    //         </div>
    //         <div className='col-md-4'>
    //           <div className='at-box-row bg-c-brand-dark' />
    //         </div>
    //         <div className='col-md-4'>
    //           <div className='at-box-row bg-c-brand-light' />
    //         </div>
    //       </div>
    //       <p className='demo-desc'>flex-end</p>
    //       <div className='row at-row no-gutter flex-end'>
    //         <div className='col-md-4'>
    //           <div className='at-box-row bg-c-brand-dark' />
    //         </div>
    //         <div className='col-md-4'>
    //           <div className='at-box-row bg-c-brand-light' />
    //         </div>
    //         <div className='col-md-4'>
    //           <div className='at-box-row bg-c-brand-dark' />
    //         </div>
    //         <div className='col-md-4'>
    //           <div className='at-box-row bg-c-brand-light' />
    //         </div>
    //       </div>
    //       <p className='demo-desc'>flex-around</p>
    //       <div className='row at-row no-gutter flex-around'>
    //         <div className='col-md-4'>
    //           <div className='at-box-row bg-c-brand-dark' />
    //         </div>
    //         <div className='col-md-4'>
    //           <div className='at-box-row bg-c-brand-light' />
    //         </div>
    //         <div className='col-md-4'>
    //           <div className='at-box-row bg-c-brand-dark' />
    //         </div>
    //         <div className='col-md-4'>
    //           <div className='at-box-row bg-c-brand-light' />
    //         </div>
    //       </div>
    //       <p className='demo-desc'>flex-between</p>
    //       <div className='row at-row no-gutter flex-between'>
    //         <div className='col-md-4'>
    //           <div className='at-box-row bg-c-brand-dark' />
    //         </div>
    //         <div className='col-md-4'>
    //           <div className='at-box-row bg-c-brand-light' />
    //         </div>
    //         <div className='col-md-4'>
    //           <div className='at-box-row bg-c-brand-dark' />
    //         </div>
    //         <div className='col-md-4'>
    //           <div className='at-box-row bg-c-brand-light' />
    //         </div>
    //       </div>
    //     </div>
    //   )
    // }
    // const getColAlignRowDraw = () => {
    //   return (
    //     <div classNameName='colAlign_example'>
    //       <p className='demo-desc'>flex-top</p>
    //       <div className='row at-row flex-center'>
    //         <div className='col-md-4'>
    //           <div className='at-box-row bg-c-brand-dark' />
    //         </div>
    //         <div className='col-md-4'>
    //           <div className='at-box-row bg-c-brand-light' style='height: 100px' />
    //         </div>
    //         <div className='col-md-4'>
    //           <div className='at-box-row bg-c-brand-dark' style='height: 70px' />
    //         </div>
    //         <div className='col-md-4'>
    //           <div className='at-box-row bg-c-brand-light' style='height: 120px' />
    //         </div>
    //       </div>
    //       <p className='demo-desc'>flex-middle</p>
    //       <div className='row at-row flex-center flex-middle'>
    //         <div className='col-md-4'>
    //           <div className='at-box-row bg-c-brand-dark' />
    //         </div>
    //         <div className='col-md-4'>
    //           <div className='at-box-row bg-c-brand-light' style='height: 100px' />
    //         </div>
    //         <div className='col-md-4'>
    //           <div className='at-box-row bg-c-brand-dark' style='height: 70px' />
    //         </div>
    //         <div className='col-md-4'>
    //           <div className='at-box-row bg-c-brand-light' style='height: 120px' />
    //         </div>
    //       </div>
    //       <p className='demo-desc'>flex-bottom</p>
    //       <div className='row at-row flex-center flex-bottom'>
    //         <div className='col-md-4'>
    //           <div className='at-box-row bg-c-brand-dark' />
    //         </div>
    //         <div className='col-md-4'>
    //           <div className='at-box-row bg-c-brand-light' style='height: 100px' />
    //         </div>
    //         <div className='col-md-4'>
    //           <div className='at-box-row bg-c-brand-dark' style='height: 70px' />
    //         </div>
    //         <div className='col-md-4'>
    //           <div className='at-box-row bg-c-brand-light' style='height: 120px' />
    //         </div>
    //       </div>
    //     </div>
    //   )
    // }
    // const combineAllExample = (...examples) => {
    //   const result = []
    //   return result.concat(...examples)
    // }
    return (
      <Layout />
    )
  }
}
export default LayoutExample
