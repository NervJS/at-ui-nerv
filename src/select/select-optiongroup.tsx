import * as Nerv from 'nervjs'

export interface SelectOptionGroupProps {
  className?: string
  icon?: string
  hollow?: boolean
  nativeType?: string
  loading?: boolean
  circle?: boolean
  disabled?: boolean
  value?: any
  label?
}

class SelectOptionGroup extends Nerv.Component<SelectOptionGroupProps, any> {

  constructor (props: SelectOptionGroupProps, context) {
    super(props, context)
    this.state = {

    }
  }

  render () {
    return (
      <ul className='at-option-group'>
        <li className='at-option-group__label'>{this.props.label}</li>
        <ul className='at-option-group__list'>
          {this.props.children}
        </ul>
      </ul>
    )
  }
}

export default SelectOptionGroup
