import * as Nerv from 'nervjs'
import Input from '../../../src/input'

class InputExample extends Nerv.Component {
  constructor (...args) {
    super(...args)
    this.onInputHandle = this.onInputHandle.bind(this)
  }
  onInputHandle (e) {
    console.log(e)
  }

  render () {
    return (
      <div className='input_example'>
        <div className='basic'>
          <Input value='哈哈啊' placeholder='输入提示'/>
          <Input  placeholder='禁用状态' disabled/>
          <Input  type='password' placeholder='密码'/>
        </div>
        <div className='with_status'>
          <Input  placeholder='success' status='success' icon='check-circle'/>
          <Input  placeholder='error' status='error' icon='x-circle'/>
          <Input  placeholder='warning' status='warning' icon='alert-circle'/>
          <Input  placeholder='info' status='info' icon='info'/>
        </div>
        <div className='with_icon'>
          <Input  placeholder='请输入链接' icon='link'/>
        </div>
        <div className='with_appendlabel_prependlabel'>
          <Input placeholder='请输入内容' prepend={<span>Https://</span>}/>
          <Input placeholder='请输入内容' size='small' append={<span>@aotu.io</span>}/>
          <Input onInput={this.onInputHandle} placeholder='请输入内容' prepend={<i className='icon icon-link'/>}/>
          <Input onInput={this.onInputHandle} placeholder='请输入内容' prependButton prepend={<span>搜索</span>}/>
          <Input onInput={this.onInputHandle} placeholder='请输入内容' appendButton append={<span>搜索</span>}/>
          <Input onInput={this.onInputHandle} placeholder='请输入内容' prependButton prepend={<i className='icon icon-search'/>}/>
          <Input onInput={this.onInputHandle} placeholder='请输入内容' appendButton append={<i className='icon icon-search'/>}/>
        </div>
        <div className='different_size'>
          < Input onInput={this.onInputHandle} size='large' placeholder='大尺寸'/>
          < Input onInput={this.onInputHandle} placeholder='正常尺寸'/>
          < Input onInput={this.onInputHandle} size='small' placeholder='小尺寸'/>
        </div>
      </div>

    )
  }

}

export default InputExample
