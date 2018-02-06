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
  componentWillReceiveProps (nextProps) {
    console.log('nextProps', nextProps.style, 'this.props', this.props.style)
  }
  handleClick = (e: MouseEvent) => {
    const onClick = this.props.onClick
    if (onClick) {
      onClick(e)
    }
  }
  render () {
    const props = this.props
    let { children } = props
    return (
        <li ref='li' className='at-select__option' onClick={this.handleClick}>{children}</li>
    )
  }
  componentDidMount () {
    
  }
  componentDidUpdate () {
    for (let item in this.props.style) {
      this.refs.li.style[item] = this.props.style[item]
    }
  }
}

export default SelectOption
