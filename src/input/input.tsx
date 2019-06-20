import * as Nerv from 'nervjs'
import Component from '../../libs/component'

export interface InputProps {
  type?: string
  value?: string | number
  name?: string
  placeholder?: string
  icon?: string
  prependButton?: boolean
  appendButton?: boolean
  append?: any
  prepend?: any
  readonly?: boolean
  disabled?: boolean
  autofocus?: boolean
  maxlength?: number
  minlength?: number
  max?: number
  min?: number
  status?: string
  size?
  onFocus?: (evt: FocusEvent) => void
  onBlur?: (evt: FocusEvent) => void
  onInput?: (val: string, evt: InputEvent) => void
}

export interface InputState {
  currentValue?: string | number
}

class Input extends Component<InputProps, InputState> {
  static defaultProps = {
    type: 'text',
    prependButton: false,
    appendButton: false,
    readonly: false,
    disabled: false,
    autofocus: false
  }
  constructor (...args) {
    super(...args)
    this.onBlurHandle = this.onBlurHandle.bind(this)
    this.onFoucsHandle = this.onFoucsHandle.bind(this)
    this.onInputHandle = this.onInputHandle.bind(this)
    this.state = {
      currentValue: this.props.value
    }
  }
  componentWillReceiveProps (nextProps) {
    if (nextProps.value === this.state.currentValue) {
      return
    }
    this.setState({
      currentValue: nextProps.value
    })
  }
  onFoucsHandle (evt) {
    const { onFocus } = this.props
    if (onFocus) {
      onFocus(evt)
    }
  }
  onBlurHandle (evt) {
    const { onBlur } = this.props
    if (onBlur) {
      onBlur(evt)
    }
  }
  onInputHandle (evt) {
    const { onInput } = this.props
    if (onInput) {
      if (evt.target instanceof HTMLInputElement) {
        const val = evt.target.value
        this.setState({
          currentValue: val
        }, () => {
          onInput(val, evt)
        })

      }
    }
  }
  render () {
    const {
      type,
      size,
      status,
      prepend,
      prependButton,
      append,
      appendButton,
      icon,
      disabled,
      placeholder,
      min,
      max,
      minlength,
      maxlength,
      readonly,
      autofocus,
      name
    } = this.props
    const iconName = icon || status
    const iconClass = iconName ? `icon-${iconName}` : ''
    const { currentValue } = this.state
    return (
      <div
        className={this.className('at-input', {
          [`at-input--${size}`]: size ? true : false,
          [`at-input--${status}`]: status ? true : false,
          'at-input-group': prepend || append,
          'at-input--disabled': disabled,
          'at-input--prepend': prepend,
          'at-input--append': append,
          'at-input--icon': icon
        })}
      >
        {prepend ? (
          <div
            className={this.classnames('at-input-group__prepend', {
              'at-input-group--button': prependButton
            })}
          >
            {prepend}
          </div>
        ) : (
          ''
        )}
        <input
          className='at-input__original'
          type={type}
          name={name}
          value={currentValue}
          placeholder={placeholder}
          min={min}
          max={max}
          minLength={minlength}
          maxLength={maxlength}
          disabled={disabled}
          readOnly={readonly}
          autoFocus={autofocus}
          onFocus={this.onFoucsHandle}
          onBlur={this.onBlurHandle}
          onInput={this.onInputHandle}
        />
        {icon ? <i className={this.classnames('at-input__icon icon', iconClass)} /> : ''}
        {append ? (
          <div
            className={this.classnames('at-input-group__append', {
              'at-input-group--button': appendButton
            })}
          >
            {append}
          </div>
        ) : (
          ''
        )}
      </div>
    )
  }
}
export default Input
