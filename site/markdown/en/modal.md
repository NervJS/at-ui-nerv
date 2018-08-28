---
imports:
    import {Modal,Button,Message} from '@src';
---
# Modal

----

Use `Modal` when you need to ask the user to process transactions, and do not want to jump the page.

You can also use the default lite modal box when you need to popup a concise confirmation box. `AT-UI-Nerv` adds the global object `$Modal` to `Vue.prototype`. You can use the `$Modal` instance directly.

## Modal Methods

Usage methods below:
- `Modal.alert(config)`
- `Modal.confirm(config)`
- `Modal.prompt(config)`
- `Modal.info(config)`
- `Modal.success(config)`
- `Modal.warning(config)`
- `Modal.error(config)`

## Alert

The Alert dialog will interrupt the user until user knows the information and closes it. It is a relatively interactive operation. (similar to `window.alert`)

You can capture operational feedback in `Promise`, or you can pass the `callback` parameter.

:::demo
```jsx
<p class="demo-desc">Modal.alert()</p>
<Button onClick={()=>{
Modal.alert({
      title: 'Here is Title',
      content: 'Here is Content',
      callback: function (action) {
        // this.$Message(action)
      }
    })

}}>Alert</Button>

```
:::

## Confirm

Confirm the user whether to continue the operation. (similar to `window.confirm`)

:::demo
```jsx
<p class="demo-desc">Modal.confirm()</p>
<Button onClick={
  ()=>{
    Modal.confirm({
      title: 'Tips',
      content: 'This operation needs to be very careful. Are you sure you want to do this?',

    })

  }
}>Confirm</Button>
```
:::

## Prompt

Pop up the input dialog to remind user to enter appropriate content. (similar to `window.prompt`)

:::demo
```jsx
<p class="demo-desc">Modal.prompt( title: 'Tips', content: 'Please input your email:' )</p>
<Button onClick={()=>{
 Modal.prompt({
          title: 'Tips',
          content: (
            <div>
              <p>'Please input your email:'</p>
              <input onChange={(e)=>{

                this.setState({
                  value: e.target.value
                })
              }}/>
            </div>
            )
        }).then(() => {
          Message.info({message:`Click 'Confirm' Button, input value is ${this.state.value}`,duration:1000})
        })
        .catch((e) => {
          Message.info({message:'Click \'Cancel\' Button',duration:1000})
        })
}}>Prompt</Button>
```
:::

## Message Type

In addition to the `window` dialog above, `AT-UI-Nerv` also provides four message types of Modal that are used to display important information. These message modal only allows click the OK button to close.

:::demo
```jsx
<p class="demo-desc">Modal.success()</p>
<Button onClick={
  ()=>{
    Modal.success({
            content: 'Here is the message of Success'
          })
  }
}>Success</Button>
<Button onClick={()=>{
 Modal.error({
            content: 'Here is the message of Error'
          })
}}>Error</Button>
<Button onClick={
  ()=>{
Modal.warning({
            content: 'Here is the message of Warning'
          })
  }
}>Warning</Button>
<Button onClick={

  ()=>{
Modal.info({
            content: 'Here is the message of Info'
          })
  }
}>Info</Button>
```
:::

## Component Mode

As mentioned earlier, you use the `Modal` methods. If you want to customize the Modal, you can use a component-based approach.

:::demo
```jsx
<Button onClick={()=>{
    this.setState({
      modal1: true
    },()=>{
      console.log(this.state)
    })
  }
}>Show Customize Modal</Button>
<Modal value={this.state.modal1}
title="Here is title"
onConfirm={()=>{
  this.setState({
    modal1: false
  })
 alert('Confirm')
}} onCancel={()=>{
   this.setState({
    modal1: false
  })
 alert('Cancel')
}}>
<Modal.body>
  <p>Here is the content!</p>
  <p>Here is the content!</p>
</Modal.body>
</Modal>
```
:::

## Customize Style

Customize the header and footer of `Modal` by `slot` property.

:::demo
```jsx
<Button onClick={()=>{
    this.setState({
      modal2:true
    })
  }
}>Customize header and footer</Button>
<Button onClick={()=>{this.setState({
modal3:true
})}}>Without Header</Button>
<Modal value={this.state.modal2} title={'Here is Title'} onCancel={()=>{
  this.setState({
    modal2: false
  })
}} >
  <Modal.body style="text-align:center;">
    <p>Can you see the contents here?</p>
  </Modal.body>
  <Modal.footer>
    <Button style="width:100%;" type="error" onClick={()=>{
      this.setState({
        modal2: false
      })
    }}>Here is Button</Button>
  </Modal.footer>
</ Modal>
<Modal
value={this.state.modal3}
onConfirm={
  () =>{
    this.setState({
      modal3: false
    })
  }
}
onCancel={()=>{
  this.setState({
    modal3: false
  })
}}
>
<Modal.body>
  <p>Here is Content!</p>
</Modal.body>
<Modal.footer>
</Modal.footer>
</Modal>
```
:::

## Disable Closable

- set property `showClose` to `false` can disable the close button and `ESC` key;
- set property `maskClosable` to `false` can disable the close event of mask;

:::demo
```jsx
<Button onClick={()=>{
  this.setState({
        modal4:true
  })
}}>Disabled Close Button and ESC</Button>
<Button onClick={()=>{
  this.setState({
        modal5:true
  })
}}>Disabled Mask Close</Button>
<Modal
value={this.state.modal4}
showClose={false}
onConfirm={()=>{
 this.setState({
    modal4: false
  })
}}
onCancel={()=>{
  this.setState({
    modal4: false
  })
}}
>
<Modal.body>
  <p>Here is content!(Disabled Close Button)</p>
</Modal.body>
<Modal.footer>
</Modal.footer>
</Modal>
<Modal
value={this.state.modal5}
onConfirm={
  ()=>{
   this.setState({
    modal5: false
    })
  }
}
onCancel={()=>{
  this.setState({
    modal5: false
  })
}}
maskClosable={false}
>
<Modal.body>
  <p>Here is content!(Disabled Mask Close)</p>
</Modal.body>
<Modal.footer>
</Modal.footer>
</Modal>
```
:::

## Customize Position

To customize the style of Modal, add `styles` property.

:::demo
```jsx
<Button
  onClick={() => {
    this.setState({
      modal6: true
    })
  }}>
  Only change the position
</Button>
<Modal
value={this.state.modal6}
onCancel={()=>{
  this.setState({
    modal5: false
  })
}}
modalStyle={
  {top: '20px'}
}
>
<Modal.body>
  <p>Here is Content!</p>
</Modal.body>
<Modal.footer>
</Modal.footer>
</Modal>
```
:::

## Modal Props

| Property      | Description          | Type      | Accepted Values                           | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| value | whether to show Modal, use `v-model` to enable a two-way binding | Boolean | - | false |
| title | title of modal | String | - | - |
| content | content of modal | String | - | - |
| cancelText | content of cancel button | String | - | Cancel |
| okText | content of ok button | String | - | Confirm |
| maskClosable | enable the mask to close the modal | Boolean | - | true |
| showHead | whether to show Head | Boolean | - | true |
| showClose | whether to show Close Button | Boolean | - | true |
| showFooter | whether to show Footer | Boolean | - | true |
| showInput | whether to show Input | Boolean | - | false |
| width | the width of Modal | Number / String | - | `520` |
| closeOnPressEsc | enable the `ESC` key to close Modal | Boolean | - | true |
| styles | customize styles of Modal | Object | - | - |

## Modal Events

| Event Name | Description          | Return Value  |
|---------- |-------------- |---------- |
| onCancel | Emitted when cancel button clicked | - |
| onConfirm | Emitted when confirm button clicked | - |

## Modal Children

| Name     | Description          |
|-------- |------------------- |
| footer | customize the footer of modal |
| body  | customize the main content of modal |

