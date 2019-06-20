import * as Nerv from 'nervjs'

export interface MenuGroupProps {
  title?: string
  rootElem?
  name: string
  _onSelect?: (e: any) => void
}

class MenuGroup extends Nerv.Component<MenuGroupProps, any> {
  enhanceChildren = () => {
    const { children, rootElem } = this.props
    return Nerv.Children.map(
      children,
      (child, idx) => {
        if (!child) { return }
        if (typeof child === 'object' && 'props' in child) {
          return Nerv.cloneElement(child, {
            ...child.props,
            _onSelect: this.onSelect,
            parentElem: this,
            rootElem
          })
        }
      }
    )
  }
  onSelect = (e) => {
    const { _onSelect, name } = this.props
    _onSelect && _onSelect(name)
  }
  render () {
    const { title } = this.props

    return (
      <ul className='at-menu__item-group'>
        <li className='at-menu__item-group-title'>{title}</li>
        <ul className='at-menu__item-group-list'>{this.enhanceChildren()}</ul>
      </ul>
    )
  }
}

export default MenuGroup
