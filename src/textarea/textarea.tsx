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
  constructor (props) {
    super(props)
    this.inputHandler = this.inputHandler.bind(this)
    this.state = {
      height: ''
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
    const classNames = this.renderTextareaClassNames(props)
    let disabled: boolean = false
    if (props.disabled) {
      disabled = true
    }
    let styleComputed: any = {}
    if (typeof style == 'string' || style instanceof String) {
      styleComputed = Object.assign(styleStr2Obj(style), {
        height: this.state.height
      })
    } else {
      styleComputed = { ...style, height: this.state.height }
    }
    let minRows = props.minRows
    if (props.autosize) {
      minRows = 1
    } else if (!props.minRows) {
      minRows = 2
    }
    return (
      <div className={classNames}>
        <textarea
          ref='textarea'
          value={props.value}
          placeholder={placeholder}
          autoFocus={autofocus}
          name={props.name}
          disabled={disabled}
          // resize={props.resize || 'vertical'}
          onInput={this.inputHandler}
          rows={minRows}
          style={styleComputed}
          {...needProps}
          className='at-textarea__original'
        />
      </div>
    )
  }
  inputHandler (e: React.FormEvent<HTMLTextAreaElement>) {
    const propsHandler = this.props.onInput
    if (propsHandler) {
      propsHandler.onInput(e)
    }
    this.resizeTextarea()
  }
  resizeTextarea () {
    const props = this.props
    if (!props.autosize && !props.minRows && !props.maxRows) {
      return
    }
    let calculateStyle: any = null
    if (props.autosize) {
      calculateStyle = calcTextareaHeight(this.refs.textarea)
    } else {
      calculateStyle = calcTextareaHeight(
        this.refs.textarea,
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
