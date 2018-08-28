
# Grid

----

## Brief Introduction

Grid design is divided the page into equal width according to certain rules, and the list the possibilities of various combinations so that the layout can be rendered quickly. Generally, the use of `12 Grid` system is commonly. Some are `8 Grid` system. But with the growth of device screen resolution, the traditional `12 Grid` system doesn't suit to some scenarios. So we use the `24 Grid` system. That is to divide the page area into 24 evenly columns.

The grid system need to maintain consistent margins and the width of gap, so we use `8dp` grid system, namely the grid interval for all components in the system are alignment of `8dp`. All the size, the distance should be integer times of `8dp`. Since `8dp` can be too wide for text typesetting, text typesetting uses the `4dp` benchmark.

> Reference resources of 8dp Grid system: [The 8-Point Grid](https://spec.fm/specifics/8-pt-grid)

## Flex Layout

The grid system use `Flexbox` implementation to support the `Flex` layout, allowing the child elements to be aligned horizontally in parent node.

## Screen Breakpoint

Refer to [Bootstrap](http://getbootstrap.com/css/#grid-media-queries) and [Semantic UI](https://semantic-ui.com/elements/container.html), `AT-UI` selected the `Breakpoint` as follows:

| Breakpoint | Device |
| :--: | :--: |
| 480px | Mobile |
| 768px | Tablet |
| 992px | Desktop |
| 1200px | Wide Desktop |

## Basic Grid

Create a basic grid layout using a single `row` and multiple `col` combinations.

:::demo
```jsx
<div>
  {(n => {
    const result = []
    for (let i = 0; i < n; i++) {
      result.push(
        <div className="row at-row no-gutter">
          <div className={`col-md-${i}`}>
            <div className="at-box-row bg-c-brand-dark" />
          </div>
          <div className={`col-md-${24 - i}`}>
            <div className="at-box-row bg-c-brand-light" />
          </div>
        </div>
      )
    }
    return result
  })(12)}
</div>
```
:::

## Grid Gutter

Add gaps between `col` by default. Set property `className="no-gutter"` to remove the gap.

:::demo
```jsx
<div>
  {(n => {
    const result = []
    for (let i = 0; i < n; i++) {
      result.push(
        <div className="row at-row no-gutter">
          <div className={`col-md-${i}`}>
            <div className="at-box-row bg-c-brand-dark" />
          </div>
          <div className={`col-md-${24 - i}`}>
            <div className="at-box-row bg-c-brand-light" />
          </div>
        </div>
      )
    }
    return result
  })(12)}
</div>
```
:::

## Column Offset

To make some offset between column, add classname `col-md-offset-3` and so on.

:::demo
```jsx
<div>
  {(n => {
    const result = []
    for (let i = 0; i < n; i++) {
      result.push(
        <div className="row at-row">
          <div className="col-md-2">
            <div className="at-box-row bg-c-brand-dark" />
          </div>
          <div className={`col-md-2 col-md-offset-${i}`}>
            <div className="at-box-row bg-c-brand-dark" />
          </div>
        </div>
      )
    }
    return result
  })(6)}
</div>
```
:::

## Flex

The grid system of `AT-UI` use `Flexbox` implementation to support `Flex`. If you want to set `Flex` layout for some elements, use `className="flex"`. Child elements defines its arrangement in the parent element by adding different class `flex-start`，`flex-center`，`flex-end`，`flex-top`，`flex-middle`，`flex-around`，`flex-between`.

:::demo
```jsx
<p className="demo-desc">flex-start</p>
<div className="row at-row no-gutter">
  <div className="col-md-4"><div className="at-box-row bg-c-brand-dark"></div></div>
  <div className="col-md-4"><div className="at-box-row bg-c-brand-light"></div></div>
  <div className="col-md-4"><div className="at-box-row bg-c-brand-dark"></div></div>
  <div className="col-md-4"><div className="at-box-row bg-c-brand-light"></div></div>
</div>
<p className="demo-desc">flex-center</p>
<div className="row at-row no-gutter flex-center">
  <div className="col-md-4"><div className="at-box-row bg-c-brand-dark"></div></div>
  <div className="col-md-4"><div className="at-box-row bg-c-brand-light"></div></div>
  <div className="col-md-4"><div className="at-box-row bg-c-brand-dark"></div></div>
  <div className="col-md-4"><div className="at-box-row bg-c-brand-light"></div></div>
</div>
<p className="demo-desc">flex-end</p>
<div className="row at-row no-gutter flex-end">
  <div className="col-md-4"><div className="at-box-row bg-c-brand-dark"></div></div>
  <div className="col-md-4"><div className="at-box-row bg-c-brand-light"></div></div>
  <div className="col-md-4"><div className="at-box-row bg-c-brand-dark"></div></div>
  <div className="col-md-4"><div className="at-box-row bg-c-brand-light"></div></div>
</div>
<p className="demo-desc">flex-around</p>
<div className="row at-row no-gutter flex-around">
  <div className="col-md-4"><div className="at-box-row bg-c-brand-dark"></div></div>
  <div className="col-md-4"><div className="at-box-row bg-c-brand-light"></div></div>
  <div className="col-md-4"><div className="at-box-row bg-c-brand-dark"></div></div>
  <div className="col-md-4"><div className="at-box-row bg-c-brand-light"></div></div>
</div>
<p className="demo-desc">flex-between</p>
<div className="row at-row no-gutter flex-between">
  <div className="col-md-4"><div className="at-box-row bg-c-brand-dark"></div></div>
  <div className="col-md-4"><div className="at-box-row bg-c-brand-light"></div></div>
  <div className="col-md-4"><div className="at-box-row bg-c-brand-dark"></div></div>
  <div className="col-md-4"><div className="at-box-row bg-c-brand-light"></div></div>
</div>
```
:::

## Flex Alignment

support three types of alignment: `flex-top`，`flex-middle`，`flex-bottom`

:::demo
```jsx
<p className="demo-desc">flex-top</p>
<div className="row at-row flex-center">
  <div className="col-md-4"><div className="at-box-row bg-c-brand-dark"></div></div>
  <div className="col-md-4"><div className="at-box-row bg-c-brand-light" style="height: 100px"></div></div>
  <div className="col-md-4"><div className="at-box-row bg-c-brand-dark" style="height: 70px"></div></div>
  <div className="col-md-4"><div className="at-box-row bg-c-brand-light" style="height: 120px"></div></div>
</div>
<p className="demo-desc">flex-middle</p>
<div className="row at-row flex-center flex-middle">
  <div className="col-md-4"><div className="at-box-row bg-c-brand-dark"></div></div>
  <div className="col-md-4"><div className="at-box-row bg-c-brand-light" style="height: 100px"></div></div>
  <div className="col-md-4"><div className="at-box-row bg-c-brand-dark" style="height: 70px"></div></div>
  <div className="col-md-4"><div className="at-box-row bg-c-brand-light" style="height: 120px"></div></div>
</div>
<p className="demo-desc">flex-bottom</p>
<div className="row at-row flex-center flex-bottom">
  <div className="col-md-4"><div className="at-box-row bg-c-brand-dark"></div></div>
  <div className="col-md-4"><div className="at-box-row bg-c-brand-light" style="height: 100px"></div></div>
  <div className="col-md-4"><div className="at-box-row bg-c-brand-dark" style="height: 70px"></div></div>
  <div className="col-md-4"><div className="at-box-row bg-c-brand-light" style="height: 120px"></div></div>
</div>
```
:::

## Classname Description

| classname | description |
| :------- | :--- |
| .container | Grid container，children align center in parent node |
| .container-fluid | The container has a gap of `24px` between the left and right sides |
| .no-gutter | set the gap of `8px` by default, set property `className="no-gutter"` to remove the gap. |
| .row | container that wraps `col` |
| .row.reverse | reverse the order of child elements |
| .flex | use `flexbox` |

