import * as Nerv from 'nervjs'

import Textarea from '@md/textarea.md'
import './styles.scss'

class TextareaExample extends Nerv.Component {
  render () {
    return (
      <div className='textarea-example'>
        <Textarea />
      </div>
    )
  }
}

export default TextareaExample
