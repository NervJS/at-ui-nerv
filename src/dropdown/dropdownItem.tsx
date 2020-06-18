import * as Nerv from 'nervjs'
import Component from '../../libs/component'

interface DropdownItemProps {
  name?: string
  disabled?: boolean
  divided?: boolean
  rootElem
}

class DropdownItem extends Component<DropdownItemProps, any> {
  static elementName = 'AtDropdownItem'
  static defaultProps = {
    disabled: false,
    divider: false
  }
  constructor (...args) {
    super(...args)
  }
  onClickHandle = () => {
    const { name, disabled, children, rootElem } = this.props
    if (!disabled) {
      rootElem.onMenuItemClickHandle(name || children, this)
    }
  }
  render () {
    const { children, disabled, divided } = this.props

    return (
      <li
        className={this.className('at-dropdown-menu__item', {
          'at-dropdown-menu__item--disabled': disabled,
          'at-dropdown-menu__item--divided': divided
        })}
        onClick={this.onClickHandle}
      >
        {children}
      </li>
    )
  }
}

export default DropdownItem
