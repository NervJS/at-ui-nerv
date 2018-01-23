import * as Nerv from 'nervjs'
import { Transition } from 'react-transition-group'

const duration = 300

interface VNode {
  props: object
}
interface Props {
  children: VNode
}

interface State {
  in: boolean
}
console.log(Transition)
class FadeAnimation extends Nerv.Component<Props, State> {
  state = {
    in: false
  }
  componentDidMount () {
    this.setState({in: true})
  }
  render () {
    const {children} = this.props
    return (
      <Transition in={this.state.in} timeout={duration}>
        {
          (status) => {
            children.props.className = children.props.className.concat(` fade fade-${status}`)
            return (children)
          }
        }
      </Transition>
    )
  }
}

export default FadeAnimation
