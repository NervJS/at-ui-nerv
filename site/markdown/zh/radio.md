---
imports:
    import {Radio} from '@src';
---

# Radio 单选框

---

## 基本单选框

每个都是独立的单选按钮，各自需要单独绑定一个 `model`

:::demo

```jsx
<Radio
  onChange={(n)=>{this.setState({radio1:n})}}
  value={this.state.radio1} label="1" >
  选项一
</Radio>
<Radio 
  onChange={(n)=>{this.setState({radio1:n})}} 
  value={this.state.radio1} label="2" >
  选项二
</Radio>
```

:::

## 不可用状态

添加属性 `disabled`，设置按钮不可用

:::demo

```html
<Radio onChange={(n)=>{this.setState({radio2:n})}} value={this.state.radio1} label="3" disabled>不可点且未选中</Radio>
<Radio onChange={(n)=>{this.setState({radio2:n})}} value={this.state.radio1} label="4" disabled>不可点且选中</Radio>
```

:::

## 单选框组合

如果按钮存在互斥的情况，可用单选框组，但如果选项过多，建议使用下拉框组件。使用组合：`Radio.Group` 和 `Radio`

::: demo

```html
<Radio.Group 
  value={this.state.groupVal} 
  onRadioGroupChange={(n)=>{this.setState({
    groupVal: n
  })}}>
  <Radio label="1">选项一</Radio>
  <Radio label="2">选项二</Radio>
  <Radio label="3">选项三</Radio>
</Radio.Group>
```

:::

## 组合按钮

按钮样式的单选框组合，使用组合：`AtRadioGroup` 和 `AtRadioButton`

:::demo

```html
<Radio.Group  value={this.state.groupVal2} 
  onRadioGroupChange={(n)=>{this.setState({
    groupVal2: n
  })}}>
  <Radio.Button label="北京">北京</Radio.Button>
  <Radio.Button label="上海" disabled>上海</Radio.Button>
  <Radio.Button label="深圳">深圳</Radio.Button>
  <Radio.Button label="凹凸实验室">凹凸实验室</Radio.Button>
</Radio.Group>
```

:::

## 自定义组合按钮样式

设置 `fill` 属性可更改选中按钮的背景颜色，设置 `text-color` 属性可更改选中按钮字体的颜色

:::demo

```html
<p class="demo-desc">更换背景色</p>
<div class="row">
  <Radio.Group  
  value={this.state.groupVal3} 
  onRadioGroupChange={(n)=>{this.setState({
    groupVal3: n
  })}} 
  fill="#FF6464">
    <Radio.Button label="北京">北京</Radio.Button>
    <Radio.Button label="上海" disabled>上海</Radio.Button>
    <Radio.Button label="深圳">深圳</Radio.Button>
    <Radio.Button label="凹凸实验室">凹凸实验室</Radio.Button>
  </Radio.Group>
</div>
<p class="demo-desc">更换字体颜色</p>
<div class="row">
  <Radio.Group  
  value={this.state.groupVal4} 
  onRadioGroupChange={(n)=>{this.setState({
    groupVal4: n
  })}} 
  textColor="#4C5D73">
    <Radio.Button label="北京">北京</Radio.Button>
    <Radio.Button label="上海" disabled>上海</Radio.Button>
    <Radio.Button label="深圳">深圳</Radio.Button>
    <Radio.Button label="凹凸实验室">凹凸实验室</Radio.Button>
  </Radio.Group>
</div>
```

:::

## 不同大小的组合按钮

提供大中小三种尺寸的组合按钮

:::demo

```html
<div class="row">
  <Radio.Group 
  value={this.state.groupVal5} 
  onRadioGroupChange={(n)=>{this.setState({
    groupVal5: n
  })}}  
  size="large">
    <Radio.Button label="北京">北京</Radio.Button>
    <Radio.Button label="上海" disabled>上海</Radio.Button>
    <Radio.Button label="深圳">深圳</Radio.Button>
    <Radio.Button label="凹凸实验室">凹凸实验室</Radio.Button>
  </Radio.Group>
</div>
<div class="row">
  <Radio.Group
  value={this.state.groupVal6} 
  onRadioGroupChange={(n)=>{this.setState({
    groupVal6: n
  })}} 
   size="normal">
    <Radio.Button label="北京">北京</Radio.Button>
    <Radio.Button label="上海" disabled>上海</Radio.Button>
    <Radio.Button label="深圳">深圳</Radio.Button>
    <Radio.Button label="凹凸实验室">凹凸实验室</Radio.Button>
  </Radio.Group>
</div>
<div class="row">
  <Radio.Group 
  value={this.state.groupVal7} 
  onRadioGroupChange={(n)=>{this.setState({
    groupVal7: n
  })}}  size="small">
    <Radio.Button label="北京">北京</Radio.Button>
    <Radio.Button label="上海" disabled>上海</Radio.Button>
    <Radio.Button label="深圳">深圳</Radio.Button>
    <Radio.Button label="凹凸实验室">凹凸实验室</Radio.Button>
  </Radio.Group>
</div>
```

:::

## Radio 参数

| 参数     | 说明                                                  | 类型            | 可选值 | 默认值 |
| :------- | :---------------------------------------------------- | :-------------- | :----- | :----- |
| label    | 指定当前组件的 value 值                               | String / Number | -      | -      |
| value    | 用于跟 label 比较，判断是否选中（只在单独使用时有效） | String / Number | -      | -      |
| disabled | 是否禁用当前项                                        | Boolean         | -      | false  |

## Radio Button 参数

| 参数     | 说明                    | 类型            | 可选值 | 默认值 |
| :------- | :---------------------- | :-------------- | :----- | :----- |
| label    | 指定当前组件的 value 值 | String / Number | -      | -      |
| disabled | 是否禁用当前项          | Boolean         | -      | false  |

## Radio Group 参数

| 参数      | 说明                                      | 类型                  | 可选值               | 默认值 |
| --------- | ----------------------------------------- | --------------------- | -------------------- | ------ |
| size      | 按钮尺寸，仅适用于单选按钮样式            | String                | small, normal, large | normal |
| value     | 组合按钮的选中值 | String / Number       | -                    | -      |
| fill      | 选中按钮的背景色                          | String，颜色的 Hex 值 | -                    | -      |
| textColor | 选中按钮的字体颜色                        | String，颜色的 Hex 值 | -                    | -      |

## Radio Group 事件

| 事件名称           | 说明               | 返回值                |
| ------------------ | ------------------ | --------------------- |
| onRadioGroupChange | 绑定的值变化时触发 | 选择的按钮的 value 值 |


