import * as Nerv from 'nervjs'

import Textarea from '../../../src/textarea'

class TextareaExample extends Nerv.Component {
  render () {
    const style = {
      fontSize: '20px'
    }
    // let style = 'font-size:20px;'
    // let style= new String('font-size:20px;')
    return (
      <div className='icon_example'>
        <Textarea />
        <Textarea disabled />
        <Textarea placeholder='xxx' minRows='3'maxRows='8' style={style} />
        <Textarea placeholder='xxx' autosize maxRows='5' minRows='2' style={style} />
      </div>
    )
  }
}

export default TextareaExample
