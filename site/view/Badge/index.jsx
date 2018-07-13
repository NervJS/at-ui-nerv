import * as Nerv from 'nervjs'
import Badge from '@md/badge.md'
import './style.scss'

class BadgeExample extends Nerv.Component {
  constructor (...args) {
    super(...args)
    this.state = {
      dot: false,
      num: 0,
      show: false
    }
  }
  render () {
    return (
      <div className='badge-example'>
        <Badge />
      </div>

    )
  }
}

export default BadgeExample
