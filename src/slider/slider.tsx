import * as Nerv from 'nervjs'
import classnames from 'classnames'
import Tooltip from '../../src/tooltip'
import Component from '../../libs/component'
export interface SliderProps {
  className?: string
  type?: string
  disabled?
  onDragLeave?
  onDragOver?
  onDrop?
  onMouseOver?
  onMouseEnter?
  onMouseOut?
  onMouseLeave?
  onClick?
  onChange?
}

class Slider extends Component<SliderProps, any> {
  private isDrag: boolean
  private startX: number
  private startPosX: number
  private currX: number
  private sliderWidth: number
  private currPosX: number
  private max: number
  private min: number
  private step: number
  private $bar: any
  constructor (props) {
    super(props)
    let { max = 100, min = 0, value = 0, step = 1 } = props
    if (max > 100 || min < 0 || min > max) {
      max = 100
      min = 0
    }
    let currValue
    if (value < min) {
      currValue = min
    } else if (value > max) {
      currValue = max
    } else {
      currValue = value
    }
    this.state = {
      value: currValue,
      tipStyle: {}
    }
    this.max = max
    this.min = min
    this.step = step
    this.onMouseDownHandler = this.onMouseDownHandler.bind(this)
    this.onDragEnd = this.onDragEnd.bind(this)
    this.onDragging = this.onDragging.bind(this)
    this.onDragStart = this.onDragStart.bind(this)
  }
  renderSliderClassNames (props: SliderProps) {
    return classnames('at-slider', [], props.className)
  }
  render () {
    const props = this.props
    const {
      style,
      onDragLeave,
      onDragOver,
      onDrop,
      onMouseOver,
      onMouseEnter,
      onMouseOut,
      onMouseLeave,
      onClick,
      children
    } = props
    const needProps = {
      children,
      onDragLeave,
      onDragOver,
      onDrop,
      onMouseOver,
      onMouseOut,
      onMouseEnter,
      onMouseLeave,
      onClick
    }
    // const classNames = this.renderSliderClassNames(props)
    const currentWidth = {
      width: `${this.state.value}%`
    }
    const currentLeft = {
      left: `${this.state.value}%`
    }
    let trackClass = 'at-slider__track'
    if (props.disabled) {
      trackClass += ' at-slider--disabled'
    }
    return (
      <div
        className={this.renderSliderClassNames(this.props)}
        {...needProps}
        style={style}
      >
        <div
          className='at-input-number at-slider__input at-input-number--normal'
          style={{ display: 'none' }}
        >
          <div className='at-input-number__input'>
            <input
              type='number'
              max='100'
              min='0'
              className='at-input-number__original'
            />
          </div>
          <div className='at-input-number__handler'>
            <span className='at-input-number__up'>
              <i className='icon icon-chevron-up' />
            </span>
            <span className='at-input-number__down at-input-number__down--disabled'>
              <i className='icon icon-chevron-down' />
            </span>
          </div>
        </div>
        <div
          className={trackClass}
          style={{ width: '80%', marginLeft: '10%' }}
          ref={(bar) => {
            this.$bar = bar
          }}
        >
          <div className='at-slider__bar' style={currentWidth} />
          <div
            className='at-slider__dot-wrapper at-slider__dot-wrapper--hover'
            style={currentLeft}
            onMouseDown={this.onMouseDownHandler}
            onMouseLeave={this.onMouseLeaveHandler}
            onMouseEnter={this.onMouseEnterHandler}
          >
            <Tooltip
              content={this.state.value}
              placement='top'
              tipstyle={this.state.tipStyle}
            >
              <div className='at-slider__dot' />
            </Tooltip>
          </div>
        </div>
      </div>
    )
  }
  componentDidMount () {
    this.sliderWidth = this.$bar.offsetWidth
  }
  onMouseLeaveHandler () {}
  onMouseEnterHandler () {}
  onMouseDownHandler (event) {
    if (this.props.disabled) {
      return
    }
    this.onDragStart(event)
    window.addEventListener('mousemove', this.onDragging)
    window.addEventListener('mouseup', this.onDragEnd)
  }
  onDragStart (event) {
    if (this.props.disabled) {
      return
    }
    this.isDrag = true
    this.startX = event.clientX
    this.startPosX = this.state.value
  }
  onDragging (event) {
    if (this.isDrag) {
      this.currX = event.clientX
      let diff = Math.round(
        ((this.currX - this.startX) / this.sliderWidth) * 100
      ) // 转换成百分制的前进距离
      if (this.step) {
        diff = Math.round(diff / this.step) * this.step
      }
      let newPosX = this.startPosX + diff
      if (newPosX > this.max) {
        newPosX = this.max
      } else if (newPosX < this.min) {
        newPosX = this.min
      }
      this.currPosX = newPosX
      this.setState({
        value: this.currPosX,
        tipStyle: {
          display: 'block'
        }
      })
    }
  }
  setPosition () {}
  onDragEnd () {
    this.isDrag = false
    const props = this.props
    this.setState({
      value: this.currPosX,
      tipStyle: {}
    })
    props.onChange && props.onChange(this.currPosX)
    window.removeEventListener('mousemove', this.onDragging)
    window.removeEventListener('mouseup', this.onDragEnd)
  }
}

export default Slider
