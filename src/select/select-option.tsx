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
    this.state = {

    }
  }
  componentWillReceiveProps (nextProps) {
    // console.log('nextProps', nextProps.style, 'this.props', this.props.style)
  }

  handleClick = (e: MouseEvent) => {

    const onClick = this.props.onClick
    const index = this.props.key
    this.setState({
      chosen : true
    })
    if (onClick) {
      if (this.props.disabled) {onClick(e, index, true); return}
      onClick(e, index)
    }
  }
  render () {
    const props = this.props
    const { children } = props
    let classname = 'at-select__option'

    // classname += (!!~this.props.chosenIndex) && this.props.chosenIndex == this.props.key ? ' at-select__option--selected': ''
    classname += this.props.chosenIndex && !!~this.props.chosenIndex.indexOf(this.props.key) ? ' at-select__option--selected' : ''
    if (props.disabled) {
      classname += ' at-select__option--disabled'
    }
      // <SelectOption>{i}  xxx</SelectOption>  最好放进一个变量中，否则children会分成2个数组 {i} 和xxx
    return (
        <li ref='li' className={classname} onClick={this.handleClick as any}>{children}</li>
    )
  }
  componentDidMount () {

  }
  componentDidUpdate () {
    for (const item in this.props.style) {
      this.refs.li.style[item] = this.props.style[item]
    }
  }
}

export default SelectOption
