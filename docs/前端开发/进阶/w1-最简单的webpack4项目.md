---
title: 'w1-最简单的webpack打包'
---

## 项目结构
先建个项目目录
```bash
mkdir webpack
cd webpack
yarn init -y          # 生成package.json
touch index.html     # 生成文件
touch ./src/index.js
```

项目结构应该如下
```bash
webpack
|- src
|   |- index.js
|- index.html
|- package.json

```

## 安装和配置
最基础的webpack配置需要安装 webpack wabpack-cli webpack-dev-server , 以及2个插件

webpack是核心，webpack-cli命令行工具，4.0之后需要安装。

webpack-dev-serve webpack的开发服务器，启动一个用于开发的服务器，实现预览、热加载、代理等功能

```bash
yarn add webpack wabpack-cli webpack-dev-server -D
```
在命令行执行
```bash
node_module/.bin/webpack
```
即可调用本地安装的webpack, 因为有默认的项目目录结构src/index.js 以及index.html 

所以直接完成打包，生成了一个dist目录。标志webpack安装完成。

安装插件

html-webpack-plugin 把打包后的js插入到html里以执行

clean-webpack-plugin 清除打包目录

配置webpack 新建config文件
```bash
touch webpack.config.js
```
配置相关内容
```js
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin') // 4.0需要这样引入否则报错
const webpack = require('webpack')

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "main.js",
         // path.resolve([from ...], to) 将to参数解析为绝对路径
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {    // webpack开启node服务
        contentBase: './dist',
        hot: true,
        open: true  // 自动在浏览器打开
    },
    plugins: [
        new CleanWebpackPlugin(),   // 每次打包都先删除前一次打包的文件
        new HtmlWebpackPlugin({     // 生成html模版
            filename: 'index.html',
            template: 'index.html'
        }),
        new webpack.HotModuleReplacementPlugin()    // 热更新，即不用刷新页面就可以更新数据
    ]
}
```

## 启动脚本
在package.json中增加启动命令
```json
"scripts": {
  "dev": "webpack-dev-server --config webpack.config.js",
  "build": "webpack --config webpack.config.js"
}
```