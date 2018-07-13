import * as Nerv from 'nervjs'
import classnames from 'classnames'
import Checkbox from '../checkbox'
export interface TableProps {
  className?: string,
  type?: string,
  size?: string,
  stripe?: boolean,
  border?: boolean,
  data?: any[],
  columns?: any[],
  optional?: boolean,
  pagination?: boolean,
  pageSize?: number,
  showPageTotal?: boolean,
  showPageSizer?: boolean,
  showPagequickjump?: boolean,
  height?: string | number
}

class Table extends Nerv.Component<TableProps, any> {
  private keyArr: any[] = []
  constructor (props) {
    super(props)
    this.state = {
      resizeHeight: 0,
      resizeMarginTop: 0,
      valueArr:[],
      selectAll:false
    }
    this.resizeHeightHandler = this.resizeHeightHandler.bind(this)
    // this.onSelectionChange = this.onSelectionChange.bind(this)
    this.onSelectAll = this.onSelectAll.bind(this)
  }
  renderTableClassNames (props: TableProps) {
    return classnames('at-table', [
      props.size ? `at-table--${props.size}` : 'at-table--normal',
      props.stripe ? 'at-table--stripe' : '',
      props.border ? 'at-table--border' : '',
      props.height ? 'at-table--fixHeight' : ''
    ], props.className)
  }
  componentWillMount () {
    let {data=[],columns=[]} = this.props
    data.forEach((item,index) => {
      this.state.valueArr.push(false)
    })
    columns.forEach((item)=>{
      this.keyArr.push(item.key)
    })
  }
  renderData () {
    const data = this.props.data || []
    let dataElement: any[] = []
    
    data.forEach((item,index) => {
      let tdElement: any[] = []
      //处理多选框
      if (this.props.optional) {
        tdElement.push(<th className='at-table__cell at-table__column-selection' value={this.state.valueArr[index]}>
                        <Checkbox checked={this.state.valueArr[index]} onChange={this.onSelectionChange.bind(this,item,index)} />
                       </th>)
      }
      this.keyArr.forEach((key,index) => {
        tdElement.push(<td className='at-table__cell'>{item[key]}</td>)
      })
      dataElement.push(<tr>{tdElement}</tr>)
    })
    return (<tbody className='at-table__tbody'>
              {dataElement}
            </tbody>)
  }
  renderColumns () {
    const columns = this.props.columns || []
    const columnsElement: any[] = []
    if (this.props.optional) {
      columnsElement.push(<th className='at-table__cell at-table__column-selection'>
                           <Checkbox checked={this.state.selectAll} onChange={this.onSelectAll}/>
                          </th>)
    }

    columns.forEach((item) => {
      columnsElement.push(<th className='at-table__cell at-table__column' style='cursor: text;'>{item.title}</th>)
    })

    return (<thead className='at-table__thead'>
              <tr>
                {columnsElement}
              </tr>
            </thead>)
  }
  render () {
    const props = this.props
    let {
      style,
      onDragLeave, onDragOver, onDrop, onMouseOver, onMouseEnter, onMouseOut, onMouseLeave, onClick,
      children
      } = props
    const needProps = {
      children,
      onDragLeave,
      onDragOver,
      onDrop,
      onMouseOver,
      onMouseOut,
      onMouseEnter,
      onMouseLeave,
      onClick
      }
    const classNames = this.renderTableClassNames(props)
    style = {...style, height: this.props.height + 'px'}
    let bodyWithHeight
    const resizeStyle = {
      height: this.state.resizeHeight + 'px',
      marginTop: this.state.resizeMarginTop + 'px'
    }
    if (!props.height) {
      bodyWithHeight = (
        <div class='at-table__content'>
          <div className='at-table__body'>
            <table>
              <colgroup>
                <col width='240'/>
                <col width='157'/>
                <col width='383'/>
              </colgroup>
              {this.renderColumns()}
              {this.renderData()}
            </table>
          </div>
        </div>
      )} else {
        bodyWithHeight = (
        <div className='at-table__content' >
          <div className='at-table__header' ref='header'>
            <table>
              <colgroup>
                <col width='241'/>
                <col width='149'/>
                <col width='373'/>
              </colgroup>
              {this.renderColumns()}
            </table>
          </div>
          <div className='at-table__body' style={resizeStyle}>
            <table>
              <colgroup>
                <col width='241'/>
                <col width='149'/>
                <col width='373'/>
              </colgroup>
              {this.renderData()}
            </table>
          </div>
        </div>
      )
    }
    return (
      <div className={classNames} {...needProps} style={style}>
       {bodyWithHeight}
      </div>
    )
  }
  onSelectionChange (item,index,value) {
    let propsOnSelectionChange = this.props.onSelectionChange
    if(value) {
      //如果选中了，则返回值
      let arrTemp = this.state.valueArr
      arrTemp[index] = true
      this.setState({
        valueArr:arrTemp.concat()
      })
      propsOnSelectionChange && propsOnSelectionChange(value,item);
      return item;
    } else {
      //如果取消选中，则返回false
      let arrTemp = this.state.valueArr
      arrTemp[index] = false
      this.setState({
        valueArr:arrTemp.concat()
      })
      propsOnSelectionChange && propsOnSelectionChange(value,item);
      return value;
    }
    
  }
  onSelectAll () {
    let arrTemp = this.state.valueArr
    let selectAll = !this.state.selectAll
    let dataSelected
    for(let i=0;i<arrTemp.length;i++) {
      if(selectAll) {
        arrTemp[i] = true;
        dataSelected = this.props.data
      } else {
        arrTemp[i] = false
        dataSelected = []
      }
    }
    this.setState({
      valueArr:arrTemp.concat(),
      selectAll: selectAll
    })
    this.props.onSelectAll(dataSelected)
    return dataSelected
  }
  resizeHeightHandler () {
    const resizeMarginTop = this.refs.header.offsetHeight
    const headerHeight = Number(this.props.height) - resizeMarginTop
    this.setState({
      resizeHeight: headerHeight,
      resizeMarginTop
    })
  }
  componentDidMount () {
    if (this.props.height) {
      this.resizeHeightHandler()
    }
  }
  componentWillReceiveProps (nextProps) {
  }
}

export default Table
