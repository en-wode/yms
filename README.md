# msg

> msg

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8090
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

# assets
elemindex.css  饿了么整体布局修改
index.css  基础公共class
theme.css  主题颜色修改  =>  方便后期修改主题

# components
common  整体布局的几个组件,
home {
  head => 头部,
  sidebar => 左侧,
  tabpane => 多窗口
},
conditionsearch 所有查询组件 // 待用,
page 所有页面,
popover 所有弹窗组件

# static
css
  ele-red elem 红色主题 => 可配合theme.css 修改整体主题颜色
