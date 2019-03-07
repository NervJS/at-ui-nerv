---
imports:
  import {Message,Button} from '@src'
---
# Message

----

Compared to `Notification`, `Message` is lighter,, centered at the top of the page, and used to display global messages, such as the feedback of operations.

- Provide four type of Message: `success`, `Error`, `Warning`, `Info`
- Showing and disappearing at the center of the top is a lightweight cue that does not interrupt user operations.


- `Message(config)`
- `Message.info(config)`
- `Message.success(config)`
- `Message.warning(config)`
- `Message.error(config)`
- `Message.loading(config)`

## Basic

There are four type of Message: `success`, `error`, `warning`, `info`.

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

## Customize Duration

Customize message display duration by `duration` property default `3s`.

:::demo
```jsx
<Button
  onClick={() => {
    Message.info({
      message: 'This is a tooltip that will be closed after 10s automatically.',
      duration: 10000
    })
  }}>
  Customize Duration
</Button>
```
:::

## Message of Loading

`Message.loading` return the method of close, which can be used to close manually.

:::demo
```jsx
<Button
  onClick={() => {
    const loading = Message.loading({
      message: 'Loading...',
      duration: 0
    })
    setTimeout(loading.close, 3000)
  }}>
 show Loading...
</Button>
```
:::

## Message Props

| Property      | Description          | Type      | Accepted Values                           | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| type | the type of Message | String | `success`, `error`, `warning`, `info` | `info` |
| message | the content of Message | String | - | - |
| duration | time before auto-dismiss, in seconds, default `3000` | Number | - | 3000 |
| icon | customize the icon of Message | String | - | `info` |
| onClose | specify a function that will be called after the message closed | Function | - | - |


