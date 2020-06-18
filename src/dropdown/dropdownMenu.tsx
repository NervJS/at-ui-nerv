import * as Nerv from 'nervjs'
import Component from '../../libs/component'
import { CSSTransition } from 'react-transition-group'

interface DropdownMenuProps {
  show?
  rootElem
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

class DropdownMenu extends Component<DropdownMenuProps, any> {
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
          className={this.className('at-dropdown-menu')}
          ref={(elem) => {
            this.popper = elem as never
          }}
        >
          {Nerv.Children.map(
            children,
            (child, idx) => {
              if (!child) { return }
              if (typeof child === 'object' && 'props' in child) {
                return Nerv.cloneElement(child, {
                  ...child.props,
                  rootElem: this.props.rootElem
                })
              }
            }
          )}
          {/* {children} */}
        </ul>
      </CSSTransition>
    )
  }
}

export default DropdownMenu
