# myreactapp

## Project setup

```
yarn android
```

### Compiles and minifies for production

```
yarn allApk
```

### Customize configuration

See [Configuration Reference](https://reactnative.cn/docs/getting-started).

### 目录说明

```
├── __tests__             // 测试用例
├── .vscode               // VSCode相关统一配置
├── android               // android环境配置
├── ios                   // ios环境配置
├── patches               // 依赖库修改补丁包
├── src                   // 项目源码
│   ├── assets            // 字体等静态资源
│   ├── components        // 公用组件
│   │   ├── global        // 全局组件
│   │   ├── partial       // 部分页面需要的组件
│   ├── fetches           // 接口请求相关
│   │   ├── api           // 所有请求, 可以自行判断, 进行分组
|   |   |── tools         // 接口请求所需工具
│   │   ├── types         // 接口参数&返回数据等类型定义
│   ├── pages             // 所有Screen页面
│   ├── reduxState        // redux状态管理
│   ├── routers           // 导航器
│   ├── types             // 接口外类型定义
│   ├── utils             // 工具库
```

### 项目部分引用

> - [dayjs](https://day.js.org/zh-CN/)
> - [React Native Elements](https://reactnativeelements.com/docs/)


#### VSCode 部分插件

> - 代码格式
> - [stylelint.vscode-stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
> - [dbaeumer.vscode-eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
> - [esbenp.prettier-vscode](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
> - 命名单词排错
> - [streetsidesoftware.code-spell-checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker) 


#### 资料文献
> - [android多渠道包配置](https://blog.csdn.net/u012165769/article/details/113200830)
