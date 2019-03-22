---
imports:
    import {Select} from '@src';
---
# Select 选择器

----


## 多选列表

设置 `multiple` 属性可开启多项选择器，此时绑定的 `model` 将接受数组类型的数据

:::demo
 ```jsx
<Select  value={["1","2"]} multiple style="width: 240px" onChange={(value, event)=>{ console.log(value)}}>
  <Select.Option value="1">深圳</Select.Option>
  <Select.Option value="2">广州</Select.Option>
  <Select.Option value="3">上海</Select.Option>
  <Select.Option value="4">北京</Select.Option>
  <Select.Option value="5">成都</Select.Option>
</Select>
```
:::

## Select 参数

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
| :---------- | :-------------- | :---------- | :-----------------------------  | :-------- |
| value | 指定当前组件的 value 值 | String / Number / Array | - | - |
| multiple | 是否支持多选 | Boolean | - | false |
| disabled | 是否禁用选择器 | Boolean | - | false |
| clearable | 是否支持清空功能 | Boolean | - | false |
| filterable | 是否支持搜索功能 | Boolean | - | false |
| placeholder | 选择器的占位文案 | String | - | 请选择 |
| size | 设置选择器的尺寸 | String | `large`, `normal`, `small` | normal |
| notFoundText | 搜索无结果的提示 | String | - | 无匹配数据 |
| placement | `dropdown` 出现的位置 | String | `top`, `bottom` | bottom |
| valueWithLabel | 是否将 `label` 值一并返回，默认只返回 `value` | Boolean | - | false |

## Select 事件

| 事件名称      | 说明          | 返回值  |
|---------- |-------------- |---------- |
| onChange | 绑定的值变化时触发 | 选中的选项值，类型为 `String`，`Number` 或者 `Array` |
