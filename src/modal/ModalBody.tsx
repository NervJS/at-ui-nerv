import * as Nerv from 'nervjs'
import * as classnames from 'classnames'

class ModalBody extends Nerv.Component {
  render () {
    const { style, className, children } = this.props
    return (
      <div className={classnames('at-modal__body', className)} style={style}>
        {children}
      </div>
    )
  }
}

export default ModalBody
