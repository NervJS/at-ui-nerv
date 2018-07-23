import * as Nerv from 'nervjs'
import classnames from 'classnames'
import TabPane from './tab-pane'
export interface TabsProps {
  className?: string,
  size?: string,
  type?: 'card' | 'line'
}

class Tabs extends Nerv.Component<TabsProps, any> {
  static Pane: typeof TabPane
  private prevable: boolean
  private nextable: boolean
  private navOffset: number
  private lastActiveRight: number
  private lastActiveLeft: number
  private launchByActive: boolean
  // private activeRight:number
  // private scrollRight:number
  constructor (props) {
    super(props)
    this.prevable = false
    this.nextable = false
    this.launchByActive = false
    this.navOffset = 0
    this.lastActiveRight = -1
    this.lastActiveLeft = -1
    this.state = {
      navOffset: 0,
      scrollable: false
    }
    this.updateHandle = this.updateHandle.bind(this)
    this.handleNext = this.handleNext.bind(this)
    this.handlePrev = this.handlePrev.bind(this)
  }
  updateHandle () {
    const containerWidth = this.refs.navScroll.offsetWidth
    const navWidth = this.refs.nav.offsetWidth
    const currentOffset = this.state.navOffset
    if (containerWidth >= navWidth) {
      this.nextable = false
      this.prevable = false
      if (this.state.navOffset > 0) {
          this.navOffset = 0
        }
    } else {
      this.prevable = currentOffset !== 0
      this.nextable = currentOffset + containerWidth < navWidth
      if (navWidth - currentOffset < containerWidth) {
          this.navOffset = navWidth - containerWidth
      }
    }
  }
  renderTabsClassNames (props: TabsProps) {
    return classnames('at-tabs', [
      props.size && props.size == 'small' ? 'at-tabs--small' : '',
      props.type && props.type == 'card' ? 'at-tabs--card' : '',
      this.state.scrollable ? 'at-tabs--scroll' : ''
    ], props.className)
  }
  renderIconNav (icon) {
    const classname = `icon at-tabs-nav__icon ${icon}`
    return (<i className={classname}></i>)
  }
  renderPrevBtn () {
    if (!this.state.scrollable) { return }
    let classname = 'at-tabs__prev'
    if (!this.state.prevable) {
      classname += ' at-tabs__prev--disabled'
    }
    return (<span className={classname} onClick={this.handlePrev}><i className='icon icon-chevron-left'></i></span>)
  }
  renderNextBtn () {
    if (!this.state.scrollable) { return }
    let classname = 'at-tabs__next'
    if (!this.state.nextable) {
      classname += ' at-tabs__next--disabled'
    }
    return (<span className={classname} onClick={this.handleNext}><i className='icon icon-chevron-right'></i></span>)
  }
  handlePrev () {
    if (!this.prevable) { return }
    this.launchByActive = true
    const containerWidth = this.refs.navScroll.offsetWidth
    const currentOffset = this.state.navOffset

    if (currentOffset === 0) { return }

    const newOffset = currentOffset > containerWidth ? currentOffset - containerWidth : 0
    this.navOffset = newOffset
    this.setState({
      navOffset: newOffset
    })
  }
  handleNext () {
    if (!this.nextable) { return }
    this.launchByActive = true
    const containerWidth = this.refs.navScroll.offsetWidth
    const currentOffset = this.state.navOffset
    const navWidth = this.refs.nav.offsetWidth

    if (navWidth - currentOffset <= containerWidth) { return }

    const newOffset = (navWidth - currentOffset > containerWidth * 2) ? currentOffset + containerWidth : navWidth - containerWidth
    this.navOffset = newOffset
    this.setState({
      navOffset: newOffset
    })
  }
  renderTabsNav () {
    const {children, closable= false} = this.props
    const closableFlag =  closable || closable === 'true'
    const navArr: any[] = []
    let extra: any[] = []
    Nerv.Children.forEach(children as any, (child, index) => {
      const props = child.props
      if (props.slot && props.slot == 'extra') {
        //如果是附加内容
        extra.push(child)
      } else {
        const {disabled= false, label, icon} = props
        const disabledFlag = disabled || disabled === 'true'
        let classname = 'at-tabs-nav__item'
        let closeBtn: any
        let renderIcon: any
        let refTab: string = ''
        if (disabledFlag) {
          classname += ' at-tabs-nav__item--disabled'
        } else if (this.props.activeIndex == index) {
          classname += ' at-tabs-nav__item--active'
          refTab = 'activeTab'
        }
        if (closableFlag && !props.unclosable) {
          classname += ' at-tabs-nav__item--closable'
          closeBtn = <span className='at-tabs-nav__close' onClick={this.props.onTabRemove.bind(this, index)}><i className='icon icon-x'></i></span>
        }
        if (icon) {
          renderIcon = this.renderIconNav(icon)
        }
        navArr.push(<div className={classname} ref={refTab} onClick={this.tabChangeHandler.bind(this, index, disabledFlag)}>
        {renderIcon}{label}{closeBtn}
        </div>)
      }
    }, null)
    extra = <div className='at-tabs__extra'>
              <div>
                {extra}
              </div>
            </div>
    return {
      navArr,
      extra
    }
  }
  tabChangeHandler (index, disabledFlag, event) {
    if (disabledFlag) {return}
    const props = this.props
    props.onChange && props.onChange (index)
  }
  renderTransitionStyle () {
    //这个是tabbody的动画移动
    const animated = this.props.animated || true
    let offset = - (this.props.activeIndex * 100)
    if (!animated || animated == 'false') {
      offset = 0
    }
    return {transform: `translate3d(${offset}%, 0px, 0px)`}
  }
  render () {
    const props = this.props
    const {
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
    const classNames = this.renderTabsClassNames(props)
    const tabsNav = this.renderTabsNav()
    const transitionStyle = this.renderTransitionStyle ()
    let prevBtn: any
    let nextBtn: any
    prevBtn = this.renderPrevBtn()
    nextBtn = this.renderNextBtn()
    const offsetNavStyle = {
      transform: `translate3d(-${this.state.navOffset}px, 0px, 0px)`
    }
    return (
      <div className={classNames} {...needProps} style={style}>
        <div className='at-tabs__header'>
          {tabsNav.extra}
          <div className='at-tabs__nav'>
            {prevBtn}
            {nextBtn}
            <div className='at-tabs__nav-wrap'>
              <div className='at-tabs__nav-scroll' ref='navScroll'>
                <div className='at-tabs-nav' ref='nav' style={offsetNavStyle}>
                  {tabsNav.navArr}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='at-tabs__body' style={transitionStyle}>
          {this.renderBody ()}
        </div>
      </div>
    )
  }
  renderExtra (child) {
    return (
    <div className='at-tabs__extra'>
      <div>{child}</div>
    </div>)
  }
  renderBody () {
    const {children, animated= true} = this.props
    const childrenResult: any[] = []
    if (!animated || animated == 'false') {
      Nerv.Children.forEach(children as any, (child, index) => {
        if (!(child.props.slot && child.props.slot == 'extra')) {
          child.props.animated = false
          child.props.activeIndex = this.props.activeIndex
          child.props.index = index
          childrenResult.push(child)
        }
      }, null)
      return childrenResult
    }
    return children
  }
  componentDidMount () {
    this.updateHandle() //没有setState，给scrollable赋值
    this.scrollToActiveTab()//没哟setState,给this.navOffset赋值
    this.updateAfterUpdate(this.state, 'mount') //setState,更新页面，显示按钮
    window.addEventListener('resize', this.updateHandle, false)
  }
  updateAfterUpdate (prevState, str?) {
    const flag = this.prevable || this.nextable
    if (prevState.scrollable != flag) {
      this.setState({
        scrollable: flag
      })
    }
    if (prevState.prevable != this.prevable) {
      this.setState({
        prevable: this.prevable
      })
    }
    if (prevState.nextable != this.nextable) {
      this.setState({
        nextable: this.nextable
      })
    }
    if (prevState.navOffset != this.navOffset) {
      this.setState({
        navOffset: this.navOffset
      })
    }
  }
  componentDidUpdate (prevProps, prevState) {
    this.updateHandle()
    //如果不是由前后跳转按钮触发，那么就不需要进行scrollToActiveTab操作
    if (!this.launchByActive) {
      this.scrollToActiveTab()
    }
    this.updateAfterUpdate(prevState, 'update')
    // this.launchByActive = false
  }
  componentWillUpdate (nextProps) {
    if (nextProps.activeIndex != this.props.activeIndex) {
      this.launchByActive = false
    }
  }
  scrollToActiveTab () {
    if (!this.state.scrollable && !(this.prevable || this.nextable) || this.launchByActive) { return }
    const activeTab = this.refs.activeTab
    const navScroll = this.refs.navScroll
    const activeTabBounds = activeTab.getBoundingClientRect()
    const navScrollBounds = navScroll.getBoundingClientRect()
    const currentOffset = this.state.navOffset
    let newOffset = currentOffset
    if (activeTabBounds.left < navScrollBounds.left) {
      if (activeTabBounds.left != this.lastActiveLeft) {
        newOffset = currentOffset - (navScrollBounds.left - activeTabBounds.left) - activeTabBounds.width
        this.lastActiveLeft = activeTabBounds.left
      }
    }
    if (activeTabBounds.right > navScrollBounds.right) {
      if (activeTabBounds.right != this.lastActiveRight) {
        newOffset = currentOffset + (activeTabBounds.right - navScrollBounds.right) + activeTabBounds.width
        this.lastActiveRight = activeTabBounds.right
      }
    }
    this.navOffset = newOffset
  }
  componentWillReceiveProps (nextProps) {
  }

}

export default Tabs
