---
imports:
    import {Pagination} from '@src';
---
# Pagination

----

A long list can be divided into several pages by Pagination, and only one page will be loaded at a time.

## Basic

Less than 8 pages.

:::demo
```jsx
<Pagination total="60" />
```
:::

## More Pages

More than 8 pages.

:::demo
```jsx
<Pagination total="100" />
```
:::

## Show Total Number

To display the amount of data, add `showTotal` property to the Pagination.

:::demo
```jsx
<Pagination total="80" showTotal />
```
:::

## Quick Jumper

To display the quick-jump button, add `showQuickJump` property to the Pagination.

:::demo
```jsx
<Pagination total="100" showQuickJump></Pagination>
```
:::

## Items in Each Page

You can set items amount shown in each page.

:::demo
```jsx
<Pagination total="100" showSizer onPageSizeChange={(event,pageSize)=>{console.log('pageSize',pageSize)}}/>
```
:::

## Full Feature

Full Feature Pagination.

:::demo
```jsx
<Pagination total="100" showTotal showSizer showQuickJump />
```
:::

## Mini Pagination

To use mini size pagination, set `size` property to `small`.

:::demo
```jsx
<Pagination size="small" total="100" showTotal showSizer showQuickjump />
```
:::

## Simple Mode

Set `simple` property to use a simple pagination.

:::demo
```jsx
<Pagination total="100" simple />
<Pagination total="100" size="small" simple />
```
:::

## Pagination Props

| Property      | Description          | Type      | Accepted Values                           | Default  |
|---------- |-------------- |---------- |-----------------------------  |-------- |
| current | current page number | Number | - | 1 |
| total | total number of data | Number | - | 0 |
| pageSize | amount shown in each page | Number | - | 10 |
| pageSizeOpts | The configuration of switching the amount of data shown in each page | Array | - | [10, 20, 30, 40] |
| showTotal | to display the total number and range | Boolean | - | false |
| showSizer | determine whether `pageSize` can be changed | Boolean | - | false |
| showQuickjump | determine whether you can jump to a page directly | Boolean | - | false |
| size | specify the size of Pagination | String | `small` | - |
| simple | determine whether to use simple mode | Boolean | - | false |

## Pagination Events

| Event Name      | Description          | Return Value  |
|---------- |-------------- |---------- |
| pageChange | Emitted when the page was changed | page number |
| pagesizeChange | Emitted when the page sizer was changed | page size |

