import * as Nerv from 'nervjs'
import { Transition } from 'react-transition-group'
import * as classnames from 'classnames'

interface VNode {
  props: object
}
interface Props {
  children: VNode
}

interface State {
  in: boolean
}

class FadeAnimation extends Nerv.Component<Props, State> {
  constructor (...args) {
    super(...args)
  }
  render () {
    const { children } = this.props
    const tranProps = { ...this.props }
    delete tranProps.children
    return (
      <Transition {...tranProps}>
        {(state) => {
          return (
            <div
              className={classnames(`fade fade-${state}`)}
            >
              {children}
            </div>
          )
        }}
      </Transition>
    )
  }
}

export default FadeAnimation
