import * as Nerv from 'nervjs'
import Component from '../../libs/component'

export interface ModalBodyProps {}

class ModalBody extends Component<any, any> {
  render () {
    const { style, className, children } = this.props
    return (
      <div
        className={this.classnames('at-modal__body', className as any)}
        style={style}
      >
        {children}
      </div>
    )
  }
}

export default ModalBody
