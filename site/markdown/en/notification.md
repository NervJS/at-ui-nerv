---
imports:
    import {Notification,Button} from '@src';
---
# Notification

----

The notification will display in the upper right corner of the page, similar to `Message` component. Often used in the following scenes:

- More complex notification
- Interactive notification
- Systematic push

You can use the `Notification` instance directly.

* `Notification(config)`
* `Notification.success(config)`
* `Notification.error(config)`
* `Notification.warning(config)`
* `Notification.info(config)`

The `$Notify` instance receives the following parameters:

- type - the status of Notification
- title - the title of Notification
- message - the content of Notification
- duration - time before auto-dismiss
- showClose - whether to show close button
- icon - customize the icon of Notification
- onClose - specify a function that will be called after the notification closed


## Basic

Only display the title, or title and content, will be closed after `4s`.

:::demo
```jsx
<p class="demo-desc">{`Notification({ title: 'Here is Title' })`}</p>
<Button onClick={()=>{
   Notification({
          title: 'Here is Title'
        })
}}>open Notification (Title)</Button>
<p className="demo-desc">{`Notification({ title: 'Here is Title', message: 'Here is Content~~~' })`}</p>
<Button onClick={()=>{
   Notification({
          title: 'Here is Title',
          message: 'Here is Content~~~'
        })
}}>打开通知（标题和内容）</Button>
```
:::


## Customize Duration

Customize message display duration by `duration` property default `4000`. You can close the notification manually by setting `duration` to `0`.

:::demo
```jsx
<p className="demo-desc">{`Notification({title: 'Here is Title', message: 'Here is Content~~~', duration: 2000 })`}</p>
<Button
onClick={
  ()=>{Notification({
        title: 'Here is Title',
        message: 'Here is Content~~~',
        duration: 2000
      })}}
      >
      Dismiss After 2s</Button>
<p class="demo-desc">{`Notification({ title: 'Here is Title', message: 'Here is Content~~~', duration: 0 })`}</p>
<Button onClick={()=>{Notification({
        title: 'Here is Title',
        message: 'Here is Content~~~',
        duration: 0
      })}}
      >Dismiss Manually</Button>
```
:::


## Type of Notification

There are four type of Notification: `success`，`Error`，`Warning`，`Info`

:::demo
```jsx
<Button onClick={()=>{Notification({
        title: 'Here is Title',
        message: 'Here is Content~~~',
        duration: 2000,
        type: 'success'
      })}}>Success</Button>
<Button onClick={()=>{Notification({
        title: 'Here is Title',
        message: 'Here is Content~~~',
        duration: 2000,
        type: 'error'
      })}}>Error</Button>
<Button onClick={()=>{Notification({
        title: 'Here is Title',
        message: 'Here is Content~~~',
        duration: 2000,
        type: 'warning'
      })}}>Warning</Button>
<Button onClick={()=>{Notification({
        title: 'Here is Title',
        message: 'Here is Content~~~',
        duration: 2000,
        type: 'info'
      })}}>Info</Button>

```
:::


## Use `Notification.success`

:::demo
```jsx
<p class="demo-desc">{`Notification.success({ title: 'Here is Title', message: 'Here is Content~~~' })`}</p>
<Button onClick={()=>{Notification.success({
        title: 'Here is Title',
        message: 'Here is Content~~~'
      })}}>Success</Button>
```
:::


## Global Click to Close

By default, click the close button to dismiss the notification, or you can use global click mode. The method is to pass `showClose: false`.

:::demo
```jsx
<Button onClick={()=>{Notification({
        title: 'Here is Title',
        message: 'Here is Content~~~',
        showClose: false,
        duration: 0
      })
    }}>Global Click to Close</Button>
```
:::

## Notification Props

| Property      | Description          | Type      | Accepted Values                           | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| type | the type of Notification | String | `success`, `error`, `warning`, `info` | `info` |
| title | required, the title of Notification | String | - | - |
| message | the content of Notification | String | - | - |
| duration | time before auto-dismiss, in seconds, default `4000` | Number | - | 4000 |
| showClose | whether to show close button | Boolean | - | true |
| icon | customize the icon of Notification | String | - | - |
| onClose | specify a function that will be called after the notification closed | Function | - | - |

