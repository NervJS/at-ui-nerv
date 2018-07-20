import * as Nerv from 'nervjs'

import Changelog from '@md/changelog.md'

class ChangelogExample extends Nerv.Component {
  render () {
    return (
      <div className='changelog-example'>
        <Changelog />
      </div>
    )
  }
}
export default ChangelogExample
