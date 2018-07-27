import * as Nerv from 'nervjs'
import classnames from 'classnames'
import Checkbox from '../checkbox'
import Pagination from '../pagination'
import {getStyle} from '../utils/util'
export type SortType = 'normal' | 'desc' | 'asc'
export interface TableProps {
  className?: string
  type?: string
  size?: string
  stripe?: boolean
  border?: boolean
  data?: any[]
  columns?: any[]
  optional?: boolean
  pagination?: boolean
  pageSize?: number
  showPageTotal?: boolean
  showPageSizer?: boolean
  showPagequickjump?: boolean
  height?: string | number
  sortType?: SortType
}

class Table extends Nerv.Component<TableProps, any> {
  private keyArr: any[] = []
  private sortBy: string
  private sortType: string
  private renderArr: any[] = []
  private columnsWidth:any = {}
  constructor (props) {
    super(props)
    this.state = {
      resizeHeight: 0,
      resizeMarginTop: 0,
      valueArr: [],
      selectAll: false,
      currPage: 1,
      currPageSize: 10,
      sortedData: []
    }
    this.resizeHeightHandler = this.resizeHeightHandler.bind(this)
    this.pageSizeChangeHandler = this.pageSizeChangeHandler.bind(this)
    this.pageChangeHandler = this.pageChangeHandler.bind(this)
    this.onSelectAll = this.onSelectAll.bind(this)
    this.sortAscHandler = this.sortAscHandler.bind(this)
    this.sortDescHandler = this.sortDescHandler.bind(this)
    this.createSortedData = this.createSortedData.bind(this)
    this.handleResize = this.handleResize.bind(this)
  }
  renderTableClassNames (props: TableProps) {
    return classnames(
      'at-table',
      [
        props.size ? `at-table--${props.size}` : 'at-table--normal',
        props.stripe ? 'at-table--stripe' : '',
        props.border ? 'at-table--border' : '',
        props.height ? 'at-table--fixHeight' : ''
      ],
      props.className
    )
  }
  componentWillMount () {
    const { data = [], columns = [] } = this.props
    data.forEach((item, index) => {
      this.state.valueArr.push(false)
    })
    columns.forEach((item,index) => {
      item._index = index
      if (item.sortType) {
        (this.sortType = item.sortType), (this.sortBy = item.key)
      }
      if (item.key) {
        this.keyArr.push(item.key)
      }
      if(item.component) {
        this.renderArr.push({
          render:item.component,
          action: item.action || ''
        })
      }
    })
  }
  createPaginationData (data) {
    const pageSize = this.state.currPageSize
    const currPage = this.state.currPage
    const start = (currPage - 1) * pageSize
    const end = currPage * pageSize
    return data.slice(start, end)
  }
  createSortedData (sortBy, sortType) {
    const data = (this.props.data || []).concat()
    if (sortType === 'asc') {
      data.sort((a, b) => {
        return a[sortBy] - b[sortBy]
      })
    } else if (sortType === 'desc') {
      data.sort((a, b) => {
        return b[sortBy] - a[sortBy]
      })
    }
    return data
  }
  sortAscHandler () {
    this.sortType = 'asc'
    this.setState({})
  }
  sortDescHandler () {
    this.sortType = 'desc'
    this.setState({})
  }
  renderSortBtn () {
    return (
      <div className='at-table__column-sorter' style={{ cursor: 'pointer' }}>
        <span
          className='at-table__column-sorter-up'
          onClick={this.sortAscHandler}
        >
          <i className='icon icon-chevron-up' />
        </span>
        <span
          className='at-table__column-sorter-down'
          onClick={this.sortDescHandler}
        >
          <i className='icon icon-chevron-down' />
        </span>
      </div>
    )
  }
  renderData () {
    const props = this.props
    let data = props.data || []
    if (this.sortBy) {
      data = this.createSortedData(this.sortBy, this.sortType || 'normal')
    }
    if (props.pagination) {
      data = this.createPaginationData(data)
    }

    const dataElement: any[] = []

    data.forEach((item, index) => {
      const tdElement: any[] = []
      // 处理多选框
      if (this.props.optional) {
        tdElement.push(
          <th
            className='at-table__cell at-table__column-selection'
            data-value={this.state.valueArr[index]}
          >
            <Checkbox
              checked={this.state.valueArr[index]}
              onChange={this.onSelectionChange.bind(this, item, index)}
            />
          </th>
        )
      }
      this.keyArr.forEach((key, index) => {
        tdElement.push(<td className='at-table__cell'>{item[key]}</td>)
      })
      this.renderArr.forEach((item) => {
        const {action,render} = item
        const {type, props, children} = render
        let element = Nerv.createElement(type, props, children)
        element.props[action] = element.props[action].bind(element,index)
        tdElement.push(<td className='at-table__cell'>{element}</td>)
      })
      dataElement.push(<tr>{tdElement}</tr>)
    })
    return <tbody ref='tablebody' className='at-table__tbody'>{dataElement}</tbody>
  }
  renderColumns () {
    const columns = this.props.columns || []
    const columnsElement: any[] = []
    if (this.props.optional) {
      columnsElement.push(
        <th className='at-table__cell at-table__column-selection'>
          <Checkbox
            checked={this.state.selectAll}
            onChange={this.onSelectAll}
          />
        </th>
      )
    }
    columns.forEach((item) => {
      if(!item.checkbox== true) {
        let sortBtn
        if (item.sortType) {
          sortBtn = this.renderSortBtn()
        }
        columnsElement.push(
          <th
            className='at-table__cell at-table__column'
            style={{ cursor: 'text' }}
          >
            {item.title}
            {sortBtn}
        </th>)
      }
    })
    return (<thead className='at-table__thead'>
              <tr>
                {columnsElement}
              </tr>
            </thead>)
  }
  _renderPagination () {
    const props = this.props
    const dataSize = props.data && props.data.length
    let renderPagination: any = null
    if (props.pagination) {
      renderPagination = (<Pagination total={dataSize} showTotal showSizer showQuickJump onPageChange={this.pageChangeHandler} onPageSizeChange={this.pageSizeChangeHandler} />)
    }
    return renderPagination
  }
  pageChangeHandler (currPage, event) {
    this.setState({
      currPage
    })
  }
  pageSizeChangeHandler (event, currPageSize) {
    this.setState({
      currPageSize,
      currPage: 1
    })
  }
  handleResize () {
      const columnsWidth = {}
      if ((this.props.data || []).length) {
        const $td = this.refs.tablebody.querySelectorAll('tr')[0].querySelectorAll('td')
        for (let i = 0; i < $td.length; i++) {
          const column = (this.props.columns || [] )[i]
          let width = parseInt(getStyle($td[i],'width'))
          if (column) {
            if (column.width) {
              width = column.width
            }
            columnsWidth[column._index] = { width }
          }
        }
      }
      this.columnsWidth = columnsWidth
      this.setState({
        columnsWidth: this.columnsWidth
      })
  }
  setCellWidth (column,index) {
    let width = ''
    if (column.width) {
      width = column.width
    } else if ((this.state.columnsWidth || {} )[column._index]) {
      width = this.state.columnsWidth[column._index].width
    }

    width = width === '0' ? '' : width
    return width
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
    let body
    const resizeStyle = {
      height: this.state.resizeHeight + 'px',
      marginTop: this.state.resizeMarginTop + 'px'
    }
    let col:any[] = []
    let columns = this.props.columns || []
    columns.forEach((column,index)=>{
        col.push(<col width={this.setCellWidth(column,index)}/>)
    })
    if (!props.height) {
      body = (
        <div className='at-table__content'>
          <div className='at-table__body'>
            <table>
              <colgroup>
                {}
                {col}
              </colgroup>
              {this.renderColumns()}
              {this.renderData()}
            </table>
          </div>
        </div>
      )} else {
        body = (
        <div className='at-table__content' >
          <div className='at-table__header' ref='header'>
            <table>
              <colgroup>
                {}
                {col}
              </colgroup>
              {this.renderColumns()}
            </table>
          </div>
          <div className='at-table__body' style={resizeStyle}>
            <table>
              <colgroup>
                {}
                {col}
              </colgroup>
              {this.renderData()}
            </table>
          </div>
        </div>
      )
    }
    let footer: any = null
    if (props.pagination) {
      footer = (<div className='at-table__footer'>
                  {this._renderPagination()}
                </div>)
    }
    return (
      <div className={classNames} {...needProps} style={style}>
       {body}
       {footer}
      </div>
    )
  }
  onSelectionChange (item, index, value) {
    const propsOnSelectionChange = this.props.onSelectionChange
    if (value) {
      // 如果选中了，则返回值
      const arrTemp = this.state.valueArr
      arrTemp[index] = true
      this.setState({
        valueArr: arrTemp.concat()
      })
      propsOnSelectionChange && propsOnSelectionChange(value, item)
      return item
    } else {
      // 如果取消选中，则返回false
      const arrTemp = this.state.valueArr
      arrTemp[index] = false
      this.setState({
        valueArr: arrTemp.concat()
      })
      propsOnSelectionChange && propsOnSelectionChange(value, item)
      return value
    }
  }
  onSelectAll () {
    const arrTemp = this.state.valueArr
    const selectAll = !this.state.selectAll
    let dataSelected
    for (let i = 0; i < arrTemp.length; i++) {
      if (selectAll) {
        arrTemp[i] = true
        dataSelected = this.props.data
      } else {
        arrTemp[i] = false
        dataSelected = []
      }
    }
    this.setState({
      valueArr: arrTemp.concat(),
      selectAll
    })
    this.props.onSelectAll && this.props.onSelectAll(dataSelected)
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
    this.handleResize()
    if (this.props.height) {
      this.resizeHeightHandler()
    }
    window.addEventListener('resize', this.handleResize)
  }
  componentWillReceiveProps (nextProps) {
  }
  componentWillUnmount () {
    window.removeEventListener('resize', this.handleResize)
  }
  componentWillUpdate (nextProps,nextState) {
    if(this.props.columns != nextProps.columns) {
      this.handleResize()
    }
  }
 }

export default Table
