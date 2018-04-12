import * as Nerv from 'nervjs'
import { Route } from 'react-router-dom'
import HeaderS from '../components/headerS'
import Sidebar from '../components/sidebar'

import navsConfig from '../lib/nav.config.yml'
import '../assets/style/docs.scss'

// import Router from '../lib/createRouter.js'
const data = navsConfig['zh']['components']
class Docs extends Nerv.Component {
  render () {
    return (
      <div className='app' id='app'>
        <HeaderS collapse />
        <div className='at-container'>
          <div className=' row'>
            <div className=' col-sm-24 col-md-6 col-lg-4'>
              <div className='at-sidebar' style={{width: '100%'}}>
                <Sidebar data={data} />
              </div>
            </div>
            <div className=' col-sm-24 col-md-18 col-lg-20 '>
              <div className='at-markdown'>
                {
                  data.map(item => {
                    if (item.items) {
                      return item.items.map(item => {
                        return <Route path={`/docs/${item.name.toLowerCase()}`} component={require(`../markdown/zh/${item.name.toLowerCase()}.md`).default} />
                      })
                    }
                    if (item.groups) {
                      return item.groups.map(item => {
                        return item.items.map((item) => {
                          return <Route path={`/docs/${item.name.toLowerCase()}`} component={require(`../markdown/zh/${item.name.toLowerCase()}.md`).default} />
                        })
                      })
                    }
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Docs
