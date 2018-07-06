import * as Nerv from 'nervjs'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Index from './pages/index'
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
        </Switch>
      </div>
    )
  }
}

Nerv.render(
  <Router basename={BASE_NAME}>
    <App />
  </Router>,
  document.getElementById('container')
)
