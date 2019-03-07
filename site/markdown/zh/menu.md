---
imports:
  import {Menu,Switch,Radio} from '@src'
---

# Menu 导航菜单

---

导航菜单一般分为顶部导航和侧边导航，是为页面提供导航功能的菜单列表

## 顶部导航

顶部导航需要设置 `mode="horizontal"`

:::demo

```jsx
<Menu mode="horizontal" activeName={this.state.activeName99} >
  <Menu.Item name="1">
    <i className="icon icon-home" />导航菜单一
  </Menu.Item>
  <Menu.Item name="2" disabled>
    <i className="icon icon-layers" />导航菜单二
  </Menu.Item>
  <Menu.Sub name="3"
    title={
      <span>
        <i className="icon icon-life-buoy" />导航菜单三 - 子菜单
      </span>
    }
  >
    <Menu.Group title="分组一">
      <Menu.Item name="3-1">子菜单一</Menu.Item>
      <Menu.Item name="3-2" disabled>
        子菜单二
      </Menu.Item>
    </Menu.Group>
    <Menu.Group title="分组二">
      <Menu.Item name="3-3">子菜单三</Menu.Item>
      <Menu.Item name="3-4">子菜单四</Menu.Item>
    </Menu.Group>
  </Menu.Sub>
  <Menu.Item name="4">
    <i className="icon icon-settings" />导航菜单四
  </Menu.Item>
</Menu>
```

:::

## 顶部导航（多级菜单）

可以在 `Menu.Sub` 中嵌套 `Menu.Sub` 组合成多级菜单

:::demo

```jsx
<Menu mode="horizontal" activeName={this.state.activeName1} onSelect={(name)=>{
  console.log(this.state)
  this.setState({
    activeName1: name
  })
}}>
  <Menu.Item name="1">
    <i className="icon icon-home" />导航菜单一
  </Menu.Item>
  <Menu.Item name="2">
    <i className="icon icon-layers" />导航菜单二
  </Menu.Item>
  <Menu.Sub name="3"
    title={
      <span>
        <i className="icon icon-life-buoy" />导航菜单三
      </span>
    }
  >
    <Menu.Item name="3-1">
      <i className="icon icon-settings" />导航菜单四
    </Menu.Item>
    <Menu.Item name="3-2">
      <i className="icon icon-settings" />导航菜单五
    </Menu.Item>
    <Menu.Sub
      title={
        <span>
          <i className="icon icon-life-buoy" />导航菜单六
        </span>
      }
    >
      <Menu.Item name="3-3-1">
        <i className="icon icon-settings" />导航菜单七
      </Menu.Item>
      <Menu.Item name="3-3-2">
        <i className="icon icon-settings" />导航菜单八
      </Menu.Item>
    </Menu.Sub>
  </Menu.Sub>
  <Menu.Item name="4">
    <i className="icon icon-settings" />导航菜单四
  </Menu.Item>
</Menu>
```

:::

## 侧边垂直导航

顶部导航需要设置 `mode="vertical"`

:::demo

```jsx
<Menu mode="vertical" activeName={this.state.activeName2} onSelect={(val)=>{
  this.setState({
    activeName2: val
  })
}}>
  <Menu.Item name="1">
    <i className="icon icon-home" />导航菜单一
  </Menu.Item>
  <Menu.Item name="2" disabled>
    <i className="icon icon-layers" />导航菜单二
  </Menu.Item>
  <Menu.Sub name="3"
    title={
      <span>
        <i className="icon icon-life-buoy" />导航菜单三 - 子菜单
      </span>
    }
  >
    <Menu.Group title="分组一">
      <Menu.Item name="3-1">子菜单一</Menu.Item>
      <Menu.Item name="3-2" disabled>
        子菜单二
      </Menu.Item>
    </Menu.Group>
    <Menu.Group title="分组二">
      <Menu.Item name="3-3">子菜单三</Menu.Item>
      <Menu.Item name="3-4">子菜单四</Menu.Item>
    </Menu.Group>
  </Menu.Sub>
  <Menu.Item name="4">
    <i className="icon icon-settings" />导航菜单四
  </Menu.Item>
</Menu>
```

:::

## 侧边垂直导航（多级菜单）

:::demo

```jsx
<Menu mode="vertical" activeName={this.state.activeName3 } onSelect={(name)=>{
  console.log('name' + name);
  this.setState({
  activeName3: name
})}}>
  <Menu.Item name="1">
    <i className="icon icon-home" />导航菜单一
  </Menu.Item>
  <Menu.Item name="2">
    <i className="icon icon-layers" />导航菜单二
  </Menu.Item>
  <Menu.Sub name="3"
    title={
      <span>
        <i className="icon icon-life-buoy" />导航菜单三 - 子菜单
      </span>
    }
  >
    <Menu.Group title="分组一">
      <Menu.Item name="3-1">子菜单一</Menu.Item>
      <Menu.Item name="3-2">子菜单二</Menu.Item>
    </Menu.Group>
    <Menu.Group title="分组二">
      <Menu.Item name="3-3">子菜单三</Menu.Item>
      <Menu.Item name="3-4">子菜单四</Menu.Item>
    </Menu.Group>
  </Menu.Sub>
  <Menu.Sub name="4"
    title={
      <span>
        <i className="icon icon-life-buoy" />导航菜单四
      </span>
    }
  >
    <Menu.Item name="4-1">
      <i className="icon icon-settings" />导航菜单五
    </Menu.Item>
    <Menu.Item name="4-2">
      <i className="icon icon-settings" />导航菜单六
    </Menu.Item>
    <Menu.Sub
      title={
        <span>
          <i className="icon icon-life-buoy" />导航菜单七
        </span>
      }
    >
      <Menu.Item name="4-3-1">
        <i className="icon icon-settings" />导航菜单八
      </Menu.Item>
      <Menu.Item name="4-3-2">
        <i className="icon icon-settings" />导航菜单九
      </Menu.Item>
    </Menu.Sub>
  </Menu.Sub>
</Menu>
```

:::

## 侧边内嵌导航

导航菜单默认 `mode="inline"`

:::demo

```jsx
<Menu activeName={this.state.activeName4} onSelect={(name)=>{
  this.setState({
    activeName4: name
  })
}}>
  <Menu.Item name="1">
    <i className="icon icon-home" />导航菜单一
  </Menu.Item>
  <Menu.Item name="2" disabled>
    <i className="icon icon-layers" />导航菜单二
  </Menu.Item>
  <Menu.Sub name="3"
    title={
      <span>
        <i className="icon icon-life-buoy" />导航菜单三 - 子菜单
      </span>
    }
  >
    <Menu.Group title="分组一">
      <Menu.Item name="3-1">子菜单一</Menu.Item>
      <Menu.Item name="3-2">子菜单二</Menu.Item>
    </Menu.Group>
    <Menu.Group title="分组二">
      <Menu.Item name="3-3">子菜单三</Menu.Item>
      <Menu.Item name="3-4" disabled>
        子菜单四
      </Menu.Item>
    </Menu.Group>
  </Menu.Sub>
  <Menu.Item name="4">
    <i className="icon icon-settings" />导航菜单四
  </Menu.Item>
  <Menu.Sub name="5"
    title={
      <span>
        <i className="icon icon-life-buoy" />导航菜单三 - 子菜单
      </span>
    }
  >
    <Menu.Item name="5-1">子菜单一</Menu.Item>
    <Menu.Item name="5-2">子菜单二</Menu.Item>
  </Menu.Sub>
</Menu>
```

:::

## 每次只展开一个子菜单

设置属性 `inlineCollapsed`，可开启 `手风琴模式`，即每次只能有一个子菜单被打开。同时 `AtSubmenu` 组件可使用参数 `opened` 配置子菜单默认展开

:::demo

```jsx
<Menu activeName={this.state.activeName5} onSelect={(name)=>{
  this.setState({
    activeName5: name
  })
}} inlineCollapsed>
  <Menu.Sub name="1"
    opened
    title={
      <span>
        <i className="icon icon-life-buoy" />导航菜单一
      </span>
    }
  >
    <Menu.Group title="分组一">
      <Menu.Item name="1-1">子菜单一</Menu.Item>
      <Menu.Item name="1-2">子菜单二</Menu.Item>
    </Menu.Group>
    <Menu.Group title="分组二">
      <Menu.Item name="1-3">子菜单三</Menu.Item>
      <Menu.Item name="1-4">子菜单四</Menu.Item>
    </Menu.Group>
  </Menu.Sub>
  <Menu.Sub name="2"
    title={
      <span>
        <i className="icon icon-life-buoy" />导航菜单二
      </span>
    }
  >
    <Menu.Item name="2-1">子菜单一</Menu.Item>
    <Menu.Item name="2-2">子菜单二</Menu.Item>
    <Menu.Item name="2-3">子菜单三</Menu.Item>
    <Menu.Item name="2-4">子菜单四</Menu.Item>
  </Menu.Sub>
  <Menu.Sub name="3"
    title={
      <span>
        <i className="icon icon-life-buoy" />导航菜单三
      </span>
    }
  >
    <Menu.Item name="3-1">子菜单一</Menu.Item>
    <Menu.Item name="3-2">子菜单二</Menu.Item>
    <Menu.Item name="3-3">子菜单三</Menu.Item>
    <Menu.Item name="3-4">子菜单四</Menu.Item>
  </Menu.Sub>
  <Menu.Sub name="4"
    title={
      <span>
        <i className="icon icon-life-buoy" />导航菜单四
      </span>
    }
  >
    <Menu.Item name="4-1">子菜单一</Menu.Item>
    <Menu.Item name="4-2">子菜单二</Menu.Item>
  </Menu.Sub>
</Menu>
```

:::

## 主题

内置两个主题：`light` 和 `dark`。默认使用 `light` 主题

:::demo

```jsx
<div className="row" style={{marginBottom: '24px'}}>
  <Switch value={true} onChange={(val)=>{this.setState({
    theme: val.target.innerText.toLowerCase()
  })}}>
    <span slot="checkedText">Dark</span>
    <span slot="unCheckedText">Light</span>
  </Switch>
  <Radio.Group value={this.state.mode || 'inline'} onRadioGroupChange={(val)=>{this.setState({
    mode: val
  })}} style={{marginLeft: '40px'}}>
    <Radio label="inline">Inline</Radio>
    <Radio label="horizontal">Horizontal</Radio>
    <Radio label="vertical">Vertical</Radio>
  </Radio.Group>
</div>
<Menu theme={this.state.theme || 'dark'} mode={this.state.mode || 'inline'} activeName="0" >
  <Menu.Item name="0" disabled><i className="icon icon-box"></i>子菜单</Menu.Item>
  <Menu.Sub title={<span>
  <i className="icon icon-home"></i>导航菜单一
  </span>}>
    <Menu.Group title="分组一">
      <Menu.Item name="1-1">子菜单一</Menu.Item>
      <Menu.Item name="1-2">子菜单二</Menu.Item>
    </Menu.Group>
    <Menu.Group title="分组二">
      <Menu.Item name="1-3">子菜单三</Menu.Item>
      <Menu.Item name="1-4">子菜单四</Menu.Item>
    </Menu.Group>
  </Menu.Sub>
  <Menu.Sub title={
    <span><i className="icon icon-life-buoy"></i>导航菜单二</span>
  }>
    <Menu.Item name="2-1">子菜单一</Menu.Item>
    <Menu.Item name="2-2">子菜单二</Menu.Item>
    <Menu.Item name="2-3" disabled>子菜单三</Menu.Item>
    <Menu.Item name="2-4">子菜单四</Menu.Item>
  </Menu.Sub>
  <Menu.Sub title={<span><i className="icon icon-command"></i>导航菜单三</span>}>
    <Menu.Item name="3-1">子菜单一</Menu.Item>
    <Menu.Item name="3-2">子菜单二</Menu.Item>
    <Menu.Item name="3-3">子菜单三</Menu.Item>
    <Menu.Item name="3-4">子菜单四</Menu.Item>
  </Menu.Sub>
  <Menu.Sub disabled title={
    <span><i className="icon icon-inbox"></i>导航菜单四</span>
  }>
    <Menu.Item name="4-1">子菜单一</Menu.Item>
    <Menu.Item name="4-2">子菜单二</Menu.Item>
  </Menu.Sub>
</Menu>
```

:::


## Menu 参数

| 参数            | 说明                                                   | 类型           | 可选值                             | 默认值   |
| --------------- | ------------------------------------------------------ | -------------- | ---------------------------------- | -------- |
| mode            | 导航菜单的模式                                         | String         | `inline`, `horizontal`, `vertical` | `inline` |
| theme           | 导航菜单的主题                                         | String         | `light`, `dark`                    | `light`  |
| activeName      | 选中的菜单项名称                                       | String, Number | -                                  | -        |
| inlineCollapsed | 是否允许每次只展开一个菜单                             | Boolean        | -                                  | false    |
| width           | 导航菜单的宽度，仅在 `vertical` 和 `inline` 模式下有效 | String         | -                                  | `240px`  |

## Menu 事件

| 事件名称  | 说明           | 返回参数       |
| --------- | -------------- | -------------- |
| onSelect | 切换菜单时触发 | 选中的菜单的值 |

## MenuGroup 参数

| 参数  | 说明           | 类型   | 可选值 | 默认值 |
| ----- | -------------- | ------ | ------ | ------ |
| title | 分组菜单的组名 | String | -      | -      |

## Submenu 参数

| 参数     | 说明           | 类型    | 可选值 | 默认值 |
| -------- | -------------- | ------- | ------ | ------ |
| disabled | 是否可用       | Boolean | -      | false  |
| opened   | 是否展开菜单项 | Boolean | -      | false  |
| name   | 组件标识 | Boolean | -      | -  |

## MenuItem 参数

| 参数     | 说明                                              | 类型            | 可选值 | 默认值 |
| -------- | ------------------------------------------------- | --------------- | ------ | ------ |
| name     | 菜单项的名称                                      | String / Number | -      | -      |
| disabled | 是否可用                                          | Boolean         | -      | false  |
