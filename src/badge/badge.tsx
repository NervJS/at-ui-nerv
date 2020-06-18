import * as Nerv from 'nervjs'
import Component from '../../libs/component'

export interface BadgeProps {
  value?: string | number
  maxNum?: number
  dot?: boolean
  show?: boolean
  status?: string
}

class Badge extends Component<BadgeProps, {}> {
  static defaultProps = {
    value: '',
    maxNum: 99,
    dot: false,
    show: true,
    status: 'error'
  }

  render () {
    const { children, status, dot, show, value, maxNum } = this.props
    const content = () => {
      if (dot) {
        return
      }
      if (typeof value === 'number') {
        return value > Number(maxNum) ? `${maxNum}+` : value
      }
      return value
    }
    return (
      <span
        className={this.className('at-badge', {
          [`at-badge--${status}`]: !!status,
          'at-badge--alone': !Nerv.Children.count(children as never)
        })}
      >
        {children}
        <sup
          className={this.classnames('at-badge__content', {
            'at-badge--corner': Nerv.Children.count(children as never),
            'at-badge--dot': dot
          } as any)}
          style={{ display: show ? '' : 'none' }}
        >
          {content()}
        </sup>
      </span>
    )
  }
}

export default Badge
