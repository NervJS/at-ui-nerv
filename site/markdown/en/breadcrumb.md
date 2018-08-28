---
imports:
    import {Button,Breadcrumb} from '@src';
---

# Breadcrumb

----

Breadcrumb displays the current location within a hierarchy. It provides a navigation to upper nodes.

## Basic

Use `Breadcrumb` and `Breadcrumb.Item` to create breadcrumbs and add links with `href` property.

:::demo
```html
<Breadcrumb>
  <Breadcrumb.Item>Home</Breadcrumb.Item>
  <Breadcrumb.Item href="#/en/docs/introduction">Components</Breadcrumb.Item>
  <Breadcrumb.Item>Breadcrumb</Breadcrumb.Item>
</Breadcrumb>
```
:::

## Configuring the Separator

The separator can be customized by setting the `separator` property, which supports `HTML String`.

:::demo
```html
<Breadcrumb separator=">">
  <Breadcrumb.Item>Home</Breadcrumb.Item>
  <Breadcrumb.Item href="#/en/docs/introduction">Components</Breadcrumb.Item>
  <Breadcrumb.Item>Breadcrumb</Breadcrumb.Item>
</Breadcrumb>
```
:::


## Breadcrumb Props

| Property      | Description          | Type      | Accepted Values                           | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| separator | customize separator | String | - | `/` |

## BreadcrumbItem Props

| Property      | Description          | Type      | Accepted Values                           | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| href | link, same as the `href` property in `<a>` | String | - | - |
