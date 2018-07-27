import * as Nerv from 'nervjs'
import Component from '@lib/component'

interface LoadingbarElemProps {
  status?: string
  percent?: number
  width: number
  show?: boolean
}

class LoadingbarElem extends Component<LoadingbarElemProps, null> {
  static defaultProps = {
    show: false,
    status: 'success',
    percent: 0,
    width: 2
  }
  static forceUpdate: any
  componentDidMount () {
    LoadingbarElem.forceUpdate = this.forceUpdate.bind(this)
  }
  render () {
    const { status, percent, width } = this.props
    const barStyle = () => {
      return {
        height: `${width | 0 || 2}px`
      }
    }
    return (
      // <CSSTransition className='fade' in={show}>
        <div
          className={this.className('at-loading-bar', {
            [`at-loading-bar--${status}`]: status as any
          })}
          style={barStyle()}>
          <div className='at-loading-bar__inner' style={{ width: percent + '%' }} />
        </div>
      // </CSSTransition>
    )
  }
}

export default LoadingbarElem
