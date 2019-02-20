import * as Nerv from 'nervjs'
import Component from '@lib/component'
import { CSSTransition } from 'react-transition-group'
import CollapseTransition from '../animations/collapse-transition'
import { CSSProperties } from 'react'
import { getStyle, throttle, debounce } from '../utils/util'

interface MenuSubProps {
  title?: any
  isOpen?: boolean
  active?: boolean
  disabled?: boolean
  opened?: boolean
  _onSelect?: (e: any) => void
  _onOpened?: (e: any) => void
}

class MenuSub extends Component<MenuSubProps, any> {
  $popover: any
  $trigger: any
  $reference: any
  _parentComponent: any
  displayName = 'AtSubmenu'
  parentName = null
  constructor (...args) {
    super(...args)
    const { isOpen } = this.props
    this.state = {
      active: false,
      isOpen
    }

    this.menuToggle = debounce(this.menuToggle.bind(this), 200)
  }
  handleClick = (evt: React.MouseEvent<HTMLDivElement>) => {
    evt.stopPropagation()
    const { mode, disabled } = this.props
    const { isOpen } = this.state
    if (!isOpen) {
      this.resetDropdownPosition()
    }
    if ((mode === 'inline' || mode === 'inlineCollapsed') && !disabled) {
      this.setState(
        {
          isOpen: !isOpen
        },
        () => {
          const { name, _onOpened = () => {} } = this.props
          const { isOpen: isOpenN } = this.state
          isOpenN && _onOpened(name)
        }
      )
    }
  }
  handleMouseEnter = (evt) => {
    this.menuToggle('open')
  }
  handleMouseLeave = (evt) => {
    this.menuToggle('close')
  }

  menuToggle = (status) => {
    const { disabled, mode } = this.props
    if (mode === 'inline' || mode === 'inlineCollapsed') {
      return
    }
    this.resetDropdownPosition()
    if (!disabled) {
      this.setState({
        isOpen: status === 'open' ? true : false
      })
    }
  }

  onSelect = (e) => {
    const { _onSelect, name } = this.props
    this.setState({
      currentActiveChildName: e,
      active: true
    })
    _onSelect && _onSelect(name)
  }
  onOpened = (e) => {
    this.setState({
      currentOpenedChildName: e
    })
  }
  enhanceChildren = () => {
    const { children = [], rootElem, mode: parentMode } = this.props
    const { currentOpenedChildName, currentActiveChildName } = this.state
    return Nerv.Children.map(
      children as never,
      (child, idx) => {
        const { name, mode } = child.props
        return Nerv.cloneElement(child, {
          ...child.props,
          isOpen: name === currentOpenedChildName,
          active: name === currentActiveChildName,
          _onSelect: this.onSelect,
          _onOpened: this.onOpened,
          parentElem: this,
          rootElem,
          mode: mode ? mode : parentMode
        })
      },
      this
    )
  }

  resetDropdownPosition () {
    const popover = this.$popover
    const trigger = this.$trigger
    const { mode } = this.props
    const { parentElem: parent } = this.props
    const { displayName: parentName } = parent
    if (mode === 'inline' || mode === 'inlineCollapsed') {
      return
    }
    if (mode === 'vertical') {
      popover.style.left = 'initial'
      popover.style.right = `-${trigger.offsetWidth + 4}px`
      popover.style.top = '0'
    } else if (parent && parentName !== 'AtSubmenu') {
      popover.style.left = '0'
      popover.style.right = 'initial'
      popover.style.top = `${trigger.offsetHeight + 2}px`
    } else {
      popover.style.left = 'initial'
      popover.style.right = `-${trigger.offsetWidth + 4}px`
      popover.style.top = '0'
    }
  }
  componentWillReceiveProps (nextProps, curState) {
    const { isOpen: isOpenP, active: activeP } = nextProps
    const { isOpen: isOpenS, active: activeS } = curState
    if (isOpenP !== isOpenS) {
      this.setState({
        isOpen: isOpenP
      })
    }
    if (!activeP && activeP !== activeS) {
      this.setState({
        currentActiveChildName: null
      })
    }
  }
  render () {
    const { disabled, title, mode, active } = this.props
    const { isOpen } = this.state
    const dropStyle: CSSProperties = {
      minWidth: getStyle(Nerv.findDOMNode(this), 'width'),
      marginLeft: mode === 'vertical' ? '20px' : '0px'
    }
    return (
      <li
        className={this.className('at-menu__submenu', {
          'at-menu__submenu--active': active,
          'at-menu__submenu--opened': isOpen,
          'at-menu__submenu--disabled': disabled
        })}
        onMouseEnter={throttle(this.handleMouseEnter, 200)}
        onMouseLeave={throttle(this.handleMouseLeave, 200)}
        ref={(node) => (this.$trigger = node)}
      >
        <div
          className='at-menu__submenu-title'
          ref={(elem) => (this.$reference = elem)}
          onClick={this.handleClick}
        >
          {title.children}
          <i className='icon icon-chevron-down at-menu__submenu-icon' />
        </div>

        {mode === 'inline' || mode === 'inlineCollapsed' ? (
          <CollapseTransition isShow={isOpen} timeout={300}>
            {}
            <ul className='at-menu'>{this.enhanceChildren()}</ul>
          </CollapseTransition>
        ) : (
          <CSSTransition classNames='slide-up' timeout={300} in={isOpen}>
            <div
              className='at-dropdown__popover'
              style={{ ...dropStyle, display: isOpen ? '' : 'none' }}
              ref={(node) => (this.$popover = node)}
            >
              <ul className='at-dropdown-menu'>{this.enhanceChildren()}</ul>
            </div>
          </CSSTransition>
        )}
      </li>
    )
  }
}

export default MenuSub
