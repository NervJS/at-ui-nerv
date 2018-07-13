import * as Nerv from 'nervjs'
import classnames from 'classnames'

export interface PaginationProps {
  className?: string,
  type?: string,
}

class Pagination extends Nerv.Component<PaginationProps, any> {
  renderPaginationClassNames (props: PaginationProps) {
    return classnames('icon', [
      props.type ? `${props.type}` : ''
    ], props.className)
  }
  render () {
    const props = this.props
    const {
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
    const classNames = this.renderPaginationClassNames(props)
    return (
      <ul data-v-40af164d="" className="at-pagination" data-v-a01f69b8="">
        <span className="at-pagination__total" style="display: none;">共 60 条</span>
        <li title="上一页" class="at-pagination__prev">
          <i className="icon icon-chevron-left"></i>
        </li> 
        <li className="at-pagination__item">2</li>
        <li className="at-pagination__item">3</li>
        <li className="at-pagination__item">4</li>
        <li className="at-pagination__item at-pagination__item--active">5</li>
        <li className="at-pagination__item">6</li> 
        <li title="下一页" className="at-pagination__next">
          <i className="icon icon-chevron-right"></i>
        </li>
      </ul>
    )
  }
  componentDidMount () {
  }
  componentWillReceiveProps (nextProps) {
  }
}

export default Pagination
