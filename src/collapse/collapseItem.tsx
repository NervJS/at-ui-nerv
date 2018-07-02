import * as Nerv from 'nervjs'
import * as classnames from 'classnames'
export interface CollapseItemProps {}

class CollapseItem extends Nerv.Component {
  toggle = () => {

  }
  render () {
    const {title, isActive, disabled} = this.props
    return (
      <div
        className={classnames('at-collapse__item', {
        'at-collapse__item--active': isActive,
        'at-collapse__item--disabled': disabled
      })}>
        <div className='at-collapse__header' onClick={this.toggle}>
          <i className='icon at-collapse__icon icon-chevron-right'></i>
          <slot name='title' v-if='$slots.title'></slot>
          <div v-else>{title}</div>
        </div>
        {/* <collapse-transition> */}
          <div class='at-collapse__body' v-show='isActive'>
            <div class='at-collapse__content'>
              <slot></slot>
            </div>
          </div>
        {/* </collapse-transition> */}
      </div>
    )
  }
}

export default CollapseItem
