## ac-multi-tabs

[![npm version](https://img.shields.io/npm/v/ac-multi-tabs.svg)](https://www.npmjs.com/package/ac-multi-tabs)
[![NPM downloads](http://img.shields.io/npm/dt/ac-multi-tabs.svg?style=flat)](https://npmjs.org/package/ac-multi-tabs)

在线演示：https://tinper-acs.github.io/ac-multi-tabs/

## 代码演示

### 1. 简介

多页签组件(基于应用平台)

### 2. 安装

```bash
npm install ac-multi-tabs --save
```

### 3. 使用
```javascript
import AcMultiTabs from 'ac-multi-tabs';
import 'ac-multi-tabs/dist/index.css';
```

```javascript
<AcMultiTabs menus={menus} />
```
更多用法可以参考[demo](./demo/demolist)文件夹中的示例


### 4. API
Parameter | Type | Default | Required | Description
--------- | ---- | ------|----------- | -----------------
menus | `Array` | | 是 | 显示的页签数组
