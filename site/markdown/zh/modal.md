---
imports:
    import {Modal,Button} from '@src';
---

# Modal 模态框

---

模态对话框，当需要询问用户处理事务，又不希望跳转页面时，可以使用模态框 `Modal` 在当前页面打开一个浮层并承载相应的操作。

当需要弹出一个简洁的确认框时，也可以使用默认的精简版模态框。`AT-UI` 可以直接通过 `Modal` 对象操作实例方法

## Modal 实例方法

通过调用 `Modal` 的方法来使用：

* `Modal.alert(config)`
* `Modal.confirm(config)`
* `Modal.prompt(config)`
* `Modal.info(config)`
* `Modal.success(config)`
* `Modal.warning(config)`
* `Modal.error(config)`

## 消息提醒

弹出会中断用户的对话框，直到用户知晓该信息之后才可以关闭，属于交互比较重的操作。（类似于 `window.alert`）

可以用 `Promise` 的方式捕获操作反馈，也可以用传入 `callback` 参数的方式

:::demo

```jsx
<p class="demo-desc">Modal.alert()</p>
<Button onClick={()=>{
Modal.alert({
      title: '这里是标题名称',
      content: '这里是文本内容',
      callback: function (action) {
        // this.$Message(action)
      }
    })

}}>Alert</Button>
```

:::

## 确认消息

对用户操作的一个反馈，用于确定是否需要继续操作。（类似于 `window.confirm`）

:::demo

```jsx
<p class="demo-desc">Modal.confirm()</p>
<Button onClick={
  ()=>{
    Modal.confirm({
      title: '提示',
      content: '此操作需要非常谨慎，您确定要这么做吗？'
    })

  }
}>Confirm</Button>
```

:::

## 提交信息

弹出输入对话框，提醒用户输入相应内容。（类似于 `window.prompt`）

:::demo

```jsx
<p class="demo-desc">Modal.prompt( title: '提示', content: '请输入邮件地址：' )</p>
<Button onClick={()=>{
 Modal.prompt({
          title: '提示',
          content: (
            <div>
              <p>'请输入邮件地址：'</p>
              <input />
            </div>
            )
        }).then((data) => {
          this.$Message(`点击了「确认」按钮，输入框的值为 ${data.value}`)
        }).catch(() => {
          this.$Message('点击了「取消」按钮')
        })
}}>Prompt</Button>
```

:::

## 消息类的对话框

除了上述的类 `window` 对话框，`AT-UI` 还提供了四种消息类的对话框，主要用来展示一些重要信息。该类的对话框仅允许点击「确定」按钮关闭，不支持其他关闭方式

:::demo

```jsx
<p class="demo-desc">Modal.success()</p>
<Button onClick={
  ()=>{
    Modal.success({
            content: '这里是成功的消息'
          })
  }
}>成功</Button>
<Button onClick={()=>{
 Modal.error({
            content: '这里是错误的消息'
          })
}}>错误</Button>
<Button onClick={
  ()=>{
Modal.warning({
            content: '这里是警告的消息'
          })
  }
}>警告</Button>
<Button onClick={

  ()=>{
Modal.info({
            content: '这里是提示的消息'
          })
  }
}>消息</Button>
```

:::

## 组件化方式调用

前面提到的是通过 `Modal` 的方法来使用，如果要自定义对话框，可使用组件化的方式

:::demo

```jsx
<Button onClick={()=>{
    this.setState({
      modal1: true
    },()=>{
      console.log(this.state)
    })
  }
}>显示自定义模态框</Button>
<Modal value={this.state.modal1}
title="这里是标题"
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
  <p>这里是模态框的文本内容!</p>
  <p>这里是模态框的文本内容!</p>
</Modal.body>
</Modal>
```

:::

## 自定义样式

`Modal` 组件提供了自定义页头、页脚的 `slot`，可灵活的控制对话框的样式结构。通过与其他组件的交互，可实现复杂的功能需求。

:::demo

```jsx
<Button onClick={()=>{
    this.setState({
      modal2:true
    })
  }
}>自定义页头和页脚</Button>
<Button onClick={()=>{this.setState({
modal3:true
})}}>不带标题</Button>
<Modal value={this.state.modal2} title={'这是标题'} onCancel={()=>{
  this.setState({
    modal2: false
  })
}} >
  <Modal.body style="text-align:center;">
    <p>能看到这里的内容吗？</p>
  </Modal.body>
  <Modal.footer>
    <Button style="width:100%;" type="error" onClick={()=>{
      this.setState({
        modal2: false
      })
    }}>这里是按钮</Button>
  </Modal.footer>
</ Modal>
<Modal
value={this.state.modal3}
onCancel={()=>{
  this.setState({
    modal2: false
  })
}}
>
<Modal.body>
  <p>这里是模态框的文本内容!</p>
</Modal.body>
<Modal.footer>
</Modal.footer>
</Modal>
```

:::

## 禁用关闭

* 设置属性 `showClose` 为 `false` 可取消右上角的关闭按钮以及键盘的 `ESC` 键；
* 设置属性 `maskClosable` 为 `false` 可取消遮罩层的点击关闭事件；

:::demo

```jsx
<Button onClick={()=>{
  this.setState({
        modal4:true
  })
}}>禁用右上角关闭按钮（含 ESC）</Button>
<Button onClick={()=>{
  this.setState({
        modal5:true
  })
}}>取消遮罩层关闭</Button>
<Modal
value={this.state.modal4}
showClose={false}
onCancel={()=>{
  this.setState({
    modal4: false
  })
}}
>
<Modal.body>
  <p>这里是模态框的文本内容!</p>
</Modal.body>
<Modal.footer>
</Modal.footer>
</Modal>
<Modal
value={this.state.modal5}
onCancel={()=>{
  this.setState({
    modal5: false
  })
}}
maskClosable={false}
>
<Modal.body>
  <p>这里是模态框的文本内容!</p>
</Modal.body>
<Modal.footer>
</Modal.footer>
</Modal>
```

:::

## 自定义窗口位置

通过属性 `styles` 传入 `CSS Style Object`，可更改弹框的样式

:::demo

```jsx
<Button
  onClick={() => {
    this.setState({
      modal6: true
    })
  }}>
  仅改变距离顶部的位置
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
  <p>这里是模态框的文本内容!</p>
</Modal.body>
<Modal.footer>
</Modal.footer>
</Modal>
```

:::

## Modal 参数

| 参数            | 说明                          | 类型            | 可选值 | 默认值 |
| --------------- | ----------------------------- | --------------- | ------ | ------ |
| value           | 是否显示模态框                | Boolean         | -      | false  |
| title           | 模态框的标题                  | String , VNode  | -      | -      |
| content         | 模态框的内容                  | String          | -      | -      |
| cancelText      | 取消按钮的文本                | String          | -      | 取消   |
| okText          | 确定按钮的文本                | String          | -      | 确定   |
| maskClosable    | 点击遮罩层是否可以关闭模态框  | Boolean         | -      | true   |
| showHead        | 是否显示标题                  | Boolean         | -      | true   |
| showClose       | 是否显示关闭按钮              | Boolean         | -      | true   |
| showFooter      | 是否显示底部按钮              | Boolean         | -      | true   |
| showInput       | 是否显示输入框                | Boolean         | -      | false  |
| width           | 模态框的宽度                  | Number / String | -      | `520`  |
| closeOnPressEsc | 点击 `ESC` 是否可以关闭模态框 | Boolean         | -      | true   |
| styles          | 模态框的自定义样式            | Object          | -      | -      |

## Modal 事件

| 事件名称  | 说明               | 返回参数 |
| --------- | ------------------ | -------- |
| onCancel  | 点击取消的回调事件 | -        |
| onConfirm | 点击确定的回调事件 | -        |

## Modal Children

| 名称   | 说明                               |
| ------ | ---------------------------------- |
| footer | 自定义模态框的底部，即底部按钮部分 |
| body   | 自定义模态框的主体内容             |
