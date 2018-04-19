---
imports:
    import {Button,Breadcrumb} from '@src';
---

# Breadcrumb 面包屑

----

显示当前页面在网站中的层级位置，点击可切换层级

## 基础用法

使用 `Breadcrumb` 和 `Breadcrumb.Item` 创建面包屑，使用 `href` 属性添加链接

:::demo
```html
<Breadcrumb>
  <Breadcrumb.Item>Home</Breadcrumb.Item>
  <Breadcrumb.Item href="#/zh/docs/introduction">Components</Breadcrumb.Item>
  <Breadcrumb.Item>Breadcrumb</Breadcrumb.Item>
</Breadcrumb>
```
:::

## 自定义分隔符

可以通过设置 `separator` 属性来自定义分隔符，支持 HTML 字符串

:::demo
```html
<Breadcrumb separator=">">
  <Breadcrumb.Item>Home</Breadcrumb.Item>
  <Breadcrumb.Item href="#/zh/docs/introduction">Components</Breadcrumb.Item>
  <Breadcrumb.Item>Breadcrumb</Breadcrumb.Item>
</Breadcrumb>
```
:::


## Breadcrumb 参数

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| separator | 分隔符，可使用 HTML 字符串 | String | - | `/` |

## BreadcrumbItem 参数

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| href | 链接跳转地址，同 `<a>` 中的 `href` 属性 | String | - | - |


