import * as Nerv from 'nervjs'
import Component from '../../libs/component'

export interface RadioGroupProps {
  value: string | number | any[]
  size?: string
  fill?: string
  textColor?: string
  onRadioGroupChange?: (a) => void
}

class RadioGroup extends Component<RadioGroupProps, any> {
  getChildContext (): { RadioGroup } {
    return {
      RadioGroup: this
    }
  }
  onChange (val) {
    const { onRadioGroupChange } = this.props
    if (onRadioGroupChange) {
      onRadioGroupChange(val)
    }
  }
  render () {
    const { style } = this.props
    const children = this.props.children
      ? Nerv.Children.map(
          this.props.children,
          (child, index) => {
            if (!child) { return }
            if (typeof child === 'object' && 'props' in child) {
              const elementName = child.type['elementName']
              if (elementName !== 'AtRadioButton' && elementName !== 'AtRadio') {
                return null
              }
              return Nerv.cloneElement(child, {
                ...child.props,
                onChange: this.onChange.bind(this),
                value: this.props.value,
                size: this.props.size
              })
            }
          }
        )
      : ''
    return (
      <div className={this.className('at-radio-group')} style={style}>
        {children}
      </div>
    )
  }
}

export default RadioGroup
