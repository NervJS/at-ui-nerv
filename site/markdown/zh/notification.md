---
imports:
    import {Notification,Button} from '@src';
---

# Notification 通知提醒

---

在页面的右上角全局显示通知提醒信息，跟 `Message` 有点类似。常用于以下场景：

* 较复杂的通知内容
* 有交互的通知
* 系统的推送

我们可以直接通过 `Notification` 操作实例

* `Notification(config)`
* `Notification.success(config)`
* `Notification.error(config)`
* `Notification.warning(config)`
* `Notification.info(config)`

实例接收如下参数：

* type - 通知提醒的状态
* title - 消息标题
* message - 消息内容
* duration - 自动关闭的延时
* showClose - 是否显示关闭按钮
* icon - 自定义消息提醒的图标
* onClose - 关闭的回调函数

## 基本用法

仅显示标题，或者标题和内容，默认 `4s` 后自动关闭。通知框默认显示关闭按钮

:::demo

```jsx
<p class="demo-desc">{`Notification({ title: '这里是标题' })`}</p>
<Button onClick={()=>{
   Notification({
          title: '这里是标题'
        })
}}>打开通知（仅标题）</Button>
<p className="demo-desc">{`Notification({ title: '这里是标题', message: '这里是内容，文案~~~' })`}</p>
<Button onClick={()=>{
   Notification({
          title: '这里是标题',
          message: '这里是内容，文案~~~'
        })
}}>打开通知（标题和内容）</Button>
```

:::

## 自定义自动关闭的延时

默认是 `4s` 自动关闭，如需手动关闭，则设置延时为 0

:::demo

```jsx
<p className="demo-desc">{`Notification({ title: '这里是标题', message: '这里是内容，文案~~~', duration: 2000 })`}</p>
<Button
onClick={
  ()=>{Notification({
        title: '这里是标题',
        message: '这里是内容，文案~~~',
        duration: 2000
      })}}
      >
      两秒关闭</Button>
<p class="demo-desc">{`Notification({ title: '这里是标题', message: '这里是内容，文案~~~', duration: 0 })`}</p>
<Button onClick={()=>{Notification({
        title: '这里是标题',
        message: '这里是内容，文案~~~',
        duration: 0
      })}}
      >手动关闭</Button>
```

:::

## 不同类型的通知提醒

设置参数 `type` 定义不同类型的通知提醒，默认支持四种类型：`success`，`Error`，`Warning`，`Info`

:::demo

```jsx
<Button onClick={()=>{Notification({
        title: '这里是标题',
        message: '这里是内容，文案~~~',
        duration: 2000,
        type: 'success'
      })}}>Success</Button>
<Button onClick={()=>{Notification({
        title: '这里是标题',
        message: '这里是内容，文案~~~',
        duration: 2000,
        type: 'error'
      })}}>Error</Button>
<Button onClick={()=>{Notification({
        title: '这里是标题',
        message: '这里是内容，文案~~~',
        duration: 2000,
        type: 'warning'
      })}}>Warning</Button>
<Button onClick={()=>{Notification({
        title: '这里是标题',
        message: '这里是内容，文案~~~',
        duration: 2000,
        type: 'info'
      })}}>Info</Button>
```

:::

## 使用 `Notification.success`

:::demo

```jsx
<p class="demo-desc">{`Notification.success({ title: '这里是标题', message: '这里是内容，文案~~~' })`}</p>
<Button onClick={()=>{Notification.success({
        title: '这里是标题',
        message: '这里是内容，文案~~~'
      })}}>Success</Button>
```

:::

## 使用全局点击关闭

默认是点击「关闭按钮」关闭通知提醒框，也可以使用全局点击模式，即点击「通知提醒框」关闭。设置方法是传入 `showClose: false`

:::demo

```jsx
<Button onClick={()=>{Notification({
        title: '这里是标题',
        message: '这里是内容，文案~~~',
        showClose: false,
        duration: 0
      })
    }}>全局点击关闭</Button>
```

:::

## Notification 参数

| 参数      | 说明                       | 类型     | 可选值                                | 默认值 |
| --------- | -------------------------- | -------- | ------------------------------------- | ------ |
| type      | 通知提醒的类别             | String   | `success`, `error`, `warning`, `info` | `info` |
| title     | 必填，通知的标题           | String   | -                                     | -      |
| message   | 通知的内容                 | String   | -                                     | -      |
| duration  | 自动关闭的延时，单位为毫秒 | Number   | -                                     | 4000   |
| showClose | 是否显示关闭按钮           | Boolean  | -                                     | true   |
| icon      | 自定义消息提醒的 ICON      | String   | -                                     | -      |
| onClose   | 关闭通知提醒框时的回调函数 | Function | -                                     | -      |

