import * as Nerv from 'nervjs'
import Component from '../../libs/component'
import CollapseTransition from '../animations/collapse-transition.jsx'
import '../animations/collapseanimations.scss'

export interface CollapseItemProps {
  title?: string
  panelName?: string
  disabled?: boolean
  isActive?: boolean
  _toggle
  key
}

export interface CollapseItemState {
  index: number
  isActive: boolean | undefined
}

class CollapseItem extends Component<
  CollapseItemProps,
  CollapseItemState
> {
  static defaultProps = {
    title: '',
    disabled: false
  }
  static elementName = 'AtCollapseItem'
  constructor (props, context) {
    super(props, context)
    this.state = {
      index: 0,
      isActive: !!this.props.isActive
    }
  }
  toggle = () => {
    const { _toggle, panelName, key = 0, disabled } = this.props
    const { isActive } = this.props
    if (disabled) {
      return
    }
    _toggle({
      name: panelName || key,
      isActive
    })
  }
  panelExitedHandle = () => {
    const { _toggle, panelName, key } = this.props
    const { isActive } = this.state
    _toggle({
      name: panelName || key,
      isActive
    })
  }
  render () {
    const { title, disabled, children } = this.props
    const { isActive } = this.props
    let titleSlot
    const contentSlot = []
    Nerv.Children.forEach(
      children,
      (child, index) => {
        if (!child) { return }
        if (typeof child === 'object' && 'props' in child) {
          const { props } = child
          if (props) {
            switch (props.slot) {
              case 'title':
                titleSlot = child
                break
              default:
                contentSlot.push(child as never)
            }
            delete child.props.slot
          }
        }
      }
    )
    return (
      <div
        className={this.className('at-collapse__item', {
          'at-collapse__item--active': isActive,
          'at-collapse__item--disabled': disabled
        })}
      >
        <div className='at-collapse__header' onClick={this.toggle}>
          <i className='icon at-collapse__icon icon-chevron-right' />{' '}
          {titleSlot || <div>{title}</div>}
        </div>
        <CollapseTransition isShow={isActive}>
          <div className='at-collapse__body'>
            <div className='at-collapse__content'>{contentSlot}</div>
          </div>
        </CollapseTransition>
      </div>
    )
  }
}

export default CollapseItem
