import classnames from 'classnames'
import * as Nerv from 'nervjs'

import Component from '../../libs/component'

export interface SwitchProps {
  className?: string
  type?: string
  value?: any
  size?: string
  disabled?: any
  onChange?: (e: MouseEvent, value: boolean) => void
  onClick?: (e: MouseEvent, value: boolean) => void
}

class Switch extends Component<SwitchProps, any> {
  private value: boolean
  private checkedText: any
  private unCheckedText: any
  constructor (props, context) {
    super(props, context)
    this.value = Boolean(props.value)
    this.state = {
      switchClass: this.value ? 'at-switch--checked' : ''
    }
    this.onClick = this.onClick.bind(this)
  }
  onClick (e: any) {
    if (this.props.disabled) {
      return
    }
    if (this.value) {
      this.setState({
        switchClass: ''
      })
      this.value = false
    } else {
      this.setState({
        switchClass: 'at-switch--checked'
      })
      this.value = true
    }
    if (this.props.onClick) {
      this.props.onClick(e, this.value)
    }
    if (this.props.onChange) {
      this.props.onChange(e, this.value)
    }
  }
  renderButtonClassNames (props: SwitchProps) {
    return classnames(
      'at-switch',
      [
        this.state.switchClass,
        props.disabled ? 'at-switch--disabled' : '',
        props.size ? `at-switch--${props.size}` : ''
      ],
      props.className
    )
  }
  render () {
    const switchClass = this.renderButtonClassNames(this.props)
    return (
      <span
        className={switchClass}
        onClick={this.onClick}
        data-value={this.props.value}
        style={this.props.style}
      >
        <span className='at-switch__text'>
          {this.value ? this.checkedText : this.unCheckedText}
        </span>
      </span>
    )
  }
  componentWillReceiveProps (props) {
    Nerv.Children.forEach(
      props.children as any,
      (child) => {
        const childOfChild = child.children
        if (child.props.slot === 'checkedText') {
          if (childOfChild.vtype !== 1) {
            this.checkedText = child.children
          } else {
            this.checkedText = <span>{childOfChild.text}</span>
          }
        } else if (child.props.slot === 'unCheckedText') {
          if (childOfChild.vtype !== 1) {
            this.unCheckedText = child.children
          } else {
            this.unCheckedText = <span>{childOfChild.text}</span>
          }
        }
      }
    )
  }
}

export default Switch
