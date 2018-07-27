---
imports:
  import {Message,Button} from '@src'
---

# Message 全局提示

---

相比 `Notification`，`Message` 更轻量，居中显示在页面顶部，用于展示全局消息，例如操作的反馈信息

* 提供消息、成功、错误、警告等反馈提示
* 在顶部居中显示，并自动消失，是一种不打断用户操作的轻量级提示

- `Message(config)`
- `Message.info(config)`
- `Message.success(config)`
- `Message.warning(config)`
- `Message.error(config)`
- `Message.loading(config)`

## 基础用法

四种类型的消息提示

:::demo

```jsx
<Button onClick={()=>{
  Message.info(
    {
      message: 'isInfo',
      duration: 3000
    }
  )
}}>Info</Button>
<Button onClick={()=>{
  Message.success(
    {
      message: 'isError',
      duration: 3000
    }
  )
}}>Success</Button>
<Button onClick={()=>{
  Message.warning(
    {
      message: 'isWarning',
      duration: 3000
    }
  )
}}>Warning</Button>
<Button onClick={()=>{
  Message.error(
    {
      message: 'isError',
      duration: 3000
    }
  )
}}>Error</Button>
```

:::

## 修改延时

提示默认的显示时长为 `3s`，可传递 `duration` 来自定义时长

:::demo

```jsx
<Button
  onClick={() => {
    Message.info({
      message: 'isInfo',
      duration: 10000
    })
  }}>
  修改延时
</Button>
```

:::

## 加载中

`Message.loading` 返回包含关闭方法的对象，可用于手动关闭提示框

:::demo

```jsx
<Button
  onClick={() => {
    const loading = Message.loading({
      message: '加载中...',
      duration: 0
    })
    setTimeout(loading.close, 3000)
  }}>
  显示加载中...
</Button>
```

:::

## Message 参数

| 参数     | 说明                               | 类型     | 可选值                                | 默认值 |
| -------- | ---------------------------------- | -------- | ------------------------------------- | ------ |
| type     | 全局提示的类别                     | String   | `success`, `error`, `warning`, `info` | `info` |
| message  | 提示的内容                         | String   | -                                     | -      |
| duration | 自动关闭的延时，默认为 `3000` 毫秒 | Number   | -                                     | 3000   |
| icon     | 自定义类别 ICON                    | String   | -                                     | `info` |

## Message 事件
| 事件名称  | 说明               | 返回参数 |
| --------- | ------------------ | -------- |
| onClose  | 关闭提示框时的回调函数  | -      |
