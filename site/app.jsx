import * as Nerv from 'nervjs'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'

import Index from './pages/index.jsx'
import Docs from './pages/docs.jsx'

import 'at-ui-style'

class App extends Nerv.Component {
  constructor (...args) {
    super(...args)
    this.state = {
      visible: false
    }
  }
  componentDidMount () {
    this.setState({
      visible: true
    })
  }
  shouldComponentUpdate () {
    return true
  }
  render () {
    return (
      <div className='wrapper' style={{ backgroundColor: '#F8FAFF' }}>
        <Switch>
          <Route path='/' exact component={Index} />
          <Route path='/docs' component={Docs} />
          {/* <Redirect to='/' /> */}
        </Switch>
      </div>
    )
  }
}

Nerv.render(
  <Router >
    <App />
  </Router>,
  document.getElementById('container')
)
