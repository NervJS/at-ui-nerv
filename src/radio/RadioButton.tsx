import * as Nerv from 'nervjs'
import * as classnames from 'classnames'

interface RadioButtonProps {
  label: string | number
  value: string | number
  disabled: boolean
}

interface RadioButtonState {
  checked: boolean
}

class RadioButton extends Nerv.Component<RadioButtonProps, RadioButtonState> {
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
  onChangeHandle = (evt: CompositionEvent) => {
    const { onChange } = this.props
    if (evt.target instanceof HTMLInputElement) {
      const { value } = evt.target
      onChange(value)
    }
  }
  isChecked = (v: string | number, l: string | number): boolean => {
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
        className={classnames('at-radio-button', {
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
        <span className='at-radio-button__inner' style={checked ? activeStyle() : null}>
          {children}
        </span>
      </label>
    )
  }
}

export default RadioButton
