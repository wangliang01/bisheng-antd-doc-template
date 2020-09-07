---
order: 0
title:
  zh-CN: 基本
  en-US: basic
---

## zh-CN

基础柱状图

## en-US

This is a basic bar chart

```jsx
import {Button, Select} from 'antd'
import Bar from '../bar.js'
const { Option } = Select

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: 'week',
      options: {
      width: 400,
      height: 400,
      chartZone:[40,40,400,300],//标识绘图区域
      yAxisLabel:['0','100','200','300'],//标示Y轴坐标
      yMax:300,//Y轴最大值
      xAxisLabel:['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],//X轴坐标
      data:[10,50,200,220, 180, 190, 100],//柱状图数据
      barStyle:{
          width:30,//柱状图宽度
          color:'#ff0000'//柱状图颜色
      }
    }
    }
  }
  handleChange = (value) => {
    const options = value === 'week' ?  {
      width: 400,
      height: 400,
      chartZone:[40,40,400,300],//标识绘图区域
      yAxisLabel:['0','100','200','300'],//标示Y轴坐标
      yMax:300,//Y轴最大值
      xAxisLabel:['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],//X轴坐标
      data:[10,50,200,220, 180, 190, 100],//柱状图数据
      barStyle:{
          width:30,//柱状图宽度
          color:'#ff0000'//柱状图颜色
      }
    } : {
      width: 400,
      height: 400,
      chartZone:[40,40,400,300],//标识绘图区域
      yAxisLabel:['0','100','200','300'],//标示Y轴坐标
      yMax:300,//Y轴最大值
      xAxisLabel:['苹果','香蕉','葡萄','梨','火龙果','水密桃','波萝'],//X轴坐标
      data:[10,50,90,100, 65, 80, 100],//柱状图数据
      barStyle:{
          width:30,//柱状图宽度
          color:'#00ff00'//柱状图颜色
      }
    }
    this.setState({
      value,
      options
    })
  }
  render() {
    return (
      <div>
        <Select value={this.state.value} style={{ width: 120 }} onChange={this.handleChange}>
          <Option value="week">星期</Option>
          <Option value="fruit">水果</Option>
        </Select>
        <Bar options={this.state.options}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, mountNode)
```