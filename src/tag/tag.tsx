import * as Nerv from 'nervjs'
import classnames from 'classnames'

export interface TagProps {
  name?: string | number,
  color: string,
  closable?: boolean
}

const colorArr = [
    'default',
    'primary',
    'success',
    'error',
    'warning',
    'info'
  ]

class Tag extends Nerv.Component < TagProps,
  any > {
    name: 'AtTag'
    static defaultProps = {
      color: 'default',
      closable: false
    }
    closeActionHandle (evt: MouseEvent) {
      const name = this.props.name
      const onClose = this.props.onClose
      if (typeof name === 'undefined') {
        onClose(evt)
      } else {
        onClose(evt, name)
      }
    }
    colorStyle () {
      if (colorArr.indexOf(this.props.color) > -1) {
        return ''
      } else {
        return {borderColor: this.props.color, backgroundColor: this.props.color}
      }
    }
    colorClass () {
      return colorArr.indexOf(this.props.color) > -1
        ? `at-tag--${this.props.color}`
        : ''
    }
    render () {
      const {closable, slot} = this.props
      const style = this.colorStyle()
      const classNames = classnames('at-tag', this.colorClass())
      return (
        <span className={classNames} style={style}>
          <span className='at-tag__text'>{slot}</span>
          {closable
            ? <i
                className='icon icon-x at-tag__close'
                onClick={this
                .closeActionHandle
                .bind(this)}></i>
            : null
          }

        </span>
      )
    }
  }
export default Tag
