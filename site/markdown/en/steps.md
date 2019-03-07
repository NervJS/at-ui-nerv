---
imports:
    import {Steps,Button} from '@src';
---
# Steps

---

`Steps` is a navigation bar that guides users through the steps of a task.

## Basic

The most basic step bar.

:::demo
```html
<Steps current={this.state.current}>
  <Steps.Step title="Step1" description="This is a description."></Steps.Step>
  <Steps.Step title="Step2" description="This is a description."></Steps.Step>
  <Steps.Step title="Step3"></Steps.Step>
</Steps>

<Button type="primary" onClick={()=>{
    let current = this.state.current || 0;
    current = current-1 <0? 0:current - 1
    if(this.state.current){
      this.setState({current: current})
    }
    }} style="margin-top: 12px;">Prev</Button>
<Button type="primary" onClick={()=>{
  let current = this.state.current || 0;
  current = current+1 > 2? 2:current + 1
  console.log('test',current)
  this.setState({current: current})
}} style={{marginTop: '12px'}}>Next</Button>
```
:::

## Mini version

By setting like this: `<Steps size="small">`, you can get a mini version.

:::demo
```html
<Steps current={this.state.current} size='small'>
  <Steps.Step title="Step1" description="This is a description."></Steps.Step>
  <Steps.Step title="Step2" description="This is a description."></Steps.Step>
  <Steps.Step title="Step3"></Steps.Step>
</Steps>

<Button type="primary" onClick={()=>{
    let current = this.state.current || 0;
    current = current-1 <0? 0:current - 1
    if(this.state.current){
      this.setState({current: current})
    }
    }} style="margin-top: 12px;">Prev</Button>
<Button type="primary" onClick={()=>{
  let current = this.state.current || 0;
  current = current+1 > 2? 2:current + 1
  console.log('test',current)
  this.setState({current: current})
}} style={{marginTop: '12px'}}>Next</Button>
```
:::

## With icon

You can use your own custom icons by setting the property `icon` for `Step`.

:::demo
```html
<Steps current={this.state.current}>
  <Steps.Step title="Step1" description="This is a description." icon="icon-user"></Steps.Step>
  <Steps.Step title="Step2" description="This is a description." icon="icon-airplay"></Steps.Step>
  <Steps.Step title="Step3" icon="icon-pocket"></Steps.Step>
</Steps>

<Button type="primary" onClick={()=>{
    let current = this.state.current || 0;
    current = current-1 <0? 0:current - 1
    if(this.state.current){
      this.setState({current: current})
    }
    }} style="margin-top: 12px;">Prev</Button>
<Button type="primary" onClick={()=>{
  let current = this.state.current || 0;
  current = current+1 > 2? 2:current + 1
  console.log('test',current)
  this.setState({current: current})
}} style={{marginTop: '12px'}}>Next</Button>
```
:::

## Switch Step

Cooperate with the content and buttons, to represent the progress of a process.

:::demo
```html
<Steps current={this.state.current}>
  <Steps.Step title="Step1" description="This is a description."></Steps.Step>
  <Steps.Step title="Step2" description="This is a description."></Steps.Step>
  <Steps.Step title="Step3"></Steps.Step>
</Steps>
<div style='margin-top: 16px; border: 1px solid rgb(233, 233, 233); border-radius: 6px; background-color: rgb(250, 250, 250); min-height: 200px; text-align: center; padding-top: 80px;'>步骤{this.state.current}</div>

<Button type="primary" onClick={()=>{
    let current = this.state.current || 0;
    current = current-1 <0? 0:current - 1
    if(this.state.current){
      this.setState({current: current})
    }
    }} style="margin-top: 12px;">Prev</Button>
<Button type="primary" onClick={()=>{
  let current = this.state.current || 0;
  current = current+1 > 2? 2:current + 1
  console.log('test',current)
  this.setState({current: current})
}} style={{marginTop: '12px'}}>Next</Button>
```
:::

## Vertical

A simple step bar in the vertical direction.

:::demo
```html
<Steps current={this.state.current} direction='vertical'>
  <Steps.Step title="Step1" description="This is a description."></Steps.Step>
  <Steps.Step title="Step2" description="This is a description."></Steps.Step>
  <Steps.Step title="Step3"></Steps.Step>
</Steps>

<Button type="primary" onClick={()=>{
    let current = this.state.current || 0;
    current = current-1 <0? 0:current - 1
    if(this.state.current){
      this.setState({current: current})
    }
    }} style="margin-top: 12px;">Prev</Button>
<Button type="primary" onClick={()=>{
  let current = this.state.current || 0;
  current = current+1 > 2? 2:current + 1
  console.log('test',current)
  this.setState({current: current})
}} style={{marginTop: '12px'}}>Next</Button>
```
:::

## Vertical mini version

A simple mini version step bar in the vertical direction.

:::demo
```html
<Steps current={this.state.current} size='small' direction='vertical'>
  <Steps.Step title="Step1" description="This is a description."></Steps.Step>
  <Steps.Step title="Step2" description="This is a description."></Steps.Step>
  <Steps.Step title="Step3"></Steps.Step>
</Steps>

<Button type="primary" onClick={()=>{
    let current = this.state.current || 0;
    current = current-1 <0? 0:current - 1
    if(this.state.current){
      this.setState({current: current})
    }
    }} style="margin-top: 12px;">Prev</Button>
<Button type="primary" onClick={()=>{
  let current = this.state.current || 0;
  current = current+1 > 2? 2:current + 1
  console.log('test',current)
  this.setState({current: current})
}} style={{marginTop: '12px'}}>Next</Button>
```
:::


## Error status

By using `status` of `Steps`, you can specify the state for current step.

:::demo
```html
<Steps current={this.state.current} status='error'>
  <Steps.Step title="Step1" description="This is a description."></Steps.Step>
  <Steps.Step title="Step2" description="This is a description."></Steps.Step>
  <Steps.Step title="Step3"></Steps.Step>
</Steps>

<Button type="primary" onClick={()=>{
    let current = this.state.current || 0;
    current = current-1 <0? 0:current - 1
    if(this.state.current){
      this.setState({current: current})
    }
    }} style="margin-top: 12px;">Prev</Button>
<Button type="primary" onClick={()=>{
  let current = this.state.current || 0;
  current = current+1 > 2? 2:current + 1
  console.log('test',current)
  this.setState({current: current})
}} style={{marginTop: '12px'}}>Next</Button>
```
:::

## Steps Props

| Property      | Description          | Type      | Accepted Values                           | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| current | to set the current step, counting from 0 | Number | - | 0 |
| status | to specify the status of current step | String | `wait` `process` `finish` `error` | `process` |
| size | to specify the size of the step bar | String | `default` `small` | `default` |
| direction | to specify the direction of the step bar | String | `horizontal` `vertical` | `horizontal` |


## Step Props

| Property      | Description          | Type      | Accepted Values                           | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| title | title of the step | String | - | - |
| description | detail of the step, optional property | String | - | - |
| icon | icon of the step, optional property | String | - | - |
| status | to specify the status. It will be automatically set by `current` of `Steps` if not configured  | String | `wait` `process` `finish` `error` | - |
