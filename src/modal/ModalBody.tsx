import * as Nerv from 'nervjs'
import classnames from 'classnames'

class ModalBody extends Nerv.Component {
  render () {
    const { style, className, children } = this.props
    return (
      <div className={classnames('at-modal__body', className as any)} style={style}>
        {children}
      </div>
    )
  }
}

export default ModalBody
