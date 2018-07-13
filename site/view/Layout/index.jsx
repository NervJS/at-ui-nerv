import * as Nerv from 'nervjs'

import './style.scss'

import Layout from '@md/layout.md'

class LayoutExample extends Nerv.Component {
  render () {
    return (
      <div className='layout-example'>
        <Layout />
      </div>

    )
  }
}
export default LayoutExample
