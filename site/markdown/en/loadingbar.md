---
imports:
  import {Loadingbar,Button} from '@src'
---
# LoadingBar

----

Create a loading progress bar globally to display the status of asynchronous requests.

Because of reusability, `LoadingBar` creates only one instance globally. You can use the `this.$Loading` instance directly.

## Basic

Invoke `$Loading` by thress methods: `start()`、`finish()`、`error()`

:::demo
```jsx
<Button
onClick={()=>{
  Loadingbar.start()
  }}>Start</Button>
<Button onClick={()=>{
  Loadingbar.finish()
  }}>Finish</Button>
<Button onClick={()=>{
  Loadingbar.error()
  }}>Error</Button>
<Button onClick={()=>{
   Loadingbar.update(50)
  }}>Update</Button>
<Button onClick={()=>{
  Loadingbar.finish()
  }}>Finish</Button>
```
:::

## LoadingBar Methods

| Function Name      | Description          | Parameter      |
|---------- |-------------- |---------- |
| start | start loading the progress from 0, and load automatically | - |
| finish | complete progress | - |
| error | display the error type of progress bar | - |
| update | specify and update the percentage of progress | percentage |

## LoadingBar Configs

Provides the global configuration of `LoadingBar`, usage methods below:

```js
Loadingbar.config({ width: 4 })
```

:::demo
```jsx
<Button onClick={()=>{
 Loadingbar.config({ width: 4 })
}}>set line width 4px</Button>
<Button onClick={()=>{
 Loadingbar.config({ width: 2 })
}}>set line width  2px</Button>
<Button onClick={()=>{
  Loadingbar.finish()
  }}>test</Button>
```
:::

## LoadingBar Props

| Property      | Description          | Type      | Accepted Values                           | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| width | the width of line | Number | - | 2 |
