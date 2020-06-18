import * as Nerv from 'nervjs'
import Component from '../../libs/component'
import { CSSProperties } from 'react'
import MenuGroup from './MenuGroup'
import MenuItem from './MenuItem'
import MenuSub from './MenuSub'

export interface MenuProps {
  mode?: 'inline' | 'horizontal' | 'vertical' | 'inlineCollapse'
  theme?: string
  activeName?: string | number
  inlineCollapsed?: boolean
  width?: string
  router?: boolean
  onSelect?: (e: string | number) => void
}

class Menu extends Component<MenuProps, any> {
  static Group: typeof MenuGroup
  static Item: typeof MenuItem
  static Sub: typeof MenuSub
  static defaultProps = {
    mode: 'inline',
    theme: 'light',
    inlineCollapsed: false,
    width: '240px',
    router: false
  }
  displayName = 'AtMenu'
  constructor (...args) {
    super(...args)
    const { activeName } = this.props
    this.state = {
      currentActiveItemName: activeName || null,
      currentActiveChildName: null
    }
  }
  enhanceChildren = () => {
    const { children, mode, inlineCollapsed } = this.props
    const { currentActiveChildName, currentOpenedChildName } = this.state
    if (inlineCollapsed) {
      return Nerv.Children.map(
        children,
        (child, idx) => {
          if (!child) { return }
          if (typeof child === 'object' && 'props' in child) {
            return (
              child &&
              Nerv.cloneElement(child, {
                ...child.props,
                mode: inlineCollapsed ? 'inlineCollapsed' : mode,
                name: child.props.name ? child.props.name : idx,
                active: Object.is(child.props.name, currentActiveChildName),
                isOpen: Object.is(child.props.name, currentOpenedChildName),
                _onSelect: this.onChildSelect,
                _onOpened: this.onChildOpened,
                parentElem: this,
                rootElem: this
              })
            )
          }
        }
      )
    } else {
      return Nerv.Children.map(
        children,
        (child, idx) => {
          if (!child) { return }
          if (typeof child === 'object' && 'props' in child) {
            return (
              child &&
              Nerv.cloneElement(child, {
                ...child.props,
                mode: inlineCollapsed ? 'inlineCollapsed' : mode,
                name: child.props.name ? child.props.name : idx,
                active: child.props.name === currentActiveChildName,
                _onSelect: this.onChildSelect,
                _onOpened: this.onChildOpened,
                parentElem: this,
                rootElem: this
              })
            )
          }
        }
      )
    }
  }
  onChildOpened = (e) => {
    this.setState({
      currentOpenedChildName: e
    })
  }
  onChildSelect = (e) => {
    this.setState({
      currentActiveChildName: e
    })
  }
  onItemSelect = (e: string | number) => {
    const { onSelect } = this.props
    this.setState(
      {
        currentActiveItemName: e
      },
      () => {
        if (onSelect instanceof Function) {
          onSelect(e)
        }
      }
    )
  }

  componentWillReceiveProps (nextProps, curState) {
    const { activeName } = nextProps
    const { currentActiveItemName } = curState
    if (!Object.is(activeName, currentActiveItemName)) {
      this.setState(
        {
          currentActiveItemName: activeName
        }
      )
    }
  }

  render () {
    const { width, theme, mode } = this.props
    const ulStyle = (): CSSProperties => {
      const style: {
        width?: string
      } = {}
      style.width = mode === 'inline' || mode === 'vertical' ? width : 'auto'
      return style
    }
    const menuClassName = {
      [`at-menu--${theme}`]: theme,
      [`at-menu--${mode}`]: mode
    }
    return (
      <ul
        className={this.className('at-menu', menuClassName as any)}
        style={ulStyle()}
      >
        {this.enhanceChildren()}
      </ul>
    )
  }
}

export default Menu
