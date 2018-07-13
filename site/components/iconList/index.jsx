import * as Nerv from 'nervjs'
// import classnames from 'classnames'
import IconData from '../../icons.json'

import './style.scss'

class IconList extends Nerv.Component {
  render () {
    const { type = 'core' } = this.props
    const icons = IconData[type]
    return (
      <ul class='at-icon-list row'>
        {icons.map(icon => {
          return (
            <li
              className='at-icon-list__item col-sm-6 col-md-4 col-lg-3 flex flex-middle flex-center'
              v-clipboard='name'
              onSuccess='handleCopySuccess'>
              <div className=''>
                <i className={`icon ${icon}`} />
                <p>{icon}</p>
              </div>
            </li>
          )
        })}
      </ul>
    )
  }
}

export default IconList
