import * as Nerv from 'nervjs'
import Component from '@lib/component'
import CollapseTransition from '../animations/collapse-transition.jsx'
import '../animations/collapseanimations.scss'

export interface CollapseItemProps {
  title?: string
  panelName?: string
  disabled?: boolean
  isActive?: boolean
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
  constructor (...args) {
    super(...args)
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
    let titleSlot = null
    const contentSlot = []
    Nerv.Children.forEach(
      children as never,
      (child, index) => {
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
      },
      this
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
          {}
          <div className='at-collapse__body'>
            <div className='at-collapse__content'>{contentSlot}</div>
          </div>
        </CollapseTransition>
      </div>
    )
  }
}

export default CollapseItem
