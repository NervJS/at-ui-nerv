import * as Nerv from 'nervjs'
import classnames from 'classnames'

export interface SwitchProps {
  className?: string,
  type?: string,
  value?: any,
  size?: string,
  disabled?: any
}

class Switch extends Nerv.Component<SwitchProps, any> {
  private value: boolean
  private checkedText: any
  private unCheckedText: any
  constructor (props) {
    super(props)
    this.value = props.value === 'true' ?　true : false
    this.state = {
      switchClass: this.value ? 'at-switch--checked' : ''
    }
    this.onClick = this.onClick.bind(this)
  }
  onClick (e: React.MouseEvent<HTMLSpanElement>) {
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
    if (this.props.onClick) {this.props.onClick(e, this.value)}
    if (this.props.onChange) {this.props.onChange(e, this.value)}
  }
  renderButtonClassNames (props: SwitchProps) {
    return classnames('at-switch', [
      this.state.switchClass,
      props.disabled ? 'at-switch--disabled' : '',
      props.size ? `at-switch--${props.size}` : ''
    ], props.className)
  }
  render () {
    const switchClass = this.renderButtonClassNames(this.props)
    return (<span className={switchClass} onClick={this.onClick} data-value={this.props.value} style={this.props.style}>
              <span className='at-switch__text'>
                {this.value ? this.checkedText : this.unCheckedText}
              </span>
            </span>)
  }
  componentWillReceiveProps (props) {
    Nerv.Children.forEach(props.children as any, (child) => {
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
    }, null)
  }
}

export default Switch
