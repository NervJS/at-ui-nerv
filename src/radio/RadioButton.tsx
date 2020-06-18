import * as Nerv from 'nervjs'
import Component from '../../libs/component'

export interface RadioButtonProps {
  label: string | number
  value?: string | number
  disabled?: boolean
  onChange?
  name?
  size?
}

export interface RadioButtonState {
  checked: boolean
}

class RadioButton extends Component<RadioButtonProps, RadioButtonState> {
  static defaultProps = {
    disabled: false
  }
  static elementName = 'AtRadioButton'
  constructor (...args) {
    super(...args)
    const { label, value } = this.props
    this.state = {
      checked: this.isChecked(value, label)
    }
  }
  componentWillReceiveProps (nextProps: RadioButtonProps) {
    const { value, label } = nextProps
    const { checked } = this.state
    if (checked !== this.isChecked(value, label)) {
      this.setState({
        checked: !checked
      })
    }
  }
  onChangeHandle = (evt) => {
    const { onChange } = this.props
    if (evt.target instanceof HTMLInputElement) {
      const { value } = evt.target
      onChange(value)
    }
  }
  isChecked = (v: string | number | undefined, l: string | number): boolean => {
    return v === l

  }
  render () {
    const { label, name, disabled, size, children } = this.props
    const { checked } = this.state
    const activeStyle = (): { backgroundColor?: string; borderColor?: string } => {
      const styles: { backgroundColor?: string; borderColor?: string; color?: string } = {}
      const { RadioGroup } = this.context
      if (RadioGroup) {
        if (RadioGroup.props.fill) {
          styles.backgroundColor = RadioGroup.props.fill
          styles.borderColor = RadioGroup.props.fill
        }

        if (RadioGroup.props.textColor) {
          styles.color = RadioGroup.props.textColor
        }
      }
      return styles
    }
    return (
      <label
        className={this.className('at-radio-button', {
          [`at-radio-button--${size}`]: !!size,
          'at-radio--checked': checked
        })}
      >
        <input
          type='radio'
          className='at-radio-button__original'
          onChange={this.onChangeHandle}
          checked={checked}
          value={label}
          name={name}
          disabled={disabled}
        />
        <span className='at-radio-button__inner' style={checked ? activeStyle() : {}}>
          {children}
        </span>
      </label>
    )
  }
}

export default RadioButton
