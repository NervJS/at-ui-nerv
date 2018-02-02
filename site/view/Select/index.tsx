import * as Nerv from 'nervjs'

import Select from '../../../src/select'
const SelectOption = Select.Option
class SelectExample extends Nerv.Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <div className='select_example'>
        <div style='display:inline-block;margin:20px;min-height:200px;border:1px solid grey;'>
          基础状态
          <Select style='width:100px'>
            <SelectOption value='1'>深圳</SelectOption>
            <SelectOption value='2'>广州广州广州广州广州广州广州广州广州广州</SelectOption>
            <SelectOption value='3'>上海</SelectOption>
            <SelectOption value='4'>北京</SelectOption>
            <SelectOption value='5'>成都</SelectOption>
          </Select>
        </div>
        <div style='display:inline-block;margin:20px;min-height:200px;border:1px solid grey;'>
          disabled
          <Select style='width:100px' disabled>
            <SelectOption value='1'>深圳</SelectOption>
            <SelectOption value='2'>广州广州广州广州广州广州广州广州广州广州</SelectOption>
            <SelectOption value='3'>上海</SelectOption>
            <SelectOption value='4'>北京</SelectOption>
            <SelectOption value='5'>成都</SelectOption>
          </Select>
        </div>
        <div style='display:inline-block;margin:20px;min-height:200px;border:1px solid grey;'>
          size=small
          <Select style='width:100px' size='small'>
            <SelectOption value='1'>深圳</SelectOption>
            <SelectOption value='2'>广州广州广州广州广州广州广州广州广州广州</SelectOption>
            <SelectOption value='3'>上海</SelectOption>
            <SelectOption value='4'>北京</SelectOption>
            <SelectOption value='5'>成都</SelectOption>
          </Select>
        </div>
        <div style='display:inline-block;margin:20px;min-height:200px;border:1px solid grey;'>
          size=large
          <Select style='width:100px' size='large'>
            <SelectOption value='1'>深圳</SelectOption>
            <SelectOption value='2'>广州广州广州广州广州广州广州广州广州广州</SelectOption>
            <SelectOption value='3'>上海</SelectOption>
            <SelectOption value='4'>北京</SelectOption>
            <SelectOption value='5'>成都</SelectOption>
          </Select>
        </div>
        <div style='display:inline-block;margin:20px;min-height:200px;border:1px solid grey;'>
          可清除
          <Select style='width:100px' clearable>
            <SelectOption value='1'>深圳</SelectOption>
            <SelectOption value='5'>成都</SelectOption>
          </Select>
        </div>
        <div style='display:inline-block;margin:20px;min-height:200px;border:1px solid grey;'>
          可检索
          <Select v-model='model8' filterable size='large' style='width: 240px'>
            <SelectOption style='color:pink;' value='1'>深圳</SelectOption>
            <SelectOption value='2'>广州</SelectOption>
            <SelectOption value='3'>上海</SelectOption>
            <SelectOption value='4'>北京</SelectOption>
            <SelectOption value='5'>成都</SelectOption>
            <SelectOption value='6'>厦门</SelectOption>
            <SelectOption value='7'>昆明</SelectOption>
            <SelectOption value='8'>杭州</SelectOption>
          </Select>
        </div>
        <div style='display:inline-block;margin:20px;min-height:200px;border:1px solid grey;'>
          可检索+可清除
          <Select v-model='model8' filterable clearable size='large' style='width: 240px'>
            <SelectOption style='color:pink;' value='1'>深圳</SelectOption>
            <SelectOption value='2'>广州</SelectOption>
            <SelectOption value='3'>上海</SelectOption>
            <SelectOption value='4'>北京</SelectOption>
            <SelectOption value='5'>成都</SelectOption>
            <SelectOption value='6'>厦门</SelectOption>
            <SelectOption value='7'>昆明</SelectOption>
            <SelectOption value='8'>杭州</SelectOption>
          </Select>
        </div>
        <div style='display:inline-block;margin:20px;min-height:200px;border:1px solid grey;'>
          自定义内容
          <Select v-model='model8' filterable clearable size='large' style='width: 240px'>
            <SelectOption value='1' label="深圳"><span>深圳</span><span style="float: right;opacity: .6;background-color:Red;font-size: 0.8em;">Shenzhen</span></SelectOption>
            <SelectOption value='2' label="广州"><span>广州</span><span style="float: right;opacity: .6;font-size: 0.8em;">Guangzhou</span></SelectOption>
            <SelectOption value='4' label="上海"><span>上海</span></SelectOption>
            <SelectOption value='5' label="北京"><span>北京</span><span style="float: right;opacity: .6;font-size: 0.8em;">Beijin</span></SelectOption>
            <SelectOption value='6' label="成都"><span>成都</span><span style="float: right;opacity: .6;font-size: 0.8em;">Chengdu</span></SelectOption>
          </Select>
        </div>
        <div style='display:inline-block;margin:20px;min-height:200px;border:1px solid grey;'>
          多选
          <Select v-model='model8' multiple style='width: 240px'>
            <SelectOption value='1' label="深圳"><span>深圳</span><span style="float: right;opacity: .6;background-color:Red;font-size: 0.8em;">Shenzhen</span></SelectOption>
            <SelectOption value='2' label="广州"><span>广州</span><span style="float: right;opacity: .6;font-size: 0.8em;">Guangzhou</span></SelectOption>
            <SelectOption value='4' label="上海"><span>上海</span></SelectOption>
            <SelectOption value='5' label="北京"><span>北京</span><span style="float: right;opacity: .6;font-size: 0.8em;">Beijin</span></SelectOption>
            <SelectOption value='6' label="成都"><span>成都</span><span style="float: right;opacity: .6;font-size: 0.8em;">Chengdu</span></SelectOption>
          </Select>
        </div>
      </div>
    )
  }
}

export default SelectExample
