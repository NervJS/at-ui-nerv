# 快速上手

----

## 标准开发

实际项目中，往往会使用 `webpack`，`rollup` 或者 `gulp` 的工作流，大多可以做到按需加载页面用到的组件，所以不推荐直接使用 `<script>` 标签全局引入的方式使用。

### 全局组件使用

可以在项目的入口文件中引入所有组件或所需组件

```js
import * as Nerv from 'nervjs'
import * as AtComponents from 'at-ui-nerv'
import 'at-ui-style'    // 引入组件样式

// import 'at-ui-style/src/index.scss'      // 或者引入未构建版本的 scss 样式

```


### 单个组件按需使用

可以局部注册所需的组件，适用于与其他框架组合使用的场景。首先我们需要借助 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) 插件以达到减小项目体积的目的。

```bash
npm install babel-plugin-component
```

然后修改 `.babelrc` 配置：

```json
{
  "presets": ["es2015", "stage-2"],
  "plugins": [["import", {
    "libraryName": "at",
    "libraryDirectory": "src/components"
  }]]
}
```

接下来引入你需要用的组件

```js
import { Input as AtInput } from 'at-ui-nerv'
```

以下是完整的组件列表和引入方式：

```js
import * as Nerv from 'nervjs'
import {
  Button,
  ButtonGroup,
  Tag,
  Radio,
  RadioGroup,
  RadioButton,
  Checkbox,
  CheckboxGroup,
  Input,
  InputNumber,
  Textarea,
  Badge,
  Switch,
  Slider,
  Tooltip,
  Popover,
  Alert,
  Progress,
  LoadingBar,
  Modal,
  Select,
  Option,
  OptionGroup,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Breadcrumb,
  BreadcrumbItem,
  Pagination,
  Menu,
  MenuItem,
  MenuItemGroup,
  Submenu,
  Table,
  Card,
  Collapse,
  CollapseItem,
  Steps,
  Step,
  Rate,
  Tabs,
  TabPane,
  Timeline,
  TimelineItem
} from 'at-ui-nerv'


```

## 自定义主题

`AT-UI` 的样式已抽离成单独的项目 [AT-UI-Style](https://github.com/at-ui/at-ui-style)，各个组件的样式变量都存放在 `at-ui-style/src/variables/default.scss` 文件中。用户可根据实际需要，自定义组件的样式
