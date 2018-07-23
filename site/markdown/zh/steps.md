---
imports:
    import {Steps,Button} from '@src';
---

# Steps 步骤条

---

用于引导用户按照流程完成任务的导航条。

## 基础用法

简单的步骤条
:::demo
```html
<Steps current='current'>
  <Steps.step title="Step1" description="This is a description."></Steps.step>
  <Steps.step title="Step2" description="This is a description."></Steps.step>
  <Steps.step title="Step3"></Steps.step>
</Steps>

<Button type="primary" onClick="prev" style="margin-top: 12px;">Prev</Button>
<Button type="primary" onClick="next" style="margin-top: 12px;">Next</Button>
```
:::

## 迷你版

迷你版的步骤条

:::demo
```html
<Steps size="small" current='current'>
  <Steps.step title="Step1" description="This is a description."></Steps.step>
  <Steps.step title="Step2" description="This is a description."></Steps.step>
  <Steps.step title="Step3"></Steps.step>
</Steps>

<Button type="primary" onClick="prev" style="margin-top: 12px;">Prev</Button>
<Button type="primary" onClick="next" style="margin-top: 12px;">Next</Button>
```
:::

## 带图标的步骤条

通过设置 `Step` 的 `icon` 属性，可自定义图标。

:::demo
```html
<Steps current='current'>
  <Steps.step title="Step1" description="This is a description." icon="icon-user"></Steps.step>
  <Steps.step title="Step2" description="This is a description." icon="icon-airplay"></Steps.step>
  <Steps.step title="Step3" icon="icon-pocket"></Steps.step>
</Steps>

<Button type="primary" onClick="prev" style="margin-top: 12px;">Prev</Button>
<Button type="primary" onClick="next" style="margin-top: 12px;">Next</Button>
```
:::

## 步骤切换

配合内容及按钮使用，表示一个流程的处理进度。

:::demo
```html
<Steps current='current'>
  <Steps.step v-for="(step, index) in steps"
    :title="step.title"
    :key="index"></Steps.step>
</Steps>
<div class="steps-content" style="margin-top: 16px; border: 1px solid #e9e9e9; border-radius: 6px;background-color: #fafafa; min-height: 200px; text-align: center; padding-top:80px;">
  {{ steps[current].content }}
</div>

<Button type="primary" onClick="prev" style="margin-top: 12px;">Prev</Button>
<Button type="primary" onClick="next" style="margin-top: 12px;">Next</Button>

<script>
  export default {
    data() {
      return {
        current: 0,
        steps: [{
          title: 'First',
          content: 'First-content'
        }, {
          title: 'Second',
          content: 'Second-content'
        }, {
          title: 'Last',
          content: 'Last-content'
        }]
      }
    },

    methods: {
      prev () {
        if (this.current-- <= 0)
          this.current = 0
      },
      next () {
        if (this.current++ >= 2)
          this.current = 2
      }
    }
  }
</script>
```
:::

## 竖直方向的步骤条

简单的竖直方向的步骤条

:::demo
```html
<Steps current='current' direction="vertical">
  <Steps.step title="Step1" description="This is a description."></Steps.step>
  <Steps.step title="Step2" description="This is a description."></Steps.step>
  <Steps.step title="Step3" description="This is a description."></Steps.step>
</Steps>

<Button type="primary" onClick="prev" style="margin-top: 12px;">Prev</Button>
<Button type="primary" onClick="next" style="margin-top: 12px;">Next</Button>
```
:::

## 竖直方向的小型步骤条

简单的竖直方向的小型步骤条。

:::demo
```html
<Steps current='current' size="small" direction="vertical">
  <Steps.step title="Step1" description="This is a description."></Steps.step>
  <Steps.step title="Step2" description="This is a description."></Steps.step>
  <Steps.step title="Step3" description="This is a description."></Steps.step>
</Steps>

<Button type="primary" onClick="prev" style="margin-top: 12px;">Prev</Button>
<Button type="primary" onClick="next" style="margin-top: 12px;">Next</Button>
```
:::

## 步骤运行错误

使用 `Steps` 的 `status`  属性来指定当前步骤的状态。

:::demo
```html
<Steps current='current' status="error">
  <Steps.step title="Step1" description="This is a description."></Steps.step>
  <Steps.step title="Step2" description="This is a description."></Steps.step>
  <Steps.step title="Step3"></Steps.step>
</Steps>

<Button type="primary" onClick="prev" style="margin-top: 12px;">Prev</Button>
<Button type="primary" onClick="next" style="margin-top: 12px;">Next</Button>
```
:::

## Steps 参数
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| current | 指定当前步骤，从 0 开始计数 | Number | - | 0 |
| status | 指定当前步骤的状态，会覆盖子元素 `Step` 的状态 | String | `wait` `process` `finish` `error` | `process` |
| size | 指定样式大小 | String | `default` `small` | `default` |
| direction | 指定步骤条方向 | String | `horizontal` `vertical` | `horizontal` |


## Steps.Step 参数
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| title | 标题 | String | - | - |
| description | 描述 | String | - | - |
| icon | 图标 | String | - | - |
| status | 指定当前步骤的状态。当不配置此属性时，会使用 `Steps` 的 `current` 来自动指定状态 | String | `wait` `process` `finish` `error` | - |

```
<script>
  export default {
    data() {
      return {
        current: 0,
        steps: [{
          title: 'First',
          content: 'First-content'
        }, {
          title: 'Second',
          content: 'Second-content'
        }, {
          title: 'Last',
          content: 'Last-content'
        }]
      }
    },

    methods: {
      prev () {
        if (this.current-- <= 0)
          this.current = 0
      },
      next () {
        if (this.current++ >= 2)
          this.current = 2
      }
    }
  }
</script>
```