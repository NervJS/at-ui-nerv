import * as Nerv from 'nervjs'
import classnames from 'classnames'
import SelectOption from './select-option'
import Icon from '../icon'
import Tag from '../tag'
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
  private multipleChoices: any[]
  private mulChoicesStyle: any[]
  constructor (props: SelectProps) {
    super(props)
    this.DISPLAY_NONE = 'display:none;'
    this.DISPLAY_BLOCK = 'display:block;'
    this.dropDown = false
    this.isClick = false //是否选中了某个选项，专门用于处理clearable情况
    this.initClass = 'at-select at-select--single'
    this.optionDataArr = []
    this.childStyle = []
    this.multipleChoices = []
    this.mulChoicesStyle = []
    this.toggleDropDown = this.toggleDropDown.bind(this) //选项列表的出现与否
    this.handleClick = this.handleClick.bind(this) //点中某个选项
    this.renderWrapperClassNames = this.renderWrapperClassNames.bind(this)
    this.handleOverIconX = this.handleOverIconX.bind(this)
    this.handleLeaveIconX = this.handleLeaveIconX.bind(this)
    this.handleClear = this.handleClear.bind(this) //清空选项
    this.handleInput = this.handleInput.bind(this)
    this.hideAllOption = this.hideAllOption.bind(this)
    this.showAllOption = this.showAllOption.bind(this)
    this.windowClickHide = this.windowClickHide.bind(this)
    this.state = {
      dropDownStyle: 'display:none;',
      wrapperClassName: 'at-select at-select--single',
      optionChosen: '请选择',
      optionChosenStyleDown: this.DISPLAY_NONE,
      optionChosenStyleUp: this.DISPLAY_BLOCK,
      iconXShow:  this.DISPLAY_NONE,
      iconChevronShow:  this.DISPLAY_BLOCK,
      inputValue: '',
      noDataShow: this.DISPLAY_NONE,
      dataShow: this.DISPLAY_NONE,
      multipleChoices: [],
      mulChoicesStyle: []
    }
  }
  renderWrapperClassNames (props: SelectProps) {
    return classnames(this.initClass, [
      props.disabled ? `at-select--disabled` : '',
      props.size ? `at-select--${props.size}` : `at-select--normal`
    ], props.className)
  }
  handleClose ( key, e) {
    e.stopPropagation()
    if (this.multipleChoices && this.multipleChoices.length>0) {
      this.mulChoicesStyle[key] = {display: 'none'}
      this.setState({
        mulChoicesStyle: this.mulChoicesStyle.concat(),
        multipleChoices: this.multipleChoices.concat()
      },()=>{
        console.log('display none', this.state.mulChoicesStyle[0].display)
      })
    }
  }
  shouldComponentUpdate (nextProps,nextState) {
    return true;
  }
  handleClick = (clickHandler, children) => {
    return (e: MouseEvent) => {
      if (clickHandler) {
        clickHandler(e)
      }
      if (this.props.filterable) {
        this.setState({
          inputValue: children
        })
      } else {
        if (this.props.multiple) {
          let index = this.multipleChoices.length
          this.mulChoicesStyle.push({display:'inline-block'})
          this.state.mulChoicesStyle.push({display:'inline-block'})
          this.multipleChoices.push(<Tag closable onClose={this.handleClose.bind(this,index)} key={index} style={this.state.mulChoicesStyle[index]}>{children}</Tag>)
          
          this.setState({
            multipleChoices: this.multipleChoices.concat(), //样式数组
            optionChosenStyleUp:  this.DISPLAY_NONE,//收起占位符“请选择”
            mulChoicesStyle: this.mulChoicesStyle   //已选选项数组
          },()=>{
            console.log('renderwwwww', this.state.multipleChoices)
          })
          
        } else {
          this.setState({
            optionChosen: children,
            optionChosenStyleDown:  this.DISPLAY_BLOCK, //展示已选择的选项
            optionChosenStyleUp:  this.DISPLAY_NONE,//收起占位符“请选择”
          })
        }
      }
      if (this.props.clearable) {
        const tempStyle = 'at-select--show-clear'
        this.setState({
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
        let childShow = child.props.children
        if (typeof childShow != 'string') {
          childShow = child.props.label
        }
        this.optionDataArr.push(childShow)
        this.childStyle[i] = child.props.style || ''
        child.props.onClick = this.handleClick(child.props.onClick, childShow)
      }, null)
    }
  }
  handleOverIconX () {
    if (this.props.clearable) {
      if (this.props.filterable) {
        //如果是可检索类型，只需要input框非空
        if (this.state.inputValue!='') {
          this.setState({
            iconXShow: this.DISPLAY_BLOCK,
            iconChevronShow:  this.DISPLAY_NONE
          })
        }
      } else {
        //非检索类型，还要点击以后
        if (this.isClick) {
          this.setState({
            iconXShow: this.DISPLAY_BLOCK,
            iconChevronShow:  this.DISPLAY_NONE
          })
        }
      }
    }
  }
  handleLeaveIconX () {
    if (this.isClick && this.props.clearable && this.state.inputValue!='') {
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
    if (this.props.filterable) {
      this.setState({
        inputValue: '',
        iconXShow: this.DISPLAY_NONE,
        iconChevronShow: this.DISPLAY_BLOCK,
      })
      this.showAllOption()
    } else {
      this.setState({
        iconXShow: this.DISPLAY_NONE,
        iconChevronShow: this.DISPLAY_BLOCK,
        optionChosenStyleDown:  this.DISPLAY_NONE,
        optionChosenStyleUp:  this.DISPLAY_BLOCK
      })
    }
    this.isClick = false
  }
  handleInput (e) {
    const value = e.target.value
    this.setState({
      inputValue: value
    })
    if (!this.dropDown) {
      this.dropDown = !this.dropDown
      let newDropDownStyle = this.DISPLAY_BLOCK
      let wrapperClassName = classnames(this.initClass, 'at-select--visible') 
      this.setState({
        dropDownStyle: newDropDownStyle ,
        wrapperClassName
      })
    }
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
  hideAllOption () {
    Nerv.Children.map(this.props.children as any, (child, i) => {
      child.props.style = this.childStyle[i] + ' ' + this.DISPLAY_NONE
    }, null)
  }
  showAllOption () {
    Nerv.Children.map(this.props.children as any, (child, i) => {
      child.props.style = this.childStyle[i] + ' ' + this.DISPLAY_BLOCK
    }, null)
  }
  render () {
    const props = this.props
    const { style } = props
    let clearBtn = null
    let searchInput = null
    let dropDownStyle = `${this.state.dropDownStyle}`
    if (props.clearable) {
      clearBtn = <Icon type='icon-x' className='at-select__clear' style={this.state.iconXShow} ref='iconx' onClick={this.handleClear} onMouseLeave={this.handleLeaveIconX}/>
    }
    if (props.filterable) {
      searchInput = <input type='text' onChange={this.handleInput} value={this.state.inputValue} placeholder='请输入查询数据' className='at-select__input' />
    }
    return (
      <div className={this.state.wrapperClassName} style={style}>
        <span>xxx{JSON.stringify(this.state.mulChoicesStyle[0])}</span>
        <div className='at-select__selection' onClick={this.toggleDropDown}>
          <span className='at-select__placeholder' style={this.state.optionChosenStyleUp}>请选择</span>
          <span className='at-select__selected' style={this.state.optionChosenStyleDown}>{this.state.optionChosen}</span>
          {this.state.multipleChoices}
          {searchInput}
          <Icon type='icon-chevron-down' className='at-select__arrow' style={this.state.iconChevronShow} onMouseEnter={this.handleOverIconX}></Icon>
          {clearBtn}
        </div>
        <div className='at-select__dropdown at-select__dropdown--bottom' style={dropDownStyle}>
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
    window.addEventListener('click', this.windowClickHide.bind(this))
  }
  toggleDropDown (e) {
    e.stopPropagation()
    if (this.props.disabled) { return false }
    let onClickHandler: any
    if (onClickHandler = this.props.onClick) {onClickHandler(e)}
    let newDropDownStyle = ''
    let wrapperClassName = ''
    this.dropDown = !this.dropDown
    if (this.dropDown) {
      newDropDownStyle = this.DISPLAY_BLOCK
      wrapperClassName = classnames(this.initClass, 'at-select--visible')
      if (this.props.filterable) {
        this.searchOptionData('')
      } else {
        this.setState({
          noDataShow: this.DISPLAY_NONE,
          dataShow: this.DISPLAY_BLOCK
        })
      }
    } else {
      newDropDownStyle =  this.DISPLAY_NONE
      wrapperClassName = classnames(this.initClass)
    }
    this.setState({
      dropDownStyle: newDropDownStyle ,
      wrapperClassName
    })
  }
  windowClickHide (e) {
    if (this.dropDown) {
      let wrapperClassName = ''
      this.dropDown = false
      let newDropDownStyle =  this.DISPLAY_NONE
      wrapperClassName = classnames(this.initClass)
      this.setState({
        dropDownStyle: newDropDownStyle ,
        wrapperClassName
      })
    }
  }
}

export default Select
