---
imports:
  import {Menu,Switch,Radio} from '@src'
---
# Menu

----

Menus typically have `Top Navigator` or `Side Navigator`, a menu list that provides navigation for the page.

## Top Navigator

Set `mode` to `horizontal`.

:::demo
```jsx
<Menu mode="horizontal" activeName={this.state.activeName99} >
  <Menu.Item name="1">
    <i className="icon icon-home" />Navigation One
  </Menu.Item>
  <Menu.Item name="2" disabled>
    <i className="icon icon-layers" />Navigation Two
  </Menu.Item>
  <Menu.Sub name="3"
    title={
      <span>
        <i className="icon icon-life-buoy" />Navigation Three - Submenu
      </span>
    }
  >
    <Menu.Group title="Group one">
      <Menu.Item name="3-1">Submenu One</Menu.Item>
      <Menu.Item name="3-2" disabled>
        Submenu Two
      </Menu.Item>
    </Menu.Group>
    <Menu.Group title="Group two">
      <Menu.Item name="3-3">Submenu Three</Menu.Item>
      <Menu.Item name="3-4">Submenu Four</Menu.Item>
    </Menu.Group>
  </Menu.Sub>
  <Menu.Item name="4">
    <i className="icon icon-settings" />Navigation Four
  </Menu.Item>
</Menu>
```
:::

## Top Navigator (Multi-Level)

Nested `Submenu` in `Submenu` can be combined into multilevel menus.

:::demo
```jsx
<Menu mode="horizontal" activeName={this.state.activeName1} onSelect={(name)=>{
  console.log(this.state)
  this.setState({
    activeName1: name
  })
}}>
  <Menu.Item name="1">
    <i className="icon icon-home" />Navigation one
  </Menu.Item>
  <Menu.Item name="2">
    <i className="icon icon-layers" />Navigation two
  </Menu.Item>
  <Menu.Sub name="3"
    title={
      <span>
        <i className="icon icon-life-buoy" />Navigation three
      </span>
    }
  >
    <Menu.Item name="3-1">
      <i className="icon icon-settings" />Navigation four
    </Menu.Item>
    <Menu.Item name="3-2">
      <i className="icon icon-settings" />Navigation five
    </Menu.Item>
    <Menu.Sub
      title={
        <span>
          <i className="icon icon-life-buoy" />Navigation six
        </span>
      }
    >
      <Menu.Item name="3-3-1">
        <i className="icon icon-settings" />Navigation seven
      </Menu.Item>
      <Menu.Item name="3-3-2">
        <i className="icon icon-settings" />Navigation eight
      </Menu.Item>
    </Menu.Sub>
  </Menu.Sub>
  <Menu.Item name="4">
    <i className="icon icon-settings" />Navigation four
  </Menu.Item>
</Menu>
```
:::

## Side Navigator

Set `mode` to `vertical`.

:::demo
```jsx
<Menu mode="vertical" activeName={this.state.activeName2} onSelect={(val)=>{
  this.setState({
    activeName2: val
  })
}}>
  <Menu.Item name="1">
    <i className="icon icon-home" />Navigation one
  </Menu.Item>
  <Menu.Item name="2" disabled>
    <i className="icon icon-layers" />Navigation two
  </Menu.Item>
  <Menu.Sub name="3"
    title={
      <span>
        <i className="icon icon-life-buoy" />Navigation three - Submenu 
      </span>
    }
  >
    <Menu.Group title="Groupone">
      <Menu.Item name="3-1">Submenu one</Menu.Item>
      <Menu.Item name="3-2" disabled>
        Submenu two
      </Menu.Item>
    </Menu.Group>
    <Menu.Group title="Grouptwo">
      <Menu.Item name="3-3">Submenu three</Menu.Item>
      <Menu.Item name="3-4">Submenu four</Menu.Item>
    </Menu.Group>
  </Menu.Sub>
  <Menu.Item name="4">
    <i className="icon icon-settings" />Navigation four
  </Menu.Item>
</Menu>
```
:::

## Side Navigator (Multi-Level)

:::demo
```jsx
<Menu mode="vertical" activeName={this.state.activeName3 } onSelect={(name)=>{
  console.log('name' + name);
  this.setState({
  activeName3: name
})}}>
  <Menu.Item name="1">
    <i className="icon icon-home" />Navigation one
  </Menu.Item>
  <Menu.Item name="2">
    <i className="icon icon-layers" />Navigation two
  </Menu.Item>
  <Menu.Sub name="3"
    title={
      <span>
        <i className="icon icon-life-buoy" />Navigation three  - submenu 
      </span>
    }
  >
    <Menu.Group title="group one">
      <Menu.Item name="3-1">submenu one</Menu.Item>
      <Menu.Item name="3-2">submenu two</Menu.Item>
    </Menu.Group>
    <Menu.Group title="group two">
      <Menu.Item name="3-3">submenu three </Menu.Item>
      <Menu.Item name="3-4">submenu four</Menu.Item>
    </Menu.Group>
  </Menu.Sub>
  <Menu.Sub name="4"
    title={
      <span>
        <i className="icon icon-life-buoy" />Navigation four
      </span>
    }
  >
    <Menu.Item name="4-1">
      <i className="icon icon-settings" />Navigation five
    </Menu.Item>
    <Menu.Item name="4-2">
      <i className="icon icon-settings" />Navigation six
    </Menu.Item>
    <Menu.Sub
      title={
        <span>
          <i className="icon icon-life-buoy" />Navigation seven
        </span>
      }
    >
      <Menu.Item name="4-3-1">
        <i className="icon icon-settings" />Navigation eight
      </Menu.Item>
      <Menu.Item name="4-3-2">
        <i className="icon icon-settings" />Navigation nine
      </Menu.Item>
    </Menu.Sub>
  </Menu.Sub>
</Menu>
```
:::

## Side Inline Navigator

Set `mode` to `inline`.

:::demo
```jsx
<Menu activeName={this.state.activeName4} onSelect={(name)=>{
  this.setState({
    activeName4: name
  })
}}>
  <Menu.Item name="1">
    <i className="icon icon-home" />Navigation one
  </Menu.Item>
  <Menu.Item name="2" disabled>
    <i className="icon icon-layers" />Navigation two
  </Menu.Item>
  <Menu.Sub name="3"
    title={
      <span>
        <i className="icon icon-life-buoy" />Navigation three - Submenu 
      </span>
    }
  >
    <Menu.Group title="group one">
      <Menu.Item name="3-1">Submenu one</Menu.Item>
      <Menu.Item name="3-2">Submenu two</Menu.Item>
    </Menu.Group>
    <Menu.Group title="group two">
      <Menu.Item name="3-3">Submenu three</Menu.Item>
      <Menu.Item name="3-4" disabled>
        Submenu four 
      </Menu.Item>
    </Menu.Group>
  </Menu.Sub>
  <Menu.Item name="4">
    <i className="icon icon-settings" />Navigation four 
  </Menu.Item>
  <Menu.Sub name="5"
    title={
      <span>
        <i className="icon icon-life-buoy" />Navigation three - Submenu 
      </span>
    }
  >
    <Menu.Item name="5-1">Submenu one</Menu.Item>
    <Menu.Item name="5-2">Submenu two</Menu.Item>
  </Menu.Sub>
</Menu>
```
:::

## Collapsed Inline Navigator

Set `inlineCollapsed` property to open collapsed mode. Which means only one submenu can be expanded at the same time.

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
        <i className="icon icon-life-buoy" />Navigation one
      </span>
    }
  >
    <Menu.Group title="group one">
      <Menu.Item name="1-1">submenu one</Menu.Item>
      <Menu.Item name="1-2">submenu two</Menu.Item>
    </Menu.Group>
    <Menu.Group title="group two">
      <Menu.Item name="1-3">submenu three</Menu.Item>
      <Menu.Item name="1-4">submenu four</Menu.Item>
    </Menu.Group>
  </Menu.Sub>
  <Menu.Sub name="2"
    title={
      <span>
        <i className="icon icon-life-buoy" />Navigation two
      </span>
    }
  >
    <Menu.Item name="2-1">submenu one</Menu.Item>
    <Menu.Item name="2-2">submenu two</Menu.Item>
    <Menu.Item name="2-3">submenu three</Menu.Item>
    <Menu.Item name="2-4">submenu four</Menu.Item>
  </Menu.Sub>
  <Menu.Sub name="3"
    title={
      <span>
        <i className="icon icon-life-buoy" />Navigation three
      </span>
    }
  >
    <Menu.Item name="3-1">submenu one</Menu.Item>
    <Menu.Item name="3-2">submenu two</Menu.Item>
    <Menu.Item name="3-3">submenu three</Menu.Item>
    <Menu.Item name="3-4">submenu four</Menu.Item>
  </Menu.Sub>
  <Menu.Sub name="4"
    title={
      <span>
        <i className="icon icon-life-buoy" />Navigation four
      </span>
    }
  >
    <Menu.Item name="4-1">submenu one</Menu.Item>
    <Menu.Item name="4-2">submenu two</Menu.Item>
  </Menu.Sub>
</Menu>
<Menu activeName="1-1" inlineCollapsed>
  <at-submenu opened>
    <template slot="title"><i className="icon icon-home"></i>Navigation One</template>
    <Menu.Item-group title="Group One">
      <Menu.Item name="1-1">Submenu One</Menu.Item>
      <Menu.Item name="1-2">Submenu Two</Menu.Item>
    </Menu.Item-group>
    <Menu.Item-group title="Group Two">
      <Menu.Item name="1-3">Submenu Three</Menu.Item>
      <Menu.Item name="1-4">Submenu Four</Menu.Item>
    </Menu.Item-group>
  </at-submenu>
  <at-submenu>
    <template slot="title"><i className="icon icon-life-buoy"></i>Navigation Two</template>
    <Menu.Item name="2-1">Submenu One</Menu.Item>
    <Menu.Item name="2-2">Submenu Two</Menu.Item>
    <Menu.Item name="2-3">Submenu Three</Menu.Item>
    <Menu.Item name="2-4">Submenu Four</Menu.Item>
  </at-submenu>
  <at-submenu>
    <template slot="title"><i className="icon icon-life-buoy"></i>Navigation Three</template>
    <Menu.Item name="3-1">Submenu One</Menu.Item>
    <Menu.Item name="3-2">Submenu Two</Menu.Item>
    <Menu.Item name="3-3">Submenu Three</Menu.Item>
    <Menu.Item name="3-4">Submenu Four</Menu.Item>
  </at-submenu>
  <at-submenu>
    <template slot="title"><i className="icon icon-life-buoy"></i>Navigation Four</template>
    <Menu.Item name="4-1">Submenu One</Menu.Item>
    <Menu.Item name="4-2">Submenu Two</Menu.Item>
  </at-submenu>
</Menu>
```
:::

## Themes

There are two built-in themes: `light` and `dark`. The default value is `light`.

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
  <Menu.Item name="0" disabled><i className="icon icon-box"></i>submenu </Menu.Item>
  <Menu.Sub title={<span>
  <i className="icon icon-home"></i>Navigation one 
  </span>}>
    <Menu.Group title="group one ">
      <Menu.Item name="1-1">submenu one </Menu.Item>
      <Menu.Item name="1-2">submenu  two</Menu.Item>
    </Menu.Group>
    <Menu.Group title="group  two">
      <Menu.Item name="1-3">submenu  three</Menu.Item>
      <Menu.Item name="1-4">submenu four</Menu.Item>
    </Menu.Group>
  </Menu.Sub>
  <Menu.Sub title={
    <span><i className="icon icon-life-buoy"></i>Navigation  two</span>
  }>
    <Menu.Item name="2-1">submenu one </Menu.Item>
    <Menu.Item name="2-2">submenu  two</Menu.Item>
    <Menu.Item name="2-3" disabled>submenu  three</Menu.Item>
    <Menu.Item name="2-4">submenu four</Menu.Item>
  </Menu.Sub>
  <Menu.Sub title={<span><i className="icon icon-command"></i>Navigation  three</span>}>
    <Menu.Item name="3-1">submenu one </Menu.Item>
    <Menu.Item name="3-2">submenu  two</Menu.Item>
    <Menu.Item name="3-3">submenu  three</Menu.Item>
    <Menu.Item name="3-4">submenu four</Menu.Item>
  </Menu.Sub>
  <Menu.Sub disabled title={
    <span><i className="icon icon-inbox"></i>Navigation four</span>
  }>
    <Menu.Item name="4-1">submenu one </Menu.Item>
    <Menu.Item name="4-2">submenu  two</Menu.Item>
  </Menu.Sub>
</Menu>

```
:::


## Menu Props

| Property      | Description          | Type      | Accepted Values                           | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| mode | the mode of Menu | String | `inline`, `horizontal`, `vertical` | `inline` |
| theme | the theme of Menu | String | `light`, `dark` | `light` |
| activeName | the name of actived item | String, Number | - | - |
| router | whether to use `vue-router` | Boolean | - | false |
| inlineCollapsed | enable collapsed mode | Boolean | - | false |
| width | the width of Menu, only valid in `vertical` and `inline` mode | String | - | `240px` |

## Menu Events

| Event Name | Description          | Return Value  |
|---------- |-------------- |---------- |
| onSelect | Emitted when the menu item was clicked | name |

## MenuGroup Props

| Property      | Description          | Type      | Accepted Values                           | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| title | the title of grouop | String | - | - |

## Submenu Props

| Property      | Description          | Type      | Accepted Values                           | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| disabled | whether the Submenu is disabled | Boolean | - | false |
| opened | whether to expand the submenu | Boolean | - | false |

## MenuItem Props

| Property      | Description          | Type      | Accepted Values                           | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| name | the name of Menu Item | String / Number | - | - |
| disabled | whether the MenuItem is disabled | Boolean | - | false |

