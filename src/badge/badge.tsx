import * as Nerv from 'nervjs'
import * as classnames from 'classnames'

interface BadgeProps {
  value?: string | number
  maxNum?: number
  dot?: boolean
  show?: boolean
  status?: string
}

// interface BadgeState {}

class Badge extends Nerv.Component<BadgeProps, null> {
  static defaultProps = {
    value: '',
    maxNum: 99,
    dot: false,
    show: true,
    status: 'error'
  }
  constructor (...args) {
    super(...args)
  }

  render () {
    const { children, status, dot, show, value, maxNum } = this.props
    const content = () => {
      if (dot) {
        return
      }
      if (typeof value === 'number' && typeof maxNum === 'number') {
        return value > maxNum ? `${maxNum}+` : value
      }
      return value
    }
    return (
      <span
        className={classnames('at-badge', {
          [`at-badge--${status}`]: !!status,
          'at-badge--alone': !Nerv.Children.count(children as never)
        })}
      >
        {children}
        <sup
          className={classnames('at-badge__content', {
            'at-badge--corner': Nerv.Children.count(children as never),
            'at-badge--dot': dot
          })}
          style={{ display: show ? '' : 'none' }}
        >
          {content()}
        </sup>
      </span>
    )
  }
}

export default Badge
