# 安装

----

## 使用 npm 安装

推荐使用 `npm` 的方式进行开发，享受 `node` 生态圈和 `webpack` 工具链带来的便利。通过 `npm` 安装的模块包，我们可以轻松的使用 `import` 或者 `require` 的方式引用

```bash
npm install at-ui

npm install at-ui-style
```

## 浏览器标签引入

可以采用传统的 `<script>` 和 `<link>` 标签的方式引入资源，并且全局使用 `AT-UI`。

可以在 [jsDelivr](https://www.jsdelivr.com/package/npm/at-ui) 上找到最新版本的资源文件，然后在页面中直接引入

```html
<!-- 引入Vue -->
<script src="//cdn.jsdelivr.net/npm/vue/dist/vue.min.js"></script>
<!-- 引入样式 -->
<link rel="stylesheet" href="//cdn.jsdelivr.net/npm/at-ui-style/css/at.min.css">
<!-- 引入组件库 -->
<script src="//cdn.jsdelivr.net/npm/at-ui/dist/at.min.js"></script>
```

#### 示例：

通过浏览器资源标签引入的方式，我们可以迅速用 `AT-UI` 写出一个 DEMO 页面，可复制下列代码或者直接查看 [示例页面](https://jsbin.com/dezafos/edit?html,output)


