import * as Nerv from 'nervjs'
import * as classnames from 'classnames'
import { CSSTransition } from 'react-transition-group'
// import CollapseTransition from '../animations/collapse-animations'

interface CollapseItemProps {
  title?: string
  panelName?: string
  disabled?: boolean
  isActive: boolean
}

interface CollapseItemState {
  index: number
  isActive: boolean
}

class CollapseItem extends Nerv.Component <CollapseItemProps, CollapseItemState> {
  static defaultProps = {
    title: '',
    disabled: false
  }
  static elementName = 'AtCollapseItem'
  constructor (...args) {
    super(...args)
    this.state = {
      index: 0,
      isActive: this.props.isActive
    }
  }
  toggle = () => {
    const { disabled } = this.props
    const { isActive: isActiveS } = this.state
    if (disabled) {
      return
    }
    this.setState({
      isActive: !isActiveS
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
    const { isActive } = this.state
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
        className={classnames('at-collapse__item', {
          'at-collapse__item--active': isActive,
          'at-collapse__item--disabled': disabled
        })}
      >
        <div className='at-collapse__header' onClick={this.toggle}>
          <i className='icon at-collapse__icon icon-chevron-right' />
          {titleSlot || <div>{title}</div>}
        </div>
        <CSSTransition classNames='slide-up' in={isActive} timeout={300} onExited={this.panelExitedHandle}>
          <div className='at-collapse__body' style={{ display: this.props.isActive ? '' : 'none' }}>
            <div className='at-collapse__content'>{contentSlot}</div>
          </div>
        </CSSTransition>
      </div>
    )
  }
}

export default CollapseItem
