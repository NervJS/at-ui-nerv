---
imports:
  import {Progress,Button} from '@src'

---
# Progress

----

Used to display the progress and status of events.

## Basic

Basic progress will set the status to `success` automatically when the progress arrives at `100%`.

:::demo
```jsx
<Progress percent="0"></Progress>
<Progress percent="60"></Progress>
<Progress percent="100"></Progress>
<Progress percent="50" status="error"></Progress>
```
:::

## Mini Progress

In the narrow areas, you need to use a mini progress bar. Set the width of progress bar with `stroke-width` property.

:::demo
```jsx
<div class="row no-gutter">
  <div class="col-sm-24 col-md-12">
    <Progress percent="0" strokeWidth="4"></Progress>
    <Progress percent="60" strokeWidth="4"></Progress>
    <Progress percent="100" strokeWidth="4"></Progress>
    <Progress percent="50" status="error" strokeWidth="4"></Progress>
  </div>
</div>
```
:::

## Dynamic

Click the buttons below to see the transition of progress.

:::demo
```jsx
<Progress percent={this.state.percent}></Progress>
<Button.Group size="small">
  <Button onClick={()=>{
    let percent = this.state.percent || 0
    percent = percent -10 < 0 ? 0: percent-10
    this.setState({
      percent
    })
    }}><i class="icon icon-minus"></i></Button>
  <Button onClick={()=>{
    let percent = this.state.percent || 0
    percent = percent +10 > 100 ? 100: percent+10
    this.setState({
      percent
    })
    }}><i class="icon icon-plus"></i></Button>
</Button.Group>
```
:::

## Progress Props

| Property      | Description          | Type      | Accepted Values                           | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| percent | the percentage of Progress | Number | - | 0 |
| status | the status of Progress | String | `success`, `error` | - |
| strokeWidth | the width of Progress Bar | Number | - | 8 |

## Progress Events

| Event Name      | Description          | Return Value  |
|------------- |-------------- |---------- |
| onStatusSuccess | Emitted when the percentage of Progress achieved `100%` | event |

