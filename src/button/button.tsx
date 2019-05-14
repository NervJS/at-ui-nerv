import * as Nerv from 'nervjs'
import Component from '../../libs/component'

import ButtonGroup from './button-group'

export type ButtonType = 'default' | 'primary' | 'success' | 'error' | 'warning' | 'info' | 'text'
export type ButtonSize = 'large' | 'small' | 'smaller'

export interface ButtonProps {
  type?: ButtonType
  className?: string
  icon?: string
  size?: ButtonSize
  hollow?: boolean
  nativeType?: 'button' | 'submit' | 'reset'
  loading?: boolean
  circle?: boolean
  disabled?: boolean
  onClick?: (evt: MouseEvent) => void
}

class Button extends Component<ButtonProps, any> {
  static Group: typeof ButtonGroup

  static defaultProps = {
    loading: false,
    type: 'default',
    disabled: false
  }

  renderButtonClassNames (props: ButtonProps, hasChildren) {
    return this.classnames(
      'at-btn',
      [
        props.type ? `at-btn--${props.type}` : '',
        props.size ? `at-btn--${props.size}` : '',
        props.hollow ? `at-btn--${props.type}--hollow` : '',
        props.circle && !hasChildren ? 'at-btn--circle' : ''
      ],
      props.className
    )
  }

  handleClick = (e) => {
    const onClick = this.props.onClick
    if (onClick) {
      onClick(e)
    }
  }

  render () {
    const props = this.props
    const { loading, icon, children, style, disabled, nativeType } = props
    const hasChildren = Array.isArray(children) ? children.length : !!children
    const classNames = this.renderButtonClassNames(props, hasChildren)
    return (
      <button
        className={classNames}
        style={style}
        disabled={disabled}
        type={nativeType || 'button'}
        onClick={this.handleClick}
      >
        {loading && <i className='at-btn__loading icon icon-loader' />}
        {icon && <i className={this.classnames('at-btn__icon icon', icon)} />}
        {children && <span className='at-btn__text'>{children}</span>}
      </button>
    )
  }
}

export default Button
