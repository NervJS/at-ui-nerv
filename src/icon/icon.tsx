import * as Nerv from 'nervjs'
import Component from '../../libs/component'

export interface IconProps {
  className?: string
  type?: string
  onDragLeave?
  onDragOver?
  onDrop?
  onMouseOver?
  onMouseEnter?
  onMouseOut?
  onMouseLeave?
  onClick?
}

class Icon extends Component<IconProps, any> {
  renderIconClassNames (props: IconProps) {
    return this.classnames(
      'icon',
      [props.type ? `${props.type}` : ''],
      props.className
    )
  }
  render () {
    const props = this.props
    const {
      style,
      onDragLeave,
      onDragOver,
      onDrop,
      onMouseOver,
      onMouseEnter,
      onMouseOut,
      onMouseLeave,
      onClick,
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
    return <i className={classNames} {...needProps} style={style} />
  }
}

export default Icon
