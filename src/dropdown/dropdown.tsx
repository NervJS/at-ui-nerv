import * as Nerv from 'nervjs'
import Component from '@lib/component'
import DropdownItem from './dropdownItem'
import DropdownMenu from './dropdownMenu'

interface DropdownProps {
  trigger?: 'click' | 'hover' | 'focus'
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
  dropDownChange?: (name) => void
}

interface DropdownState {
  visible: boolean
}

class Dropdown extends Component<DropdownProps, DropdownState> {
  static Item: typeof DropdownItem
  static Menu: typeof DropdownMenu
  static elementName = 'AtDropDown'
  static defaultProps = {
    trigger: 'hover',
    placement: 'bottom-left'
  }
  container: any
  trigger: any
  dropdown: any
  popperJs: any
  constructor (...args) {
    super(...args)
    this.state = {
      visible: false
    }
  }
  componentDidMount () {
    this.initEvent()
    this.setMenuPlacement()
  }
  componentWillUnmount () {
    // console.log(this.popperJs)
    // this.popperJs.destroy()
    const { trigger } = this.props
    const triggerElm = this.trigger
    switch (trigger) {
      case 'click':
        triggerElm.removeEventListener('click', this.onClickHandle)
        break
      case 'hover':
        triggerElm.removeEventListener('mouseenter', this.show)
        triggerElm.removeEventListener('mouseleave', this.hide)
        // const dropdownElm = this.dropdown
        // dropdownElm.removeEventListener('mouseenter', this.show)
        // dropdownElm.removeEventListener('mouseleave', this.hide)
        break
      default:
        triggerElm.removeEventListener('click', this.onClickHandle)
    }
  }
  setMenuPlacement = () => {
    // const { placement } = this.props
    // const container = Nerv.findDOMNode(this.container)
    // const dropdownElem = Nerv.findDOMNode(this.dropdown)
    // const placementStrategy = {
    //   top: '',
    //   'top-left': '',
    //   'top-right': '',
    //   bottom: 'bottom',
    //   'bottom-left': 'bottom-start',
    //   'bottom-right': 'bottom-end'
    //   }
    // this.popperJs = new Popper(container, dropdownElem, {
    //   placement:  placementStrategy[placement as never],
    //   positionFixed: true
    // })
  }
  initEvent = () => {
    const { trigger } = this.props
    const triggerElm = this.trigger
    switch (trigger) {
      case 'click':
        triggerElm.addEventListener('click', this.onClickHandle)
        break
      case 'hover':
        triggerElm.addEventListener('mouseenter', this.show)
        triggerElm.addEventListener('mouseleave', this.hide)
        // const dropdownElm = this.dropdown
        // dropdownElm.addEventListener('mouseenter', this.show)
        // dropdownElm.addEventListener('mouseleave', this.hide)
        break
      default:
        triggerElm.addEventListener('click', this.onClickHandle)
    }
  }
  getChildContext () {
    return { component: this }
  }
  onClickHandle = () => {
    const { visible } = this.state
    this.setState({
      visible: !visible
    })
  }
  show = () => {
    this.setState({ visible: true })
  }
  hide = () => {
    this.setState({ visible: false })
  }

  getMenuElement = (elem) => {
    if (elem.type && elem.type.elementName === 'AtDropdownMenu') {
      return Nerv.cloneElement(elem, { ref: 'dropdown' })
    }
  }
  onMenuItemClickHandle = (name, ctx) => {
    const { dropdownChange } = this.props
    if (typeof dropdownChange === 'function') {
      dropdownChange(name, ctx)
    }
    this.setState({
      visible: false
    })
  }
  splitChildren = () => {
    const { children } = this.props
    const menu = []
    const trigger = []
    Nerv.Children.forEach(
      children as any,
      (
        child: {
          type
        },
        idx
      ) => {
        if (child.type && child.type.elementName === 'AtDropdownMenu') {
          menu.push(this.enhanceMenu(child) as never)
          return
        }
        trigger.push(child as never)
      },
      this
    )
    return { menu, trigger }
  }
  enhanceMenu = (menu) => {
    const { placement } = this.props
    const { visible } = this.state
    return Nerv.cloneElement(menu, { placement, show: visible, rootElem: this })
  }

  render () {
    const { visible } = this.state
    const { menu, trigger } = this.splitChildren()
    return (
      <div
        className={this.className('at-dropdown')}
        ref={(elem) => {
          this.container = elem
        }}
      >
        <div
          className='at-dropdown__trigger'
          ref={(elem) => {
            this.trigger = elem
          }}
        >
          {trigger}
          <div
            className={this.classnames('at-dropdown__popover')}
            style={{
              display: visible ? 'block' : 'none'
            }}
            ref={(elem) => {
              this.dropdown = elem
            }}
          >
            {this.enhanceMenu(menu)}
          </div>
        </div>
      </div>
    )
  }
}

export default Dropdown
