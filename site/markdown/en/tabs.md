---
imports:
  import {Tabs,Button} from '@src';
---
# Tabs

----

## Basic

Tabs make it easy to switch between different views. Default activate first tab.

:::demo
```state
{
  activeIndex: 0
  activeIndex1:0,
  activeIndex2:0,
  activeIndex3:0,
  activeIndex4:0,
  activeIndex5:0,
  activeIndex6:0,
  activeIndex7:0,
  activeIndex8:0}
```
```html
<Tabs activeIndex={this.state.activeIndex} onChange={(index)=>{
  this.setState({
    activeIndex:index
  })
}}>
  <Tabs.Pane label="Tab1" name="name1">
    <p>Content of Tab Pane 1</p>
  </Tabs.Pane>
  <Tabs.Pane label="Tab2" name="name2">
    <p>Content of Tab Pane 2</p>
  </Tabs.Pane>
  <Tabs.Pane label="Tab3" name="name3">
    <p>Content of Tab Pane 3</p>
  </Tabs.Pane>
</Tabs>
```
:::


## Disabled

Disabled a tab.

:::demo
```html
<Tabs activeIndex={this.state.activeIndex1} onChange={(index)=>{
  this.setState({
    activeIndex1:index
  })
}}>
  <Tabs.Pane label="Tab1" name="name1">
    <p>Content of Tab Pane 1</p>
  </Tabs.Pane>
  <Tabs.Pane label="Tab2" name="name2">
    <p>Content of Tab Pane 2</p>
  </Tabs.Pane>
  <Tabs.Pane label="Tab3" name="name3" disabled='true'>
    <p>Content of Tab Pane 3</p>
  </Tabs.Pane>
</Tabs>
```
:::

## Icon

The Tab with Icon.

:::demo
```html
<Tabs activeIndex={this.state.activeIndex2} onChange={(index)=>{
  this.setState({
    activeIndex2:index
  })
}}>
  <Tabs.Pane label="Tab1" name="name1" icon="icon-github">
    <p>Content of Tab Pane 1</p>
  </Tabs.Pane>
  <Tabs.Pane label="Tab2" name="name2" icon="icon-twitter">
    <p>Content of Tab Pane 2</p>
  </Tabs.Pane>
  <Tabs.Pane label="Tab3" name="name3" icon="icon-pocket">
    <p>Content of Tab Pane 3</p>
  </Tabs.Pane>
</Tabs>
```
:::

## Extra content

You can add extra actions to the right of Tabs by adding the slot extra.

:::demo
```html
<Tabs activeIndex={this.state.activeIndex3} onChange={(index)=>{
  this.setState({
    activeIndex3:index
  })
}}>
  <Tabs.Pane label="Tab1" name="name1" icon="icon-github">
    <p>Content of Tab Pane 1</p>
  </Tabs.Pane>
  <Tabs.Pane label="Tab2" name="name2" icon="icon-twitter">
    <p>Content of Tab Pane 2</p>
  </Tabs.Pane>
  <Tabs.Pane label="Tab3" name="name3" icon="icon-pocket">
    <p>Content of Tab Pane 3</p>
  </Tabs.Pane>
  <div slot="extra">
    <Button size="small">Extra Content</Button>
  </div>
</Tabs>
```
:::

## Mini tab

Set the property `size` to `small` can be displayed as a mini-type.

:::demo
```html
<Tabs activeIndex={this.state.activeIndex4} size='small' onChange={(index)=>{
  this.setState({
    activeIndex4:index
  })
}}>
  <Tabs.Pane label="Tab1" name="name1">
    <p>Content of Tab Pane 1</p>
  </Tabs.Pane>
  <Tabs.Pane label="Tab2" name="name2">
    <p>Content of Tab Pane 2</p>
  </Tabs.Pane>
  <Tabs.Pane label="Tab3" name="name3">
    <p>Content of Tab Pane 3</p>
  </Tabs.Pane>
</Tabs>
```
:::

## Card type tab

Set the property `type` to `card` can display the card style.

:::demo
```html
<Tabs type='card' activeIndex={this.state.activeIndex5} onChange={(index)=>{
  this.setState({
    activeIndex5:index
  })
}}>
  <Tabs.Pane label="Tab1" name="name1">
    <p>Content of Tab Pane 1</p>
  </Tabs.Pane>
  <Tabs.Pane label="Tab2" name="name2">
    <p>Content of Tab Pane 2</p>
  </Tabs.Pane>
  <Tabs.Pane label="Tab3" name="name3">
    <p>Content of Tab Pane 3</p>
  </Tabs.Pane>
</Tabs>
```
:::

## Mini Card tab

Mini card tab.

:::demo
```html
<Tabs type='card' size='small' activeIndex={this.state.activeIndex6} onChange={(index)=>{
  this.setState({
    activeIndex6:index
  })
}}>
  <Tabs.Pane label="Tab1" name="name1">
    <p>Content of Tab Pane 1</p>
  </Tabs.Pane>
  <Tabs.Pane label="Tab2" name="name2">
    <p>Content of Tab Pane 2</p>
  </Tabs.Pane>
  <Tabs.Pane label="Tab3" name="name3">
    <p>Content of Tab Pane 3</p>
  </Tabs.Pane>
</Tabs>
```
:::

## Do not use animation

Animating can be disabled by setting the property `animated` to `false`.

:::demo
```html
<Tabs animated='false' activeIndex={this.state.activeIndex7} onChange={(index)=>{
  this.setState({
    activeIndex7:index
  })
}}>
  <Tabs.Pane label="Tab1" name="name1">
    <p>Content of Tab Pane 1</p>
  </Tabs.Pane>
  <Tabs.Pane label="Tab2" name="name2">
    <p>Content of Tab Pane 2</p>
  </Tabs.Pane>
  <Tabs.Pane label="Tab3" name="name3">
    <p>Content of Tab Pane 3</p>
  </Tabs.Pane>
</Tabs>
```
:::

## Add & close tab

Set the property `closable` to `false` can disable close. But you should delete `Tabs.Pane` manually by listen to `onTabRemove` event.

:::demo
```state
{
  activeIndex8:0,
  data: [{
          label: 'Tab1',
          name: 'tab1',
          content: 'tab1 content'
        }, {
          label: 'Tab2',
          name: 'tab2',
          content: 'tab2 content'
        }, {
          label: 'Tab3',
          name: 'tab3',
          content: 'tab3 content'
        }, {
          label: 'Tab4',
          name: 'tab4',
          content: 'tab4 content'
        }, {
          label: 'Tab5',
          name: 'tab5',
          content: 'tab5 content'
        }, {
          label: 'Tab6',
          name: 'tab6',
          content: 'tab6 content'
        }]
}
```
```html
<Tabs animation='false' activeIndex={this.state.activeIndex8} onChange={(index)=>{
  this.setState({
    activeIndex8:index
  })
}} closable onTabRemove={(index,event) =>{
    event.stopPropagation()
    let data= this.state.data.concat()
    data.splice(index,1)
    this.setState({
      data
    })
  }
}>
  {this.state.data.map((item)=>{
    return (<Tabs.Pane label={item.label} name={item.name}>
              <p>{item.content}</p>
            </Tabs.Pane>)
  })}
  <div slot='extra'>
    <Button onClick={()=>{
      let data= this.state.data.concat()
      let length = data.length
      data.push({
        label: `Tab${length+1}`,
          name: `Tab${length+1}`,
          content: `tab${length+1} content`
      })
      this.setState({
        data
      })
    }}>add</Button>
  </div>
</Tabs>
```
:::


## Tabs Props
| Property      | Description       | Type      | Accepted values             | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| value | name of the selected tab. Use v-model to enable a two-way binding | String | - | name of first tab |
| type | type of Tab | String | `line` `card` | `line` |
| size | size of Tab | String | `default` `small` | `default` |
| closable | whether the tab can be closed | Boolean | - | false |
| animated | whether to use animation when switching tabs | Boolean | - | true |

## Tabs Events

| Event Name   | Description     | 	Return Value  |
|---------- |-------------- |---------- |
| onChange | triggers when switching tab | the current tab `{index, name}` |
| onTabRemove | triggers when deleting tab | the deleted tab `{index, name}` |

## Tabs slot

| Name      | Description |
|----------|-------- |
| extra | the contents of the attachment on the right side of the tab |
| - | tab-pane components and extra content |

## TabPane Props

| Property     | Description      | Type    | Accepted values            | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| name | identifier corresponding to the activeName of Tabs, representing the alias of the tab-pane | String / Number | - | ordinal number of the tab-pane in the sequence, e.g. the first tab-pane is 1 |
| label | title of the tab | String | - | - |
| icon | icon of the tab | String | - | - |
| disabled | whether to disable the tab | Boolean | - | false |
| closable | whether the tab can be closed, the priority is higher than the Tabs `closable` | Boolean | - | true |

## Tab.Pane slot

| Name     | Description |
|----------|-------- |
| - | content of the tab |


