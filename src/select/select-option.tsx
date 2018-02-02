import * as Nerv from 'nervjs'

export interface SelectOptionProps {
  className?: string
  icon?: string
  hollow?: boolean
  nativeType?: string
  loading?: boolean
  circle?: boolean
  disabled?: boolean
}

class SelectOption extends Nerv.Component<SelectOptionProps, any> {

  constructor (props: SelectOptionProps) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  static defaultProps = {
    loading: false,
    type: 'default',
    disabled: false
  }

  handleClick = (e: MouseEvent) => {
    const onClick = this.props.onClick
    if (onClick) {
      onClick(e)
    }
  }
  render () {
    const props = this.props
    const { children, style } = props
    return (
        <li style={style} className='at-select__option' onClick={this.handleClick}>{children}</li>
    )
  }
}

export default SelectOption
