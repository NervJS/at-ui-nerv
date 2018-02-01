import * as Nerv from 'nervjs'
import classnames from 'classnames'
import SelectOption from './select-option'
import Icon from '../icon'
export type ButtonType = 'default' | 'primary' | 'success' | 'error' | 'warning' | 'info' | 'text'
export type ButtonSize = 'large' | 'small' | 'smaller'

export interface SelectProps {
  type?: ButtonType
  className?: string,
  icon?: string
  size?: ButtonSize
  hollow?: boolean
  nativeType?: string
  loading?: boolean
  circle?: boolean
  disabled?: boolean
}

class Select extends Nerv.Component<SelectProps, any> {
  static Option: typeof SelectOption
  static defaultProps = {
    loading: false,
    type: 'default',
    disabled: false
  }

  private dropDown: boolean
  private initClass: string
  private optionDataArr: any[]
  private isClick: boolean
  private childStyle: any[]
  private DISPLAY_NONE: string
  private DISPLAY_BLOCK: string
  constructor (props: SelectProps) {
    super(props)
    this.DISPLAY_NONE = 'display:none;'
    this.DISPLAY_BLOCK = 'display:block;'
    this.dropDown = false
    this.isClick = false //是否选中了某个选项，专门用于处理clearable情况
    this.initClass = 'at-select at-select--single'
    this.optionDataArr = []
    this.childStyle = []
    this.toggleDropDown = this.toggleDropDown.bind(this) //选项列表的出现与否
    this.handleClick = this.handleClick.bind(this) //点中某个选项
    this.renderWrapperClassNames = this.renderWrapperClassNames.bind(this)
    this.handleOverIconX = this.handleOverIconX.bind(this)
    this.handleLeaveIconX = this.handleLeaveIconX.bind(this)
    this.handleClear = this.handleClear.bind(this) //清空选项
    this.handleInput = this.handleInput.bind(this)
    this.state = {
      dropDownStyle: 'top:28px;left:0px;display:none;',
      wrapperClassName: 'at-select at-select--single',
      optionChosen: '请选择',
      optionChosenStyleDown: this.DISPLAY_NONE,
      optionChosenStyleUp: this.DISPLAY_BLOCK,
      iconXShow:  this.DISPLAY_NONE,
      iconChevronShow:  this.DISPLAY_BLOCK,
      inputValue: '',
      noDataShow: this.DISPLAY_NONE,
      dataShowl: this.DISPLAY_NONE
    }
  }
  renderWrapperClassNames (props: SelectProps) {
    return classnames(this.initClass, [
      props.disabled ? `at-select--disabled` : '',
      props.size ? `at-select--${props.size}` : `at-select--normal`
    ], props.className)
  }

  handleClick = (clickHandler, children) => {
    return (e: MouseEvent) => {
      if (clickHandler) {
        clickHandler(e)
      }
      const tempStyle = 'at-select--show-clear'
      if (this.props.filterable) {
        this.setState({
          inputValue: children
        })
      } else {
        this.setState({
          optionChosen: children,
          optionChosenStyleDown:  this.DISPLAY_BLOCK,
          optionChosenStyleUp:  this.DISPLAY_NONE,
          wrapperClassName: this.state.wrapperClassName + tempStyle
        })
      }
      this.toggleDropDown(e)
      this.isClick = true
    }
  }
  componentWillMount () {
    if (this.props.children as any) {
      Nerv.Children.map(this.props.children as any, (child, i) => {
        this.optionDataArr.push(child.props.children)
        this.childStyle[i] = child.props.style || ''
        child.props.onClick = this.handleClick(child.props.onClick, child.props.children)
      }, null)
    }
  }
  handleOverIconX () {
    if (this.isClick) {
      //是否点击了选项
      this.setState({
        iconXShow: 'display:block',
        iconChevronShow:  this.DISPLAY_NONE
      })
    }
  }
  handleLeaveIconX () {
    if (this.isClick) {
      //是否点击了选项
      this.setState({
        iconXShow:  this.DISPLAY_NONE,
        iconChevronShow: this.DISPLAY_BLOCK
      })
    }
  }
  handleClear (e: MouseEvent) {
    //处理clearable清空选项的功能
    e.stopPropagation()
    this.setState({
      iconXShow: this.DISPLAY_NONE,
      iconChevronShow: this.DISPLAY_BLOCK,
      optionChosenStyleDown:  this.DISPLAY_NONE,
      optionChosenStyleUp:  this.DISPLAY_BLOCK
    })
    this.isClick = false
  }
  handleInput (e) {
    const value = e.target.value
    this.setState({
      inputValue: value
    })
    this.searchOptionData (value)
  }
  searchOptionData (val) {
    let arrShow: any[]
    arrShow = []
    let allHide = true
    this.optionDataArr.forEach((value, index) => {
      const pattern = new RegExp(val)
      if (pattern.test(value)) {
        arrShow.push(index)
        allHide = false
      }
    })
    if (!allHide) {
      this.setState({
        noDataShow: this.DISPLAY_NONE,
        dataShow: this.DISPLAY_BLOCK
      })
      Nerv.Children.map(this.props.children as any, (child, i) => {
        if (arrShow.indexOf(i) === -1) {
          child.props.style = this.childStyle[i] + ' ' + this.DISPLAY_NONE
        } else {
          child.props.style = this.childStyle[i] + ' ' + this.DISPLAY_BLOCK
        }
      }, null)
    } else {
      this.setState({
        noDataShow: this.DISPLAY_BLOCK,
        dataShow: this.DISPLAY_NONE
      })
    }
  }
  render () {
    const props = this.props
    const { style } = props
    let clearBtn = null
    let searchInput = null
    if (props.clearable) {
      clearBtn = <Icon type='icon-x' className='at-select__clear' style={this.state.iconXShow} ref='iconx' onClick={this.handleClear} onMouseLeave={this.handleLeaveIconX}/>
    }
    if (props.filterable) {
      searchInput = <input type='text' onChange={this.handleInput} value={this.state.inputValue} placeholder='请选择' className='at-select__input' />
    }
    return (
      <div className={this.state.wrapperClassName} style={style}>
        <div className='at-select__selection' onClick={this.toggleDropDown}>
          <span className='at-select__placeholder' style={this.state.optionChosenStyleUp}>请选择</span>
          <span className='at-select__selected' style={this.state.optionChosenStyleDown}>{this.state.optionChosen}</span>
          {searchInput}
          <Icon type='icon-chevron-down' className='at-select__arrow' style={this.state.iconChevronShow} onMouseEnter={this.handleOverIconX}></Icon>
          {clearBtn}
        </div>
        <div className='at-select__dropdown at-select_dropdown--bottom' style={this.state.dropDownStyle}>
          <ul className='at-select__not-found' style={this.state.noDataShow}>
            <li>无匹配数据</li>
          </ul>
          <ul className='at-select__list' style={this.state.dataShow}>
            {props.children}
          </ul>
        </div>
      </div>
    )
  }
  componentDidMount () {
    this.initClass = this.renderWrapperClassNames(this.props)
    if (this.props.filterable) {
      this.setState({
        optionChosenStyleDown: this.DISPLAY_NONE,
        optionChosenStyleUp: this.DISPLAY_NONE
      })
    }
    this.setState({
      wrapperClassName: this.initClass
    })
  }

  toggleDropDown (e) {
    if (this.props.disabled) { return false }
    let onClickHandler: any
    if (onClickHandler = this.props.onClick) {onClickHandler(e)}
    let newStyle = ''
    let wrapperClassName = ''
    this.dropDown = !this.dropDown
    if (this.dropDown) {
      newStyle.replace('display:none;', '')
      wrapperClassName = classnames(this.initClass, 'at-select--visible')
    } else {
      newStyle +=  this.DISPLAY_NONE
      wrapperClassName = classnames(this.initClass)
    }
    this.setState({
      dropDownStyle: newStyle ,
      wrapperClassName
    })
  }
}

export default Select
