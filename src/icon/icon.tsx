import * as Nerv from 'nervjs'
import * as classnames from 'classnames'

export interface IconProps {
  className?: string,
  type?: string,
}

class Icon extends Nerv.Component<IconProps, any> {
  renderIconClassNames (props: IconProps) {
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
    const classNames = this.renderIconClassNames(props)
    return (
      <i className={classNames} {...needProps} style={style} >
      </i>
    )
  }
  componentDidMount () {
  }
  componentWillReceiveProps (nextProps) {
  }
}

export default Icon
