import * as Nerv from 'nervjs'
import Component from '../../libs/component'

import Button from '../button'

export interface ModalFooterProps {
  cancelText?: string
  okText?: string
  onConfirm?: (event: MouseEvent) => void
  onCancel?: (event: MouseEvent) => void
  showCancel?: boolean
}

class ModalFooter extends Component<ModalFooterProps, any> {
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
      <div className={this.classnames('at-modal__footer', className as any)} style={style}>
        {showCancel ? <Button onClick={onCancel}>{}{localeCancelText}</Button> : null}
        <Button type='primary' onClick={onConfirm}>
          {localeOKText}
        </Button>
      </div>
    )
    return Nerv.isValidElement(children) ? (
      <div className={this.classnames('at-modal__footer', className as any)} style={style}>
        {children}
      </div>
    ) : (
      defaultFooter
    )
  }
}

export default ModalFooter
