import * as Nerv from 'nervjs'
import Component from '@lib/component'
import CollapseItem from './collapseItem'

export interface CollapseProps {
  accordion?: boolean
  value?: any[] | string | number
  simple?: boolean
  onChange?: (a) => {}
}

export interface CollapseState {
  currentValue: any
}

class Collapse extends Component<CollapseProps, CollapseState> {
  static Item: typeof CollapseItem
  static defaultProps = {
    accordion: false,
    simple: false
  }
  constructor (...args) {
    super(...args)
    this.state = {
      currentValue: 1
    }
  }
  componentDidMount () {
    this.setActive()
  }
  setActive = () => {
    const activeKey = this.getActiveKey()
    const { accordion, children } = this.props
    return Nerv.Children.map(
      children as never,
      (child, index) => {
        const name = child.props.panelName || index.toString()
        return Nerv.cloneElement(child, {
          ...child,
          isActive: accordion
            ? activeKey[0] === name
            : (child.isActive = activeKey.indexOf(name) >= 0),
          key: index,
          _toggle: this.toggle
        })
      },
      this
    )
  }
  getActiveKey = () => {
    const { accordion } = this.props
    let activeKey = this.state.currentValue || []
    if (!Array.isArray(activeKey)) {
      activeKey = [activeKey]
    }
    if (accordion && activeKey.length > 1) {
      activeKey = [activeKey[0].toString()]
    } else {
      let i = activeKey.length
      while (i--) {
        activeKey[i] = activeKey[i].toString()
      }
    }
    return activeKey
  }
  toggle = (itemData) => {
    let name = ''
    try {
      name = itemData.name.toString()
    } catch (error) {
      throw new Error('name should be definded')
    }

    const { accordion, onChange } = this.props
    let newActiveKey = []
    if (accordion && !itemData.isActive) {
      newActiveKey.push(name as never)
    } else {
      const activeKey = this.getActiveKey()
      const nameIndex = activeKey.indexOf(name)
      if (itemData.isActive && nameIndex >= 0) {
        activeKey.splice(nameIndex, 1)
      } else if (nameIndex < 0) {
        activeKey.push(name)
      }
      newActiveKey = activeKey
    }
    this.setState(
      {
        currentValue: newActiveKey
      },
      () => {
        if (typeof onChange === 'function') {
          onChange(newActiveKey)
        }
      }
    )
  }
  inputValueCheck = (val) => {
    return typeof val === 'number' ? `${val}` : val
  }
  render () {
    const { simple } = this.props
    return (
      <div
        className={this.className('at-collapse', { 'at-collapse--simple': simple })}
      >
        {this.setActive()}
      </div>
    )
  }
}

export default Collapse
