import * as Nerv from 'nervjs'
import classnames from 'classnames'
import Step from './step'
import Component from '../../libs/component'
export interface StepsProps {
  className?: string,
  current?: number,
  status?: string,
  size?: string,
  direction?: string
  onDragLeave?
  onDragOver?
  onDrop?
  onMouseOver?
  onMouseEnter?
  onMouseOut?
  onMouseLeave?
  onClick?
}

class Steps extends Component<StepsProps, any> {
  static Step: typeof Step
  constructor (props) {
    super(props)
  }
  renderIconClassNames (props: StepsProps) {
    return classnames('at-steps', [
      props.direction ? `at-steps--${props.direction}` : 'at-steps--horizontal',
      props.size ? 'at-steps--small' : ''
    ], props.className)
  }
  render () {
    const props = this.props
    const {
      style, status,
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
    const length = Nerv.Children.count(children as any)
    Nerv.Children.map(children, (child, index) => {
      if (!child) { return }
      if (typeof child === 'object' && 'props' in child) {
        child.props.current = this.props.current
        child.props.index = index
        child.props.status = status
        child.props.length = length
        if ((length - 1) === child.props.index) {
          child.props.last = true
        }
      }
    })
    return (
      <div className={classNames} {...needProps} style={style}>
        {props.children}
      </div>
    )
  }
}

export default Steps
