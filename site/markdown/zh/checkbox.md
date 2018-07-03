---
imports:
    import {Checkbox} from '@src';
---

# Checkbox 多选框

---

## 基本多选框

独立使用时，需要单独绑定 `checked` 和`onChange`

:::demo

```jsx
<Checkbox 
onChange={(checked,label)=>{this.setState({val1: checked ? true:false})}} checked={this.state.val1}
label="深圳">
深圳
</Checkbox>
<p class="demo-desc">{ this.state.val1 ? 'true':'false' }</p>
```

:::

## 不可用的多选框

添加 `disabled` 属性禁用多选框

:::demo

```jsx
<Checkbox 
onChange={(e)=>{//this.setState({val2: e ? true:false})
}}
label="深圳" disabled
>
深圳
</Checkbox>
<Checkbox 
onChange={(e)=>{
  //this.setState({val3: e ? true:false})
  }
  }
  label="凹凸实验室" disabled checked
  >
  凹凸实验室
</Checkbox>
```

:::

## 多选框组

适用于多个多选框绑定同一个 `model` 的情景

:::demo

```jsx
<Checkbox.Group
value={this.state.val4 ||['深圳', '北京']}
onChange={(e)=>{this.setState({val4: e})
}
}
>
  <Checkbox label="深圳">深圳</Checkbox>
  <Checkbox label="北京">北京</Checkbox>
  <Checkbox label="上海">上海</Checkbox>
  <Checkbox label="广州" disabled>广州</Checkbox>
  <Checkbox label="凹凸实验室" disabled>凹凸实验室</Checkbox>
</Checkbox.Group>
<p class="demo-desc">{ `[${(this.state.val4 || ['深圳', '北京']).join(',')}]` }</p>
```

:::

## Checkbox 参数

| 参数     | 说明         | 类型    | 可选值 | 默认值 |
| -------- | ------------ | ------- | ------ | ------ |
| label    | 选中状态的值 | String  | -      | -      |
| disabled | 是否禁用按钮 | Boolean | -      | false  |
| checked  | 是否已勾选   | Boolean | -      | false  |

## CheckboxGroup 参数

| 参数     | 说明         | 类型    | 可选值 | 默认值 |
| -------- | ------------ | ------- | ------ | ------ |
| value    | 选中状态的值 | array  | -      | -      |

## Checkbox 事件

| 事件名称  | 说明               | 返回值                |
| --------- | ------------------ | --------------------- |
| onChange | 绑定的值变化时触发 | 选中的按钮的 label 值 |

## Checkbox Group 事件

| 事件名称  | 说明               | 返回值                |
| --------- | ------------------ | --------------------- |
| onChange | 绑定的值变化时触发 | 选中的按钮的 label 值数组 |


