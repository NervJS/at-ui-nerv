import classnames from 'classnames'
import * as Nerv from 'nervjs'
import { CSSProperties } from 'react'

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
  constructor (props, context) {
    super(props, context)
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
    const copyStyle: CSSProperties = {...style}
    const classNames = this.renderTabPaneClassNames(props)
    if (props.animated === false) {
      copyStyle.display = this.props.activeIndex !== this.index
        ? 'none'
        : 'block'
    }
    return (
      <div
        className={classNames}
        {...{
          ...needProps,
          style: copyStyle
        }}
      >
        {children}
      </div>
    )
  }
}

export default TabPane
