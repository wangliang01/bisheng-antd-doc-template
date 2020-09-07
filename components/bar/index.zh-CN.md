---
category: 组件
title: 柱状图
subtitle:
order: 1
---

基础柱状图

## 何时使用

需要用来展示数据，或者做数据可视化的时候，使用

## API


| 参数    | 说明       | 类型   | 默认值 |
| ------- | ---------- | ------ | ------ |
| options | 柱状图参数 | object | -      |


## options具体参数
| 参数       | 说明             | 类型   | 默认值                                             |
| ---------- | ---------------- | ------ | -------------------------------------------------- |
| width      | canvas图布的宽度 | number | 400                                                |
| height     | canvas图布的高度 | number | 400                                                |
| chartZone  | 标识绘图区域     | array  | [40, 40, 400, 300]                                 |
| yAxisLabel | 标识Y轴坐标      | array  | ['0','100','200','300']                            |
| yMax       | Y轴最大值        | number | 300                                                |
| xAxisLabel | X轴坐标          | array  | ['Mon','Tue','Wed','Thu','Fri','Sat','Sun']        |
| data       | 柱状图数据       | array  | [10,50,200,220, 180, 190, 100]                     |
| barStyle   | 柱状图样式       | object | {width:30,//柱状图宽度color:'#ff0000'//柱状图颜色} |

<style>
[id^="components-bar-demo-"] .code-box-demo div {
}
[id^="components-bar-demo-"] .ant-select{
  float: left;
  margin-right: 50px;
}
[id^="components-bar-demo-"] .ant-select-selection--single{
  position: relative;
  width: 100%;
}
</style>



