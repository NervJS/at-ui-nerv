import * as Nerv from 'nervjs'
import classnames from 'classnames'

interface RateProps {
  value?: number
  count?: number
  disabled?: boolean
  allowHalf?: boolean
  showText?: boolean
  icon?: string
  onChange?: (a) => void
  allowClear?: boolean
}

interface RateState {
  currentValue: number
  hoverIndex: number
  lastHoverIndex: number
  isHoverRate: boolean
  isHalf: boolean
}

const checkIsHalf = (val: number, allowHalf: boolean): boolean => {
  return allowHalf && val.toString().indexOf('.') >= 0
}

class Rate extends Nerv.Component<RateProps, RateState> {
  static defaultProps = {
    value: 0,
    count: 5,
    disabled: false,
    allowHalf: false,
    showText: false,
    icon: 'icon-star-on',
    allowClear: true
  }
  constructor (...args) {
    super(...args)
    this.state = {
      currentValue: this.props.value as number,
      hoverIndex: -1,
      lastHoverIndex: -1,
      isHoverRate: false,
      isHalf: this.props.allowHalf as boolean
    }
  }
  leaveRateHandle = () => {
    const { disabled, allowHalf } = this.props
    const { currentValue } = this.state
    if (disabled) {
      return
    }
    this.setState({
      isHoverRate: false,
      hoverIndex: -1,
      lastHoverIndex: -1,
      isHalf: checkIsHalf(currentValue, allowHalf as boolean)
    })
  }

  overRateHandle = (evt) => {
    const { disabled } = this.props
    if (disabled) {
      return
    }
    this.setState({
      isHoverRate: true
    })
  }
  clacClass (index: number) {
    const { isHalf, hoverIndex, currentValue } = this.state
    const STAR_ON_CLASS_NAME = 'at-rate__item--on'
    const STAR_OFF_CLASS_NAME = 'at-rate__item--off'
    const STAR_HALF_CLASS_NAME = 'at-rate__item--half'
    const isHoverStar = hoverIndex !== -1
    const currentIndex = isHoverStar ? hoverIndex : currentValue
    const lastItemIndex = Math.ceil(currentIndex)
    return {
      [STAR_ON_CLASS_NAME]: isHalf ? index < lastItemIndex : index <= lastItemIndex,
      [STAR_HALF_CLASS_NAME]: index === lastItemIndex && isHalf,
      [STAR_OFF_CLASS_NAME]: index > lastItemIndex
    }
  }
  moveStarHandle = (index: number, evt) => {
    const { disabled, allowHalf, onHoverChange } = this.props
    const {isHalf, lastHoverIndex} = this.state
    if (disabled) {
      return
    }
    if (evt.target instanceof HTMLElement) {
      if (allowHalf && evt.target.getAttribute('data-type') === 'half') {
        this.setState({
          hoverIndex: index,
          isHalf: true
        })
      } else {
        this.setState({
          hoverIndex: index,
          isHalf: false
        })
      }
    }
    const exactlyHoverIndex = isHalf ? index - 0.5 : index
    if (exactlyHoverIndex !== lastHoverIndex) {
      if (onHoverChange) {
        onHoverChange(exactlyHoverIndex)
      }
    }
    this.setState({
      lastHoverIndex: exactlyHoverIndex
    })
  }
  confirmValue = (index: number) => {
    const { disabled, onChange, allowClear } = this.props
    const { isHalf, currentValue: oldVal } = this.state
    if (disabled) {
      return
    }
    const currentValue = isHalf ? index - 0.5 : index
    if (allowClear && oldVal === currentValue) {

        this.setState(
          {
            currentValue: 0,
            hoverIndex: -1
          },
          () => {
            if (onChange) {
              onChange(0)
            }
          }
        )

    } else {
      this.setState(
        {
          currentValue
        },
        () => {
          if (onChange) {
            onChange(currentValue)
          }
        }
      )
    }

  }

  render () {
    const { disabled, icon, count, showText, children } = this.props
    const { currentValue } = this.state
    const buildItem = (c: number): Nerv.Component[] => {
      const result: Nerv.Component[] = []
      for (let i = 1; i <= c; i++) {
        result.push((
          <li className={classnames('at-rate__item', this.clacClass(i))}>
            <i
              className={classnames('icon at-rate__icon', icon)}
              onMouseMove={this.moveStarHandle.bind(this, i)}
              onClick={this.confirmValue.bind(this, i)}
            >
              <span className={classnames('icon at-rate__left', icon)} data-type='half' />
            </i>
          </li>
        ) as never)
      }
      return result
    }
    return (
      <div className='at-rate'>
        <ul
          className={classnames('at-rate__list', {
            'at-rate--disabled': disabled
          })}
          onMouseOver={this.overRateHandle}
          onMouseLeave={this.leaveRateHandle}
        >
          {buildItem(count as number)}
        </ul>
        { showText ?
          <div className='at-rate__text'>{Nerv.Children.count(children as never) ? children : currentValue}</div>
          : '' }
      </div>
    )
  }
}

export default Rate
