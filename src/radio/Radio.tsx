import * as Nerv from 'nervjs'
import Component from '../../libs/component'

import RadioGroup from './RadioGroup'
import RadioButton from './RadioButton'

export interface RadioProps {
  value: string | number
  name?: string
  label: string | number
  disabled?: boolean
  onChange?
}

export interface RadioState {
  focus: boolean
  checked: boolean
}

class Radio extends Component<RadioProps, RadioState> {
  static elementName = 'AtRadio'
  static Button: typeof RadioButton
  static Group: typeof RadioGroup
  constructor (...args) {
    super(...args)
    const { label, value } = this.props
    this.state = {
      focus: false,
      checked: this.isChecked(value, label)
    }
  }
  componentWillReceiveProps (nextProps: RadioProps) {
    const { value, label } = nextProps
    const { checked } = this.state
    if (checked !== this.isChecked(value, label)) {
      this.setState({
        checked: !checked
      })
    }
  }
  isChecked = (v: string | number, l: string | number): boolean => {
    return v === l
  }
  onFocusHandle = () => {
    this.setState({
      focus: true
    })
  }
  onBlurHandle = () => {
    this.setState({
      focus: false
    })
  }
  onChangeHandle = (evt) => {
    const { onChange } = this.props
    if (evt.target instanceof HTMLInputElement) {
      const val = evt.target.value
      onChange && onChange(val)
    }
  }
  render () {
    const { label, disabled, children } = this.props
    const { focus, checked } = this.state
    return (
      <label className={this.className('at-radio')}>
        <span className='at-radio__input'>
          <span
            className={this.classnames('at-radio__inner', {
              'at-radio--focus': focus,
              'at-radio--checked': checked,
              'at-radio--disabled': disabled
            })}
          />
          <input
            type='radio'
            className='at-radio__original'
            onChange={this.onChangeHandle}
            name={name}
            checked={checked}
            value={label}
            disabled={disabled}
            onFocus={this.onFocusHandle}
            onBlur={this.onBlurHandle}
          />
        </span>
        <span className='at-radio__label'>{children}</span>
      </label>
    )
  }
}
export default Radio
