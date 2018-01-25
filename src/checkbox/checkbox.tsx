import * as Nerv from 'nervjs'
import * as classnames from 'classnames'

export interface CheckboxProps {
  value: string | number | boolean | any[],
  label: string | number | boolean,
  name: string,
  checked: boolean,
  disabled: boolean
}

interface State {
  focus: boolean,
  isGroup: boolean,
  model: any,
  currentValue: any
}

class Checkbox extends Nerv.Component < CheckboxProps,
State > {

  static defaultProps = {
    value: false,
    checked: false,
    disabled: false
  }
  parent: any
  name: 'AtCheckbox'
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
  onChangeHandle (evt: CompositionEvent) {
    if (evt.target instanceof HTMLInputElement) {
      const {model} = this.state
      const {
        disabled,
        onInput = () => {}
      } = this.props
      this.setState({model: evt.target.value})
      if (disabled) {
        return false
      }
      const checked: boolean = evt.target.checked
      this.setState({currentValue: checked})
      onInput(checked)

    }

  }
  onFocusHandle () {
    this.setState({focus: true})
  }
  onBlurHandle () {
    this.setState({focus: false})
  }

  render () {
    const {children, name, disabled} = this.props
    const {focus, currentValue, model} = this.state

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
            value={model}
            disabled={disabled}
            onChange={this.onChangeHandle}
            onFocus={this.onFocusHandle}
            onBlur={this.onBlurHandle}/>
        </span>
        <span className='at-checkbox__label'>
          {children
}
        </span>
      </label >
    )
  }
}
export default Checkbox
