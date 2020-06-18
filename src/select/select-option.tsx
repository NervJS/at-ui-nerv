import * as Nerv from 'nervjs'
import Component from '../../libs/component'

export interface SelectOptionProps {
  className?: string
  icon?: string
  hollow?: boolean
  nativeType?: string
  loading?: boolean
  circle?: boolean
  disabled?: boolean
  key?
  value?: string | number
  chosenIndex?
  onPageSizeChange?
  onClick?
}

class SelectOption extends Component<SelectOptionProps, any> {
  private $li: any
  constructor (props: SelectOptionProps, context) {
    super(props, context)
    this.state = {}
    this.$li = null
  }
  componentWillReceiveProps (nextProps) {
    // console.log('nextProps', nextProps.style, 'this.props', this.props.style)
  }

  handleClick = (e: React.MouseEvent<HTMLLIElement>) => {
    const onClick = this.props.onClick
    const index = this.props.key
    const onPageSizeChange = this.props.onPageSizeChange
    if (onPageSizeChange) {
      onPageSizeChange(e)
    }

    if (onClick) {
      if (this.props.disabled) {
        onClick(e, index, true)
        return
      }
      onClick(e, index)
    }
  }
  render () {
    const props = this.props
    const { children } = props
    let classname = 'at-select__option'

    // classname += (!!~this.props.chosenIndex) && this.props.chosenIndex == this.props.key ? ' at-select__option--selected': ''
    classname +=
      this.props.chosenIndex &&
      !!~this.props.chosenIndex.indexOf(this.props.key)
        ? ' at-select__option--selected'
        : ''
    if (props.disabled) {
      classname += ' at-select__option--disabled'
    }
    // <SelectOption>{i}  xxx</SelectOption>  最好放进一个变量中，否则children会分成2个数组 {i} 和xxx
    return (
      <li
        ref={(li) => {
          this.$li = li
        }}
        className={classname}
        onClick={this.handleClick as any}
      >
        {children}
      </li>
    )
  }

  componentDidUpdate () {
    if (!this.props.style) { return }
    for (const item in this.props.style) {
      this.$li.style[item] = this.props.style[item]
    }
  }
}

export default SelectOption
