import * as Nerv from 'nervjs'
import * as classnames from 'classnames'

import Button from '../button'

interface ModalFooterProps {
  cancelText?: string
  okText?: string
  onConfirm?: Function
  onCancel?: Function
  showCancel?: boolean
}

class ModalFooter extends Nerv.Component<ModalFooterProps, any> {
  static defaultProps = {
    showCancel: true,
    cancelText: '取消',
    okText: '确认'
  }
  render () {
    const { style, className, children, cancelText, okText, onCancel, onConfirm, showCancel } = this.props
    const localeCancelText = cancelText
    const localeOKText = okText
    const defaultFooter = (
      <div className={classnames('at-modal__footer', className)} style={style}>
        {showCancel ? <Button onClick={onCancel}>{localeCancelText}</Button> : null}
        <Button type='primary' onClick={onConfirm}>
          {localeOKText}
        </Button>
      </div>
    )
    return Nerv.isValidElement(children) ? (
      <div className={classnames('at-modal__footer', className)} style={style}>
        {children}
      </div>
    ) : (
      defaultFooter
    )
  }
}

export default ModalFooter
