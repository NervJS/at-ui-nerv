import * as Nerv from 'nervjs'
import { withRouter } from 'react-router-dom'
import HeaderS from '../components/headerS'
import Sidebar from '../components/sidebar'

import navsConfig from '../lib/nav.config.yml'

class Guide extends Nerv.Component {
  componentDidMount () {
  }
  render () {
    const data = navsConfig['zh']['guide']
    return (
      <div className='app' id='app'>
        <HeaderS collapse />
        <div className='at-container row'>
          <div className='at-sidebar col-sm-24 col-md-6 col-lg-4'>
            <Sidebar data={data} />
          </div>
          <div className='at-markdown col-sm-24 col-md-18 col-lg-20' />
        </div>
      </div>
    )
  }
}

export default withRouter(Guide)
