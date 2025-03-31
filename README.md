# H5 项目技术文档

## 项目概述
这是一个基于Vue 3的移动端H5项目，采用现代化的前端技术栈开发，适配各种移动设备。

## 技术栈

### 核心框架
- Vue 3 (Composition API)
- Vue Router 4
- Pinia (状态管理)

### UI组件库
- Vant 4 (移动端组件库)
- 支持暗黑模式切换

### 构建工具
- Vite (前端构建工具)
- PostCSS (CSS处理)
- Autoprefixer (自动添加浏览器前缀)

### 移动端适配
- amfe-flexible (rem适配方案)
- postcss-pxtorem (px转rem)

### 其他特性
- NProgress (页面加载进度条)
- 路由守卫(权限控制)
- 404页面处理
- 全局组件自动注册

## 项目结构
/h5/
├── src/
│   ├── assets/          # 静态资源
│   ├── components/      # 公共组件
│   ├── router/          # 路由配置
│   ├── stores/          # Pinia状态管理
│   ├── utils/           # 工具函数
│   ├── views/           # 页面组件
│   ├── App.vue          # 根组件
│   └── main.js          # 入口文件
├── postcss.config.js    # PostCSS配置
└── vite.config.js       # Vite配置

## 功能特性

### 路由系统
- 基于Vue Router 4的路由管理
- 路由懒加载
- 路由守卫实现权限控制
- 通配符路由处理404页面

### UI特性
- Vant组件库集成
- 响应式布局
- 暗黑模式支持
- 移动端适配方案

### 开发体验
- 快速的Vite热更新
- 自动化的全局组件注册
- 统一的请求封装
- 页面加载进度条

## 快速开始

### 安装依赖
```bash
npm install
```

### 开发模式
```bash
npm run dev
 ```

### 生产构建
```bash
npm run build
 ```

## 注意事项
1. 开发时请确保Node.js版本 >= 16.0.0
2. 移动端适配方案基于375px设计稿
3. 暗黑模式需要Vant 4.0+版本支持