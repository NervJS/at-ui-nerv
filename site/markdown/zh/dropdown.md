---
imports:
    import {Dropdown,Button} from '@src';
---

# Dropdown 下拉菜单

---

展示折叠的下拉菜单

## 基础用法

基础的下拉菜单，使用方式是用 `Dropdown`，`Dropdown.Menu` 和 `Dropdown.Item` 的组合

:::demo

```jsx
<div style={{position: 'relative'}}>
<Dropdown>
  <span>下拉菜单 <i className="icon icon-chevron-down"></i></span>
  <Dropdown.Menu  >
    <Dropdown.Item>深圳</Dropdown.Item>
    <Dropdown.Item>广州</Dropdown.Item>
    <Dropdown.Item disabled>上海</Dropdown.Item>
    <Dropdown.Item divided>北京</Dropdown.Item>
    <Dropdown.Item>杭州</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
<Dropdown>
  <Button size="small">下拉菜单 <i className="icon icon-chevron-down"></i></Button>
  <Dropdown.Menu  >
    <Dropdown.Item>深圳</Dropdown.Item>
    <Dropdown.Item>广州</Dropdown.Item>
    <Dropdown.Item disabled>上海</Dropdown.Item>
    <Dropdown.Item divided>北京</Dropdown.Item>
    <Dropdown.Item>杭州</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
</div>
```

:::

## 激活的方式

下拉菜单默认使用 `hover` 的方式激活，可通过参数 `trigger` 更换激活的方式，支持 `click`，`hover`，`focus`

:::demo

```jsx
<Dropdown>
  <Button size="small">Hover 菜单 <i className="icon icon-chevron-down"/></Button>
  <Dropdown.Menu  >
    <Dropdown.Item name="shenzhen">深圳</Dropdown.Item>
    <Dropdown.Item name="guangzhou">广州</Dropdown.Item>
    <Dropdown.Item name="shanghai" disabled>上海</Dropdown.Item>
    <Dropdown.Item name="beijin" divided>北京</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
<Dropdown trigger="click">
  <Button size="small">Click 菜单 <i className="icon icon-chevron-down"/></Button>
  <Dropdown.Menu  >
    <Dropdown.Item name="shenzhen">深圳</Dropdown.Item>
    <Dropdown.Item name="guangzhou">广州</Dropdown.Item>
    <Dropdown.Item name="shanghai" disabled>上海</Dropdown.Item>
    <Dropdown.Item name="beijin" divided>北京</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
```

:::

## 菜单的对齐方式

设置属性 `placement` 更改下拉菜单的对齐方式

:::demo

```jsx
<Dropdown placement="bottom-right">
  <Button size="small">
    Hover 菜单 <i className="icon icon-chevron-down" />
  </Button>
  <Dropdown.Menu  >
    <Dropdown.Item name="shenzhen">深圳</Dropdown.Item>
    <Dropdown.Item name="guangzhou">广州</Dropdown.Item>
    <Dropdown.Item name="shanghai" disabled>
      上海
    </Dropdown.Item>
    <Dropdown.Item name="beijin" divided>
      北京
    </Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
```

:::

## 下拉菜单触发的事件

点击菜单选项触发事件 `dropdownChange`，返回 `AtDropdownItem` 的 `name` 值

:::demo

```jsx
<Dropdown
  dropdownChange={name => {
    console.log(name)
  }}>
  <Button size="small">
    Hover 菜单 <i className="icon icon-chevron-down" />
  </Button>
  <Dropdown.Menu  >
    <Dropdown.Item name="shenzhen">深圳</Dropdown.Item>
    <Dropdown.Item name="guangzhou">广州</Dropdown.Item>
    <Dropdown.Item name="shanghai" disabled>
      上海
    </Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
```

:::

## Dropdown 参数

| 参数      | 说明                   | 类型   | 可选值                                                                  | 默认值   |
| --------- | ---------------------- | ------ | ----------------------------------------------------------------------- | -------- |
| trigger   | 触发 `Dropdown` 的方式 | String | `click`, `hover`, `focus`                                               | `hover`  |
| placement | 下拉框的对齐方式       | String | `top`, `top-left`, `top-right`, `bottom`, `bottom-left`, `bottom-right` | `bottom` |

## Dropdown 事件

| 事件名称            | 说明                 | 返回值                 |
| ------------------- | -------------------- | ---------------------- |
| on-dropdown-command | 菜单项点击的时候触发 | 点击的菜单的 `name` 值 |

## DropdownItem 参数

| 参数     | 说明           | 类型    | 可选值 | 默认值 |
| -------- | -------------- | ------- | ------ | ------ |
| name     | 菜单的值       | String  | -      | -      |
| disabled | 是否禁用       | Boolean | -      | false  |
| divided  | 是否添加分割线 | Boolean | -      | false  |

