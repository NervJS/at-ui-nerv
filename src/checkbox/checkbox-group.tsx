import * as Nerv from 'nervjs'

class CheckboxGroup extends Nerv.Component {
  constructor (...args) {
    super(...args)
    this.updateModel = this
      .updateModel
      .bind(this)
  }
  updateModel () {}

  componentDidMount () {
    this.updateModel()
  }
  onChangeHandle () {}
  render () {
    const {onChange} = this.props

    const children = this.props.children
      ? Nerv
        .Children
        .map(
          this.props.children as any, (child, idx, arr) => {
          if (!child) {
            return null
          }
          const {displayName} = child.type
          if (displayName !== 'Checkbox') {
            return null
          }

          return Nerv.cloneElement(child, {
            ...child.props,
            key: idx,
            checked:
              child.props.checked ||
              options.indexOf(child.props.value) >= 0 ||
              options.indexOf(child.props.label) >= 0,
            onChange: this
              .onChange
              .bind(this, child.props.value || child.props.label)
          })
        }, this)
      : []
    return (
      <div class='at-checkbox-group'>
        {children}
      </div>
    )
  }
}

export default CheckboxGroup
