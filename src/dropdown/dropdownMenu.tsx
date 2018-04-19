import * as Nerv from 'nervjs'
import classnames from 'classnames'
import { CSSTransition } from 'react-transition-group'

interface DropdownMenuProps {
  placement?:
    | 'top'
    | 'top-left'
    | 'top-right'
    | 'left'
    | 'left-top'
    | 'left-bottom'
    | 'right'
    | 'right-top'
    | 'right-bottom'
    | 'bottom'
    | 'bottom-left'
    | 'bottom-right'
}

class DropdownMenu extends Nerv.Component<DropdownMenuProps, any> {
  static elementName = 'AtDropdownMenu'
  static defaultProps = {
    placement: 'bottom'
  }
  popper: object

  render () {
    const { children, show } = this.props
    return (
      <CSSTransition classNames='slide-up' in={show} timeout={300}>
        <ul
          className={classnames('at-dropdown-menu')}
          ref={(elem) => {
            this.popper = elem as never
          }}>
          {children}
        </ul>
      </CSSTransition>
    )
  }
}

export default DropdownMenu
