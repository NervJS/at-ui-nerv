import * as Nerv from 'nervjs'
import * as classnames from 'classnames'
import { CompositeComponent } from 'nerv-shared'

interface InputNumberProps {
  value?: number
  onBlur?: (a?) => {}
  onFocus?: (a) => {}
  size?: 'large' | 'normal' | 'small'
  step?: number | string
  min?: number
  max?: number
  disabled?: boolean
  readonly?: boolean
  autofocus?: boolean
}

interface InputNumberState {
  currentValue: number
}

class InputNumber extends Nerv.Component<InputNumberProps, InputNumberState> {
  static defaultProps = {
    step: 1,
    disabled: false,
    size: 'normal',
    value: 0,
    min: 0,
    max: Number.POSITIVE_INFINITY
  }
  timeout: number
  constructor (...args) {
    super(...args)
    this.onBlurHandle = this.onBlurHandle.bind(this)
    this.onFocusHandle = this.onFocusHandle.bind(this)
    this.onKeyDownHandle = this.onKeyDownHandle.bind(this)
    this.decreaseNum = this.decreaseNum.bind(this)
    this.increaseNum = this.increaseNum.bind(this)
    this.calculateNumber = this.calculateNumber.bind(this)
    this.calculateStep = this.calculateStep.bind(this)
    this.onChangeHandle = this.onChangeHandle.bind(this)
    this.state = {
      currentValue: this.props.value || 0
    }
  }
  increaseNum () {
    const { currentValue } = this.state
    const { max = Number.POSITIVE_INFINITY, disabled } = this.props
    const value = currentValue || 0
    if (value >= max || disabled) {
      return
    }
    this.calculateStep('up')
  }
  decreaseNum () {
    const {currentValue} = this.state
    const {min = Number.NEGATIVE_INFINITY, disabled} = this.props
    const value = currentValue || 0
    if (value <= min || disabled) { return }
    this.calculateStep('down')
  }
  calculateStep (type) {
    const { currentValue } = this.state
    const { max = Number.POSITIVE_INFINITY, min = Number.NEGATIVE_INFINITY, disabled, step, onChange } = this.props
    if (disabled) { return }
    let value = Number(currentValue)
    const stepNum = Number(step)
    if (type === 'up') {
      value = this.calculateNumber(value, stepNum, '+')
    } else if (type === 'down') {
      value = this.calculateNumber(value, stepNum, '-')
    }

    if (value > max || value < min) { return }
    this.setState({ currentValue: value })
    onChange(value)
  }
  calculateNumber (num: number, stepNum: number, symbol: string): number {
    let decimal1, decimal2

    try {
      decimal1 = num.toString().split('.')[1].length
    } catch (e) {
      decimal1 = 0
    }

    try {
      decimal2 = stepNum.toString().split('.')[1].length
    } catch (e) {
      decimal2 = 0
    }

    const quantity = Math.pow(10, Math.max(decimal1, decimal2))
    if (symbol === '+') {
      return ((num * quantity) + (stepNum * quantity)) / quantity
    } else if (symbol === '-') {
      return ((num * quantity) - (stepNum * quantity)) / quantity
    } else {
      return num
    }
  }
  onBlurHandle (evt: CompositionEvent): void {
    const { onBlur } = this.props
    if (onBlur) {
      onBlur()
    }
    if (evt.target instanceof HTMLInputElement) {
      const {min = Number.NEGATIVE_INFINITY , max = Number.POSITIVE_INFINITY, onChange} = this.props
      let val = Number(evt.target.value)
      if (val > max) {
        val = max
      } else if (val < min) {
        val = min
      }
      this.setState({
        currentValue: val
      }, () => {
        onChange(val)
      })
    }
  }
  onFocusHandle (evt: CompositeComponent): void {
    const { onFocus } = this.props
    if (onFocus) {
      onFocus(evt)
    }
  }
  onKeyDownHandle (evt: KeyboardEvent): void {
    const { keyCode } = evt
    if (keyCode === 38) {
      evt.stopPropagation()
      evt.preventDefault()
      this.increaseNum()
    } else if (keyCode === 40) {
      evt.stopPropagation()
      evt.preventDefault()
      this.decreaseNum()
    }
  }
  onChangeHandle (evt) {
    if (evt.target instanceof HTMLInputElement) {
      const val = Number(evt.target.value)
      this.setState({
        currentValue: val
      }, () => {
        clearTimeout(this.timeout)
        this.timeout = setTimeout(() => {
          this.onBlurHandle(evt)
        }, 750)
      })
    }
  }
  render () {
    const { size, disabled, name, readonly, max = Number.POSITIVE_INFINITY, min = Number.NEGATIVE_INFINITY, autofocus, step } = this.props
    const { currentValue } = this.state
    const upDisabled = currentValue + Number(step) > max
    const downDisabled = currentValue - Number(step) < min
    return (
      <div
        className={classnames('at-input-number', {
          [`at-input-number--${size}`]: !!size,
          'at-input-number--disabled': disabled
        })}
      >
        <div className='at-input-number__input'>
          <input
            type='number'
            className='at-input-number__original'
            value={currentValue}
            name={name}
            disabled={disabled}
            readonly={readonly}
            max={max}
            min={min}
            autofocus={autofocus}
            onFocus={this.onFocusHandle}
            onBlur={this.onBlurHandle}
            onKeyDown={this.onKeyDownHandle}
            onInput={this.onChangeHandle}
          />
        </div>

        <div className='at-input-number__handler'>
          <span
            className={classnames('at-input-number__up', {
              'at-input-number__up--disabled': upDisabled
            })}
            onClick={this.increaseNum}
          >
            <i className='icon icon-chevron-up' />
          </span>
          <span
            className={classnames('at-input-number__down', {
              'at-input-number__down--disabled': downDisabled
            })}
            onClick={this.decreaseNum}
          >
            <i className='icon icon-chevron-down' />
          </span>
        </div>
      </div>
    )
  }
}

export default InputNumber
