---
imports:
    import {Collapse,Message} from '@src';
---

# Collapse

----

## Basic

You can expand multiple items.

:::demo
```jsx
<Collapse value={[0, 1]}>
	{[
		{
			title: 'title1',
			content: 'content1'
		},
		{
			title: 'title2',
			content: 'content2'
		},
		{
			title: 'title3',
			content: 'content3',
			disabled: true
		}
	].map((item, index) => {
		return (
			<Collapse.Item key={index} title={item.title} disabled={item.disabled}>
				<div>{item.content}</div>
			</Collapse.Item>
		)
	})}
</Collapse>
```
:::

## Accordion

In accordion mode, only one item can be expanded at once.

:::demo
```jsx
<Collapse accordion onChange={(e)=>{
  Message.info({
  message: `toggle Item ${e[0]||null}`,
  duration: 1000
})}} value="0">
	{[
		{
			title: 'title1',
			content: 'content1'
		},
		{
			title: 'title2',
			content: 'content2'
		},
		{
			title: 'title3',
			content: 'content3',
			disabled: true
		}
	].map((item, index) => {
		return (
			<Collapse.Item key={index}  title={item.title}>
				<div>{item.content}</div>
			</Collapse.Item>
		)
	})}
</Collapse>
```
:::

## Item nesting

Collapse is nested inside the Collapse.

:::demo
```jsx
<Collapse onChange="changeHandle" value="0">
	{[
		{
			title: 'title1',
			content: 'content1'
		},
		{
			title: 'title2',
			content: 'content2'
		},
		{
			title: 'title3',
			content: 'content3',
			disabled: true
		}
	].map((item, index) => {
		return (
			<Collapse.Item key= {index} title={item.title}>
				<div>
					{index !== 0 ? item.content : ''}
					<Collapse accordion >
						<Collapse.Item title="嵌套面板">
							<div>嵌套面板的content</div>
						</Collapse.Item>
					</Collapse>
				</div>
			</Collapse.Item>
		)
	})}
</Collapse>
```
:::

## Custom title

Besides using the title attribute, you can customize item title with named slots, which makes adding custom content, e.g. icons, possible.

:::demo
```jsx
<Collapse accordion value="value">
	<Collapse.Item name="collapse1">
		<div slot="title">
			title one <i class="icon icon-info" />
		</div>
		<div>content one</div>
	</Collapse.Item>
	<Collapse.Item name="collapse2">
		<div slot="title">
			title one <i class="icon icon-box" />
		</div>
		<div>content one</div>
	</Collapse.Item>
	<Collapse.Item>
		<div slot="title">
			title one <i class="icon icon-calendar" />
		</div>
		<div>content one</div>
	</Collapse.Item>
</Collapse>
```
:::

## Simple Mode

Set `simple` property to use a simple collapse.

:::demo
```jsx
<Collapse simple accordion value="0">
	{[
		{
			title: 'title1',
			content: 'content1'
		},
		{
			title: 'title2',
			content: 'content2'
		},
		{
			title: 'title3',
			content: 'content3',
			disabled: true
		}
	].map((item, index) => {
		return (
			<Collapse.Item
				key= {index}
				title={item.title}
			>
				<div>{item.content}</div>
			</Collapse.Item>
		)
	})}
</Collapse>
```
:::

## Collapse Props

| Property  | Description   | Type      | Accepted Values         | Default |
|---------- |-------------- |---------- |-----------------------  |-------- |
| accordion | whether to open the accordion mode (ie, expand at most one item) | Boolean | - | false |
| value | the value of the currently activated item's `name` | Array / String / Number | - | - |
| simple | whether to use simple mode | Boolean | - | false |

## Collapse Events

| Event Name| Description   | Return Value  |
|---------- |-------------- |-------------- |
| onChange | emit when item is switched | Return the key of the spread item(s) in an array |

## CollapseItem Props

| Property  | Description   | Type      | Accepted Values                  | Default |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| title | title of the item (you can customize item title with named slots) | String | - | - |
| name | the name of current item, corresponds with `value` of Collapse. Index value will be used if not filled | String / Object | - | - |
| disabled | users cannot change opening status of a disabled item | Boolean | - | false |

## CollapseItem slot

| Name      | Description |
|----------|-------- |
| title | title of the item |
| - | content of the item |
