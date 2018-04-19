import * as Nerv from 'nervjs'
// import Breadcrumb from '../../../src/breadcrumb'
import Breadcrumb from '@md/breadcrumb.md'

class BreadcrumbExample extends Nerv.Component {
  render () {
    return (
      <Breadcrumb />
    // <div className='breadcrumb_example'>
    //     <div className='basic'>
    //         <Breadcrumb>
    //             <Breadcrumb.Item>
    //                 Home
    //             </Breadcrumb.Item>
    //             <Breadcrumb.Item>
    //                 <a href='#'>Application Center</a>
    //             </Breadcrumb.Item>
    //             <Breadcrumb.Item>
    //                 <a href='#'>Application List</a>
    //             </Breadcrumb.Item>
    //             <Breadcrumb.Item>An Application</Breadcrumb.Item>
    //         </Breadcrumb>
    //     </div>
    // </div>
    )
  }
}

export default BreadcrumbExample
