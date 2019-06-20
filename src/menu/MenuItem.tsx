import * as Nerv from 'nervjs'
import Component from '../../libs/component'

interface MenuItemProps {
  name?: string | number
  to?: object | string
  replace?: boolean
  disabled?: boolean
  rootElem
  _onSelect?: (e: any) => void
}

interface MenuItemState {
  active: boolean
}

class MenuItem extends Component<MenuItemProps, MenuItemState> {
  static defaultProps = {
    disabled: false
  }
  displayName = 'AtMenuItem'

  constructor (...args) {
    super(...args)
    this.state = {
      active: false
    }
  }
  componentDidMount () {
    const { rootElem, name, _onSelect } = this.props
    const { currentActiveItemName } = rootElem.state
    if (name === currentActiveItemName) {
      if (_onSelect) {
        _onSelect(name)
      }
    }
  }
  handleClick = (evt: React.MouseEvent<HTMLElement>) => {
    evt.preventDefault()
    const { name, disabled, _onSelect, rootElem } = this.props
    const { onItemSelect } = rootElem
    if (!disabled) {
      _onSelect && _onSelect(name)
      onItemSelect(name)
    }
  }
  render () {
    const { disabled, children, name, rootElem } = this.props
    const active = rootElem.state.currentActiveItemName === name
    return (
      <li
        className={this.className('at-menu__item', {
          'at-menu__item--active': active,
          'at-menu__item--disabled': disabled
        })}
        onClick={this.handleClick}
      >
        <div className='at-menu__item-link'>{children}</div>
      </li>
    )
  }
}

export default MenuItem
