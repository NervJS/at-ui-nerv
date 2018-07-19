---
imports:
  import {Loadingbar,Button} from '@src'
---

# LoadingBar 加载进度条

---

全局创建了一个用于显示页面加载、异步请求的加载进度条。


## 基础用法

通过调用 `Loading` 提供的三种方法来控制全局的加载进度条 `start()`、`finish()`、`error()`

:::demo

```jsx
<Button
onClick={()=>{
  Loadingbar.start()
  }}>Start</Button>
<Button onClick={()=>{
  Loadingbar.finish()
  }}>Finish</Button>
<Button onClick={()=>{
  Loadingbar.error()
  }}>Error</Button>
<Button onClick={()=>{
   Loadingbar.update(50)
  }}>Update</Button>
<Button onClick={()=>{
  Loadingbar.finish()
  }}>Finish</Button>
```

:::

## LoadingBar 函数方法

| 函数名 | 说明                                | 参数                      |
| ------ | ----------------------------------- | ------------------------- |
| start  | 开始从 0 显示加载进度条，并自动加载 | -                         |
| finish | 完成进度条                          | -                         |
| error  | 显示错误类型的进度条                | -                         |
| update | 指定进度的百分比，更新进度条        | percent，指定进度的百分比 |

## LoadingBar 配置

提供 `LoadingBar` 的全局配置，使用方法如下：

```js
Loadingbar.config({ width: 4 })
```

:::demo

```jsx
<Button onClick={()=>{
 Loadingbar.config({ width: 4 })
}}>设置线宽为 4px</Button>
<Button onClick={()=>{
 Loadingbar.config({ width: 2 })
}}>设置线宽为 2px</Button>
<Button onClick={()=>{
  Loadingbar.finish()
  }}>测试</Button>
```

:::

## LoadingBar 参数

| 参数  | 说明         | 类型   | 可选值 | 默认值 |
| ----- | ------------ | ------ | ------ | ------ |
| width | 进度条的线宽 | Number | -      | 2      |

