import * as Nerv from 'nervjs'

import Pagination from '../../../src/pagination'

class PaginationExample extends Nerv.Component {
  render () {
    return (
      <div className='pagination_example'>
          分页
        <Pagination total='60'/>
        <Pagination total='50' showTotal />
        <Pagination total='50' showQuickJump />
        <Pagination total='100' showSizer />
        <Pagination total='100' simple />
        <Pagination total='100' showQuickJump showSizer showTotal size="small" />
      </div>
    )
  }y

}

export default PaginationExample
