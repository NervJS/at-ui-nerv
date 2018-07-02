---
imports:
    import {Badge,Button} from '@src';
---

# Badge 徽标

---

## 独立使用

不包裹任何元素，类似 `Tag` 标签

:::demo

```html
<Badge value="3"></Badge>
<Badge value="23"></Badge>
<Badge value="199"></Badge>
```

:::

## 文本内容

徽标既可以数字，也可以是文本内容

:::demo

```html
<Badge value="new"></Badge>
<Badge value="hot"></Badge>
```

:::

## 不同状态

设置属性 `status` 指定不同的状态徽标

:::demo

```html
Primary <Badge value="123"></Badge><br>
Success <Badge value="123" status="success"></Badge><br>
Warning <Badge value="123" status="warning"></Badge><br>
Info <Badge value="123" status="info"></Badge>
```

:::

## 设定最大值

设置属性 `max-num` 可自定义徽标的最大值，超过最大值则显示 `+`

:::demo

```html
<Badge value="123" maxNum="99"></Badge>
```

:::

## 组合用法

与其他组件组合使用，用于展示消息数量等

:::demo

```html
<Badge value="3">
  <Button>回复</Button>
</Badge>
<Badge value="111" maxNum="99">
  <Button>回复</Button>
</Badge>
<Badge value="new">
  <Button>回复</Button>
</Badge>
```

:::

## 小红点

设置属性 `dot` 不显示具体的数字

:::demo

```html
<Badge value="12" dot></Badge>
<Badge value="12" dot>
  <Button>回复</Button>
</Badge>
<Badge value="12" dot>
  <i class="icon icon-inbox"></i>
</Badge>
<Badge value="12" dot>
  <span>消息</span>
</Badge>
```

:::

## 动态展示

动态展示变化的效果

:::demo

```html
<Badge value={ this.state.num || 1} maxNum="12">
  <span class="badge-example"></span>
</Badge>
<Badge value={ this.state.num || 1} show={this.state.show} dot>
  <span class="badge-example"></span>
</Badge>
<br>
<Button.Group size="small">
  <Button onClick={()=>{this.setState((prevState, props)=>{
    if(typeof prevState.num == 'undefined' ) {
      prevState.num = 0
    }
    prevState.num-= 1
    return prevState
  })}}>-</Button>
  <Button onClick={()=>{this.setState((prevState, props)=>{
    if(typeof prevState.num == 'undefined' ) {
      prevState.num = 0
    }
    prevState.num+= 1

    return prevState
  })}}>+</Button>
</Button.Group>
<Button size="small" onClick={()=>{
  this.setState((prevState)=>{
    prevState.show = !prevState.show
    return prevState
  })
}}>{this.state.show ? '隐藏' : '显示'}小红点</Button>
```

:::

## Badge 参数

| 参数   | 说明                              | 类型            | 可选值                       | 默认值 |
| ------ | --------------------------------- | --------------- | ---------------------------- | ------ |
| value  | 绑定的值                          | String / Number | -                            | -      |
| maxNum | 允许的最大值，超出则用 `+` 号显示 | Number          | -                            | 99     |
| dot    | 是否显示为小红点                  | Boolean         | -                            | false  |
| status | 徽标的类型                        | String          | `success`, `warning`, `info` | -      |
| show   | 是否显示徽标                      | Boolean         | -                            | true   |


