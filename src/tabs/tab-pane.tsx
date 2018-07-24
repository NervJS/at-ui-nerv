import * as Nerv from 'nervjs'
import classnames from 'classnames'

export interface TabPaneProps {
  className?: string,
  type?: string,
  name?: string | number,
  label?: string,
  icon?: string,
  disabled?: boolean | string,
  closable?: boolean | string
}

class TabPane extends Nerv.Component<TabPaneProps, any> {
  private index: number
  constructor (props) {
    super(props)
    this.index = props.index
  }
  renderTabPaneClassNames (props: TabPaneProps) {
    return classnames('at-tabs__pane', [
    ], props.className)
  }

  render () {
    const props = this.props
    let {
      style,
      onDragLeave, onDragOver, onDrop, onMouseOver, onMouseEnter, onMouseOut, onMouseLeave, onClick,
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
    if (props.animated == false) {
      let display
      if (this.props.activeIndex == this.index) {
        display = 'block'
      } else {
        display = 'none'
      }
      style = {...style, 
        display}
    }
    return (
      <div className={classNames} {...needProps} style={style} >
        {children}
      </div>
    )
  }
  componentDidMount () {
  }
  componentWillReceiveProps (nextProps) {
  }
}

export default TabPane
