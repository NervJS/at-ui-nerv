import * as Nerv from 'nervjs'
import Component from '../../libs/component'

export interface CheckboxGroupProps {
  onChange?: (e) => void
}

export interface CheckboxGroupState {
  valueList: any[]
}

class CheckboxGroup extends Component<CheckboxGroupProps, CheckboxGroupState> {
  static elementName = 'AtCheckboxGroup'
  vList: any[]
  alpha: number
  constructor (...args) {
    super(...args)
    this.state = {
      valueList: this.props.value || []
    }
    this.alpha = this.props.value.length
    this.vList = this.props.value
    if (this.props.children) {
      Nerv.Children.map(
        this.props.children as object[],
        (child, index) => {
          const { props } = child
          if (props.checked) {
            const idx = this.state.valueList.indexOf(props.label || props.children)
            if (idx === -1) {
              this.state.valueList.push(props.label)
            }
          }
        },
        this
      )
    }
  }
  componentWillReceiveProps (nextProps) {
    const { value = [] } = nextProps
    const { valueList } = this.state
    if (!Array.isArray(value)) {
      throw new Error('checkboxgroup value must be array')
    }
    const isSameLength = value.length === this.vList.length
    const isArrayEqual = value.sort().every((val, idx) => {
      if (val !== valueList.sort()[idx]) {
        return false
      }
      return true
    })
    if (!(isSameLength && isArrayEqual)) {
      this.vList = value
      this.setState({ valueList: value })
    }
  }

  getChildContext () {
    return { AtCheckboxGroup: this }
  }
  onChangeHandle (value, checked) {
    const index = this.vList.indexOf(value as never)
    if (checked) {
      if (index === -1) {
        this.vList.push(value as never)
      }
    } else {
      this.vList.splice(index, 1)
    }

    if (this.props.onChange instanceof Function) {
      this.props.onChange(this.vList)
    }
  }
  render () {
    const children = this.props.children
      ? Nerv.Children.map(
          this.props.children as object[],
          (child, idx, arr) => {
            if (!child) {
              return null
            }
            const { elementName } = child.type
            if (elementName !== 'AtCheckbox') {
              return null
            }

            return Nerv.cloneElement(child, {
              ...child.props,
              key: idx,
              checked:
                child.props.checked ||
                this.state.valueList.indexOf(child.props.value as never) >= 0 ||
                this.state.valueList.indexOf(child.props.label as never) >= 0,
              onChange: this.onChangeHandle.bind(this, child.props.value || child.props.label)
            })
          },
          this
        )
      : []
    return <div className={'at-checkbox-group'}>{children}</div>
  }
}

export default CheckboxGroup
