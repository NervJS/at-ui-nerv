import * as Nerv from 'nervjs'
import Component from '../../libs/component'

export interface CardProps {
  bordered?: boolean
  noHover?: boolean
  bodyStyle?: object
  loading?: boolean
}

class Card extends Component<CardProps, any> {
  static defaultProps = {
    bordered: true,
    noHover: false,
    loading: false
  }
  render () {
    const { bordered, noHover, bodyStyle, loading, children, style } = this.props
    let titleSlot
    let extraSlot
    let loadingSlot
    const contentSlot = []
    Nerv.Children.forEach(
      children,
      (child, index) => {
        if (!child) { return }
        if (typeof child === 'object' && 'props' in child) {
          const { slot } = child.props
          delete child.props.slot
          switch (slot) {
            case 'title':
              titleSlot = child
              break
            case 'extra':
              extraSlot = child
              break
            case 'loading':
              loadingSlot = child
              break
            default:
              contentSlot.push(child as never)
          }
        }
      }
    )
    return (
      <div
        className={this.className('at-card', {
          'at-card--bordered': bordered,
          'at-card--no-hover': noHover
        }) }
        style={style}
      >
        {!(!titleSlot && !extraSlot) ? (
          <div className='at-card__head'>
            {titleSlot ? <div className='at-card__title'>{titleSlot}</div> : ''}
            {extraSlot ? <div className='at-card__extra'>{extraSlot}</div> : ''}
          </div>
        ) : (
          ''
        )}
        <div className='at-card__body' style={bodyStyle}>
          {loading ? (
            loadingSlot ? (
              loadingSlot
            ) : (
              <div className='at-card__body--loading'>
                <div>
                    <span style={{ width: '95%' }} />
                </div>
                <div>
                  <span style={{ width: '32%' }} />
                  <span style={{ width: '58%' }} />
                </div>
                <div>
                  <span style={{ width: '23%' }} />
                  <span style={{ width: '65%' }} />
                </div>
                <div>
                  <span style={{ width: '59%' }} />
                  <span style={{ width: '32%' }} />
                </div>
                <div>
                  <span style={{ width: '26%' }} />
                  <span style={{ width: '10%' }} />
                  <span style={{ width: '50%' }} />
                </div>
              </div>
            )
          ) : (
            contentSlot
          )}
        </div>
      </div>
    )
  }
}

export default Card
