import * as Nerv from 'nervjs'
import {Transition} from 'react-transition-group'
import * as classnames from 'classnames'

import './collapseanimations.scss'

interface CollapseProps {
}

class CollapseAnimation extends Nerv.Component < CollapseProps,
any > {
  render () {
    const {children, timeout} = this.props
    const tranProps = {
      ...this.props
    }
    delete tranProps.children
    return (
      <Transition {...tranProps}>
        {(state) => {
          return (
            <div
              className={classnames(`collapse collapse-${state}`)}
              style={{
              transition: `height ${timeout}ms ease-out`
            }}>
              {children}
            </div>
          )
        }}
      </Transition>
    )
  }
}
export default CollapseAnimation
