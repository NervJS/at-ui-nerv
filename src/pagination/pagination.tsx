import classnames from 'classnames'
import * as Nerv from 'nervjs'

import Component from '../../libs/component'
import Select from '../select'

const SelectOption = Select.Option
export interface PaginationProps {
  className?: string
  type?: string
  size?: string
  total?
  current?
  pageSize?: number
  showQuickJump?
  showSizer?
  showTotal?
  simple?
  onDragLeave?
  onDragOver?
  onDrop?
  onMouseOver?
  onMouseEnter?
  onMouseOut?
  onMouseLeave?
  onClick?
  onPageSizeChange?
  onPageChange?
}

class Pagination extends Component<PaginationProps, any> {
  private page: number
  private total: number
  private $pageInput: any
  private $pageInputSimple: any
  constructor (props, context) {
    super(props, context)
    this.state = {
      currPage: Number(props.current) || 1,
      pageSize: props.pageSize || 10
    }
    this.pageSizeSelectHandler = this.pageSizeSelectHandler.bind(this)
    this.pageMinusHandler = this.pageMinusHandler.bind(this)
    this.pageAddHandler = this.pageAddHandler.bind(this)
    this.keyPressHandler = this.keyPressHandler.bind(this)
    this.keyPressSimpleHandler = this.keyPressSimpleHandler.bind(this)
    this.handleJumpPrev = this.handleJumpPrev.bind(this)
    this.handleJumpNext = this.handleJumpNext.bind(this)
  }
  renderPaginationClassNames (props: PaginationProps) {
    return classnames(
      'at-pagination',
      [props.size && props.size === 'small' ? 'at-pagination--small' : ''],
      props.className
    )
  }
  componentWillReceiveProps (nextProps, nextState) {
    if (nextProps.current !== this.props.current) {
      this.setState({
        currPage: Number(nextProps.current)
      })
    }
  }
  componentWillMount () {
    const props = this.props
    const { total } = props
    this.total = total || 0
  }
  componentWillUpdate (nextProps) {
    const props = nextProps
    const { total } = props
    this.total = total || 0
  }
  totalPage () {
    const num = Math.ceil(this.total / this.state.pageSize)
    return num === 0 ? 1 : num
  }
  visiblePage () {
    return this.total >= 5 ? 5 : this.total
  }
  handleJumpPrev () {
    const page = this.state.currPage - 5
    page ? this.pageClickHandler(page) : this.pageClickHandler(1)
  }
  handleJumpNext () {
    const page = this.state.currPage + 5
    const totalPage = this.totalPage()
    page > totalPage
      ? this.pageClickHandler(totalPage)
      : this.pageClickHandler(page)
  }
  pageRange () {
    const range: any[] = []
    let start: number = 1
    const visiblePage = this.visiblePage()
    const totalPage = this.totalPage()
    if (this.state.currPage + visiblePage / 2 > totalPage) {
      start = totalPage - visiblePage + 1
      start = start > 0 ? start : 1
    } else if (this.state.currPage - visiblePage / 2 > 0) {
      start = Math.ceil(this.state.currPage - visiblePage / 2)
    }
    for (let i = 0; i < visiblePage && i < totalPage; i++) {
      range.push(start + i)
    }
    return range
  }
  _renderPageListLessThan9 () {
    const pageRange = this.pageRange()
    const list: any[] = []
    pageRange.forEach((item) => {
      let classname = 'at-pagination__item'
      if (this.state.currPage === item) {
        classname += ' at-pagination__item--active'
      }
      list.push(
        <li
          className={classname}
          onClick={this.pageClickHandler.bind(this, item)}
        >
          {item}
        </li>
      )
    })
    return list
  }
  _renderPageListMoreThan9 () {
    const totalPage = this.totalPage()
    const list: any[] = []
    const currPage = this.state.currPage

    let className = 'at-pagination__item'
    if (currPage === 1) {
      className += ' at-pagination__item--active'
    }
    list.push(
      <li className={className} onClick={this.pageClickHandler.bind(this, 1)}>
        1
      </li>
    )

    if (currPage > 4) {
      list.push(
        <li
          className='at-pagination__item at-pagination__item--jump-prev'
          title='向前5页'
          onClick={this.handleJumpPrev}
        >
          <i className='icon icon-chevrons-left' />
        </li>
      )
    }
    if (currPage > 3) {
      const pageNum = currPage - 2
      list.push(
        <li
          className='at-pagination__item'
          onClick={this.pageClickHandler.bind(this, pageNum)}
        >
          {pageNum}
        </li>
      )
    }
    if (currPage > 2) {
      const pageNum = currPage - 1
      list.push(
        <li
          className='at-pagination__item'
          onClick={this.pageClickHandler.bind(this, pageNum)}
        >
          {pageNum}
        </li>
      )
    }
    if (currPage !== 1 && currPage !== totalPage) {
      list.push(
        <li
          className='at-pagination__item at-pagination__item--active'
          onClick={this.pageClickHandler.bind(this, currPage)}
        >
          {currPage}
        </li>
      )
    }
    if (currPage < totalPage - 1) {
      list.push(
        <li
          className='at-pagination__item'
          onClick={this.pageClickHandler.bind(this, currPage + 1)}
        >
          {currPage + 1}
        </li>
      )
    }
    if (currPage < totalPage - 2) {
      list.push(
        <li
          className='at-pagination__item'
          onClick={this.pageClickHandler.bind(this, currPage + 2)}
        >
          {currPage + 2}
        </li>
      )
    }
    if (currPage < totalPage - 3) {
      list.push(
        <li
          className='at-pagination__item at-pagination__item--jump-next'
          title='向后5页'
          onClick={this.handleJumpNext}
        >
          <i className='icon icon-chevrons-right' />
        </li>
      )
    }
    if (totalPage > 1) {
      let className = 'at-pagination__item'
      if (this.state.currPage === totalPage) {
        className += ' at-pagination__item--active'
      }
      list.push(
        <li
          className={className}
          onClick={this.pageClickHandler.bind(this, totalPage)}
        >
          {totalPage}
        </li>
      )
    }
    return list
  }
  _renderSimpleStyle () {
    let prevBtnClassName = 'at-pagination__prev'
    if (this.state.currPage <= 1) {
      prevBtnClassName += ' at-pagination--disabled'
    }
    let nextBtnClassName = 'at-pagination__next'
    if (this.state.currPage >= this.totalPage()) {
      nextBtnClassName += ' at-pagination--disabled'
    }
    const div = (
      <ul className='at-pagination at-pagination--simple'>
        <li
          title='上一页'
          className={prevBtnClassName}
          onClick={this.pageMinusHandler}
        >
          <i className='icon icon-chevron-left' />
        </li>
        <div className='at-pagination__simple-paging'>
          <input
            ref={(pageInputSimple) => {
              this.$pageInputSimple = pageInputSimple
            }}
            type='text'
            className='at-input__original'
            value={this.state.currPage}
            onKeyPress={this.keyPressSimpleHandler}
          />
          <span>/</span>
          <span className='at-pagination__paging-total'>{this.page}</span>
        </div>
        <li title='下一页' className={nextBtnClassName}>
          <i
            className='icon icon-chevron-right'
            onClick={this.pageAddHandler}
          />
        </li>
      </ul>
    )
    return div
  }
  renderPageList () {
    if (this.page < 9) {
      return this._renderPageListLessThan9()
    } else {
      return this._renderPageListMoreThan9()
    }
  }
  renderPageMinusBtnStyle () {
    return this.state.currPage === 1
      ? 'at-pagination__prev at-pagination--disabled'
      : 'at-pagination__prev'
  }
  renderPageAddBtnStyle () {
    return this.state.currPage === this.page
      ? 'at-pagination__next at-pagination--disabled'
      : 'at-pagination__next'
  }
  renderShowQuickJump () {
    return this.props.showQuickJump ? (
      <div className='at-pagination__quickjump'>
        <span>前往</span>
        <input
          type='text'
          className='at-input__original'
          ref={(pageInput) => {
            this.$pageInput = pageInput
          }}
          onKeyPress={this.keyPressHandler}
          value={this.state.currPage}
        />
        <span>页</span>
      </div>
    ) : null
  }
  renderShowSizer () {
    const props = this.props
    const selectOption: any[] = []
    if (props.showSizer) {
      for (let i = 10; i < this.total / 2; i = i + 10) {
        const pageTemp = i + ' 条/页'
        selectOption.push(
          <SelectOption
            key={i}
            onPageSizeChange={this.pageSizeSelectHandler.bind(i, i)}
            value={i}
          >
            {pageTemp}
          </SelectOption>
        )
      }
    }
    // const tempPageSize = `${this.state.pageSize} 条/页`
    return props.showSizer ? (
      <div className='at-pagination__sizer'>
        <Select optionChosen={Math.abs(this.state.pageSize / 10) - 1}>
          {selectOption}
        </Select>
      </div>
    ) : null
  }
  render () {
    const props = this.props
    this.page = Math.ceil(this.total / this.state.pageSize)
    if (props.simple) {
      return this._renderSimpleStyle()
    }
    const pageList = this.renderPageList()
    const totalPage = props.showTotal ? (
      <span className='at-pagination__total'>共 {this.total} 条</span>
    ) : null
    const pageMinusBtnStyle = this.renderPageMinusBtnStyle()
    const pageAddBtnStyle = this.renderPageAddBtnStyle()
    const showQuickJump = this.renderShowQuickJump()
    const showSizer = this.renderShowSizer()
    const className = this.renderPaginationClassNames(this.props)
    const {
      style,
      onDragLeave,
      onDragOver,
      onDrop,
      onMouseOver,
      onMouseEnter,
      onMouseOut,
      onMouseLeave,
      onClick,
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
    return (
      <ul className={className} {...needProps} style={style}>
        {totalPage}
        <li
          title='上一页'
          className={pageMinusBtnStyle}
          onClick={this.pageMinusHandler}
        >
          <i className='icon icon-chevron-left' />
        </li>
        {pageList}
        <li
          title='下一页'
          className={pageAddBtnStyle}
          onClick={this.pageAddHandler}
        >
          <i className='icon icon-chevron-right' />
        </li>
        {showSizer}
        {showQuickJump}
      </ul>
    )
  }
  pageSizeSelectHandler (pageSize, event) {
    const props = this.props
    props.onPageSizeChange && props.onPageSizeChange(event, pageSize)
    props.onPageChange && props.onPageChange(1)
    this.setState({
      pageSize,
      currPage: 1
    })
    return pageSize
  }
  keyPressHandler (event) {
    const props = this.props
    if (event.keyCode === 13) {
      let newPage = this.$pageInput.value
      if (newPage < 1) {
        newPage = 1
      }
      if (newPage > this.page) {
        newPage = this.page
      }
      this.setState({
        currPage: newPage
      })
      props.onPageChange && props.onPageChange(newPage, event)
    }
  }
  keyPressSimpleHandler (event) {
    const props = this.props
    if (event.keyCode === 13) {
      let newPage = this.$pageInputSimple.value
      if (newPage < 1) {
        newPage = 1
      }
      if (newPage > this.page) {
        newPage = this.page
      }
      this.setState({
        currPage: newPage
      })
      props.onPageChange && props.onPageChange(newPage, event)
    }
  }
  pageClickHandler (page, event?) {
    const props = this.props
    props.onPageChange && props.onPageChange(page, event)
    this.setState({
      currPage: page
    })
    return page
  }
  pageMinusHandler (event) {
    const currPage = this.state.currPage
    if (currPage === 1) {
      return false
    }
    const newPage = currPage - 1 < 1 ? 1 : currPage - 1
    const props = this.props
    props.onPageChange && props.onPageChange(newPage, event)
    this.setState({
      currPage: newPage
    })
  }
  pageAddHandler () {
    const currPage = this.state.currPage
    if (currPage === this.page) {
      return false
    }
    const newPage = currPage + 1 > this.page ? this.page : currPage + 1
    const props = this.props
    props.onPageChange && props.onPageChange(newPage, event)
    this.setState({
      currPage: Number(newPage)
    })
  }
}

export default Pagination
