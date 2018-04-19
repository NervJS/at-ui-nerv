import * as Nerv from 'nervjs'
import * as classnames from 'classnames'

import FadeAnimation from '../animations/fade-animation'

export interface TagProps {
  name?: string | number,
  color?: string,
  closable?: boolean
}

export interface TagState {
  show: boolean
}

const colorArr = [
  'default',
  'primary',
  'success',
  'error',
  'warning',
  'info'
]

class Tag extends Nerv.Component<TagProps, TagState> {
  static defaultProps = {
    color: 'default',
    closable: false
  }
  name: 'AtTag'
  constructor (...args) {
    super(...args)
    this.closeActionHandle = this
      .closeActionHandle
      .bind(this)
    this.state = {
      show: true
    }
  }
  closeActionHandle (evt: MouseEvent) {
    const name = this.props.name
    const onClose = this.props.onClose
    this.setState({
      show: false
    }, () => {
      if (typeof name === 'undefined') {
        onClose(evt)
      } else {
        onClose(evt, name)
      }
    })
  }
  colorStyle () {
    if (this.props.color && colorArr.indexOf(this.props.color) > -1) {
      return ''
    } else {
      // return {borderColor: this.props.color, backgroundColor: this.props.color}
      return `borderColor:${this.props.color};backgroundColor:${this.props.color};`
    }
  }
  colorClass () {
    if (this.props.color && colorArr.indexOf(this.props.color) > -1) {
      return `at-tag--${this.props.color}`
    } else {
      return ''
    }
  }

  render () {
    const {closable, children} = this.props
    const { show } = this.state
    const style = this.colorStyle()
    const classNames = classnames('at-tag', this.colorClass())
    return (
      <FadeAnimation in={show} timeout={300}>
        <span className={classNames} style={style}>
          <span className='at-tag__text'>{children}</span>
          {closable
            ? <i className='icon icon-x at-tag__close' onClick={this.closeActionHandle}/>
            : ''}

        </span>
      </FadeAnimation>
    )
  }
}
export default Tag
