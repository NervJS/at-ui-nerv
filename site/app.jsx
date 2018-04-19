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
    console.log('update')
    return true
  }
  render () {
    // const { visible } = this.state
    // const animate = ({ location }) => {
    //   return (
    //     <CSSTransition key={location.key} classNames="fade" in={true} timeout={300}>
    //       <div className="wrapper" style="background-color: #F8FAFF">
    //         <Switch location={location}>
    //           <Route path="/" exact component={Index} />
    //           <Route path="/guide" component={Guide} />
    //           <Route path="/resource" component={Resource} />
    //           <Route path="/docs" component={Docs} />
    //         </Switch>
    //       </div>
    //     </CSSTransition>
    //   )
    // }
    // return <Route render={animate} />
    return (
      <div className='wrapper' style={{ backgroundColor: '#F8FAFF' }}>
        <Switch location={location}>
          <Route path='/' exact component={Index} />
          <Route path='/docs' component={Docs} />
        </Switch>
      </div>
    )
  }
}

Nerv.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('container')
)
