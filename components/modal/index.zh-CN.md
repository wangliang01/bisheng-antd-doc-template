---
category: 组件
title: Modal对话框
subtitle:
order: 0
---

模态对话框

## 何时使用

需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal 在当前页面正中打开一个浮层，承载相应的操作。


## API


| 参数       | 说明                                 | 类型        | 默认值 |
| ---------- | ------------------------------------ | ----------- | ------ |
| visible    | 对话框是否可见                       | boolean     | -      |
| title      | 标题                                 | string      | -      |
| onOk       | 点击确定回调型                       | function(e) | -      |
| onCancel   | 点击遮罩层或右上角叉或取消按钮的回调 | function(e) | -      |
| width      | 模态框宽度                           | number      | 600    |
| okText     | 确认按钮文字                         | string      | '确认' |
| cancelText | 取消按钮文字                         | string      | '取消' |
| footer     | 自定义footer                         | any         | null   |
| content    | 主体内容                             | any         | -      |


<style>
[id^="components-button-demo-"] .ant-btn {
  margin-right: 8px;
  margin-bottom: 12px;
}
[id^="components-button-demo-"] .ant-btn-group > .ant-btn {
  margin-right: 0;
}
</style>
