import * as Nerv from 'nervjs'
import classnames from 'classnames'
import Component from '../../libs/component'

export interface TabPaneProps {
  activeIndex?: number
  className?: string
  type?: string
  name?: string | number
  label?: string
  icon?: string
  animated?: boolean
  disabled?: boolean | string
  closable?: boolean | string
  unclosable?: boolean
  onDragLeave?
  onDragOver?
  onDrop?
  onMouseOver?
  onMouseEnter?
  onMouseOut?
  onMouseLeave?
  onClick?
}

class TabPane extends Component<TabPaneProps, any> {
  private index: number
  constructor (props) {
    super(props)
    this.index = props.index
  }
  renderTabPaneClassNames (props: TabPaneProps) {
    return classnames('at-tabs__pane', [], props.className)
  }

  render () {
    const props = this.props
    const {
      style,
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
    const classNames = this.renderTabPaneClassNames(props)
    let displayValue = 'block'
    if (props.animated === false) {
      if (this.props.activeIndex !== this.index) {
        displayValue = 'none'
      }
    }
    return (
      <div
        className={classNames}
        {...{
          ...needProps,
          style: {
            ...style,
            display: displayValue
          }
        }}
      >
        {children}
      </div>
    )
  }
}

export default TabPane
