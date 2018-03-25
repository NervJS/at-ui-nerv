import * as Nerv from 'nervjs'
import * as classnames from 'classnames'
// import { CSSTransition } from 'react-transition-group'

interface LoadingbarElemProps {
  status?: string
  percent?: number
  width: number
  show?: boolean
}

class LoadingbarElem extends Nerv.Component<LoadingbarElemProps, null> {
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
          className={classnames('at-loading-bar', {
            [`at-loading-bar--${status}`]: status
          })}
          style={barStyle()}>
          <div className='at-loading-bar__inner' style={{ width: percent + '%' }} />
        </div>
      // </CSSTransition>
    )
  }
}

export default LoadingbarElem
