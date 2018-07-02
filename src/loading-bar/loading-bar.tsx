import * as Nerv from 'nervjs'
import * as classnames from 'classnames'

interface LoadingBarProps {
  width?: number
}

interface LoadingBarState {
  show: boolean
  status: string
  percent: number
}

class LoadingBar extends Nerv.Component < LoadingBarProps,
LoadingBarState > {
  static defaultProps = {
    width: 2
  }
  constructor (...args) {
    super(...args)
    this.state = {
      show: false,
      status: 'success',
      percent: 0
    }
  }
  render () {
    const {show, status, percent} = this.state
    const {width} = this.props
    const barStyle = {
      height: `${ (width as never | 0) || 2}px`
    }
    return (
      <div
        className={classnames('at-loading-bar', {
        [`at-loading-bar--${status}`]: status
      })}
        style={barStyle}>
        <div
          className='at-loading-bar__inner'
          style={{
          width: percent + '%'
        }}/>
      </div>
    ))
  }
}

export default LoadingBar
