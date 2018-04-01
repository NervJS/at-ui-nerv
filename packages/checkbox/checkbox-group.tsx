import * as Nerv from 'nervjs'

interface CheckboxGroupProps {
  onChange: any
}

interface CheckboxGroupState {
  valueList: any[]
}

class CheckboxGroup extends Nerv.Component < CheckboxGroupProps,
CheckboxGroupState > {
  static elementName = 'AtCheckboxGroup'
  constructor (...args) {
    super(...args)
    this.state = {
      valueList: this.props.value || []
    }
    if (this.props.children) {
      Nerv.Children.map(this.props.children as object[], (child, index) => {
        const { props} = child
        if (props.checked) {
          const idx = this.state.valueList.indexOf(props.label || props.children)
          if (idx === -1) {
            this.state.valueList.push(props.label)
          }
        }
      }, this)
    }

  }
  componentWillReceiveProps (nextProps) {
    if (nextProps.value !== this.props.value) {
      this.setState({valueList: nextProps.value})
    }
  }

  getChildContext () {
    return {AtCheckboxGroup: this}
  }
  onChangeHandle (value, checked) {
    const index = this
      .state
      .valueList
      .indexOf(value)
    const {valueList} = this.state
    if (checked) {
      if (index === -1) {
        this
          .state
          .valueList
          .push(value)
      }
    } else {
      this
        .state
        .valueList
        .splice(index, 1)
    }
    this.forceUpdate()
    if (this.props.onChange) {
      this
        .props
        .onChange(valueList)
    }
  }
  render () {
    const children = this.props.children
      ? Nerv
        .Children
        .map(this.props.children as object[], (child, idx, arr) => {
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
            checked: child.props.checked || this
              .state
              .valueList
              .indexOf(child.props.value as never) >= 0 || this
              .state
              .valueList
              .indexOf(child.props.label as never) >= 0,
            onChange: this
              .onChangeHandle
              .bind(this, child.props.value || child.props.label)
          })
        }, this)
      : []
    return (
      <div className={'at-checkbox-group'}>
        {children}
      </div>
    )
  }
}

export default CheckboxGroup
