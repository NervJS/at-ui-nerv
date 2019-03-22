import * as Nerv from 'nervjs'
import classnames from 'classnames'
import { calcTextareaHeight } from './utils'
import { styleStr2Obj } from '../util/util'
export interface TextareaProps {
  className?: string
  type?: string
  disabled?: boolean
  placeholder?: string
  autofocus?: boolean
  autosize?: boolean
  resize?: string
  name?: string
  value?: any
}

class Textarea extends Nerv.Component<TextareaProps, any> {
  private $textarea: any
  constructor (props) {
    super(props)
    this.inputHandler = this.inputHandler.bind(this)
    this.state = {
      height: '',
      value: ''
    }
  }
  renderTextareaClassNames (props: TextareaProps) {
    return classnames(
      'at-textarea',
      [props.disabled ? 'at-textarea--disabled' : ''],
      props.className
    )
  }
  render () {
    const props = this.props
    const {
      style,
      placeholder,
      autofocus,
      onDragLeave,
      onDragOver,
      onDrop,
      onMouseOver,
      onMouseEnter,
      onMouseOut,
      onMouseLeave,
      onKeyDown,
      onKeyUp,
      onKeyPress,
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
      onKeyDown,
      onKeyUp,
      onKeyPress,
      onClick
    }
    const classNames = this.renderTextareaClassNames(props)
    let disabled: boolean = false
    if (props.disabled) {
      disabled = true
    }
    let styleComputed: any = {}
    if (typeof style === 'string' || style instanceof String) {
      styleComputed = Object.assign(styleStr2Obj(style), {
        height: this.state.height,
        resize: props.resize || 'vertical'
      })
    } else {
      styleComputed = {
         ...style,
         height: this.state.height,
         resize: props.resize || 'vertical'
      }
    }
    let minRows = props.minRows
    if (props.autosize) {
      minRows = 1
    } else if (!props.minRows) {
      minRows = 2
    }
    const className = classnames('at-textarea__original', [
    ], props.className)
    return (
      <div className={classNames}>
        <textarea

          ref={(textarea) => {this.$textarea = textarea}}
          value={this.state.value}
          placeholder={placeholder}
          autoFocus={autofocus}
          name={props.name}
          disabled={disabled}
          onInput={this.inputHandler}
          rows={minRows}
          style={styleComputed}
          {...needProps}
          className={className}
        />
      </div>
    )
  }
  inputHandler (e: any) {
    const propsHandler = this.props.onInput
    if (propsHandler && typeof propsHandler !== 'function') { console.warn('WARNING: onInput Handler should be a function') }
    if (propsHandler) {
      propsHandler(e)
    }
    this.resizeTextarea()
    this.setState({
      value: e.target.value
    })
  }
  resizeTextarea () {
    const props = this.props
    if (!props.autosize && !props.minRows && !props.maxRows) {
      return
    }
    let calculateStyle: any = null
    if (props.autosize) {
      calculateStyle = calcTextareaHeight(this.$textarea)
    } else {
      calculateStyle = calcTextareaHeight(
        this.$textarea,
        props.minRows || 2,
        props.maxRows
      )
    }
    this.setState({
      height: calculateStyle.height
    })
  }
  componentDidMount () {
    this.resizeTextarea()
  }
}

export default Textarea
