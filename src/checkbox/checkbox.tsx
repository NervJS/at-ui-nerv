import * as Nerv from 'nervjs'
import classnames from 'classnames'
import CheckboxGroup from './checkbox-group'

type labelType = string | number | boolean

export interface CheckboxProps {
  label?: labelType,
  name?: string,
  checked?: boolean,
  disabled?: boolean,
  onChange?: (checked: boolean, label: labelType) => {}
}

interface State {
  focus: boolean,
  currentValue: any
}

class Checkbox extends Nerv.Component < CheckboxProps,
State > {
  static Group: typeof CheckboxGroup
  static defaultProps = {
    value: false,
    checked: false,
    disabled: false
  }
  static elementName = 'AtCheckbox'
  parent: any
  state = {
    focus: false,
    model: this.props.label,
    currentValue: this.props.value
  }
  constructor (...args) {
    super(...args)
    this.onBlurHandle = this
      .onBlurHandle
      .bind(this)
    this.onChangeHandle = this
      .onChangeHandle
      .bind(this)
    this.onFocusHandle = this
      .onFocusHandle
      .bind(this)
  }
  updateModel () {
    const {value} = this.props
    this.setState({currentValue: value})
  }
  componentDidMount () {
    const {checked} = this.props
    if (checked) {
      this.setState({currentValue: checked})
    }
  }
  componentWillReceiveProps (nextProps) {
    const {checked} = nextProps
    const {currentValue} = this.state
    if (!!checked != currentValue) {
      this.setState({currentValue: checked})
    }
  }
  onChangeHandle (evt) {
    const {
      onChange = (a, b) => {
        return
      },
      label
    } = this.props
    if (evt.target instanceof HTMLInputElement) {
      const checked = evt.target.checked

      this.setState({
        currentValue: checked
      }, () => {
        onChange(checked, label)
      })

    }
  }
  onFocusHandle () {
    this.setState({focus: true})
  }
  onBlurHandle () {
    this.setState({focus: false})
  }
  render () {
    const {children, label, name, disabled, checked} = this.props
    const {focus, currentValue} = this.state
    return (
      <label
        className={classnames('at-checkbox', {
        'at-checkbox--focus': focus,
        'at-checkbox--checked': currentValue,
        'at-checkbox--disabled': disabled
      })}>
        <span className='at-checkbox__input'>
          <span className='at-checkbox__inner'/>
          <input
            type='checkbox'
            className='at-checkbox__original'
            name={name}
            checked={checked}
            disabled={disabled}
            onChange={this.onChangeHandle}
            onFocus={this.onFocusHandle}
            onBlur={this.onBlurHandle}/>
        </span>
        <span className='at-checkbox__label'>
          {label || children}
        </span>
      </label >
    )
  }
}
export default Checkbox
