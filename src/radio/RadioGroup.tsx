import * as Nerv from 'nervjs'

interface RadioGroupProps {
  value: string | number
  size?: string
  fill?: string
  textColor?: string
  onRadioGroupChange?: (a) => void
}

class RadioGroup extends Nerv.Component<RadioGroupProps, any> {
  getChildContext (): { RadioGroup } {
    return {
      RadioGroup: this
    }
  }
  onChange (val) {
    const {onRadioGroupChange} = this.props
    if (onRadioGroupChange) {
      onRadioGroupChange(val)
    }
  }
  render () {
    const children = this.props.children ? Nerv.Children.map(this.props.children as object[], (child, index, arr) => {
      if (!child) {
        return null
      }
      const { elementName } = child.type
      if (elementName !== 'AtRadioButton' && elementName !== 'AtRadio') {
            return null
      }
      return Nerv.cloneElement(child, {
        ...child.props,
        onChange: this.onChange.bind(this),
        value: this.props.value,
        size: this.props.size
      })
    }, this) : ''
    return (
      <div className='at-radio-group'>{children}</div>
    )
  }
}

export default RadioGroup
