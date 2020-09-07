import React, { Component } from 'react';
import { v4 as uuid4} from 'uuid'
import PropTypes from 'prop-types'
import { isEqual } from 'lodash'

class Bar extends Component {
  static propTypes = {
    options: PropTypes.object
  }
  static defaultProps = {
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
  constructor(props) {
    super(props)
    this.id = uuid4()
    this.canvas = null // canvas DOM
    this.context = null // canvas 绘图上下文
  }
  componentDidMount () {
    this.canvas = document.getElementById(this.id)
    if (!this.canvas) {
      throw Error('获取canvas对象报错')
    }
    this.context = this.canvas.getContext('2d')
    this.drawBarChart(this.props.options)
  }
  componentDidUpdate (prevProps) {
    console.log("componentDidUpdate", prevProps);
    if (isEqual(prevProps.options, this.props.options)) return
    this.clearCanvas()
    this.drawBarChart(this.props.options)

  }
  /**
   * 清除画布内容
   */
  clearCanvas = () => {
    this.context.clearRect(0,0,this.canvas.width,this.canvas.height);
   }
  /**
   * 绘制柱状图
   */
  drawBarChart = (options) => {
    // TODO:绘制坐标轴
    this.drawAxis(options)
    // TODO: 绘制y轴坐标
    this.drawYLabels(options)
    // TODO: 绘制x轴坐标
    this.drawXLabels(options)
    // TODO: 绘制柱状图
    this.drawBarData(options)
  }
  /**
   * 绘制坐标轴
   */
  drawAxis = (options) => {
    const context = this.context
    let chartZone = options.chartZone
    context.strokeWidth = 4
    context.strokeStyle = '#353535'
    context.moveTo(chartZone[0], chartZone[1]) // 确定起始点
    context.lineTo(chartZone[0], chartZone[3]) // 绘制Y轴
    context.lineTo(chartZone[2], chartZone[3]) // 绘制X轴
    context.stroke()
  }
  /**
   * 绘制y轴坐标
   */
  drawYLabels = (options) => {
    let labels = options.yAxisLabel
    let yLength = (options.chartZone[3] - options.chartZone[1]) * 0.98
    let gap = yLength / (labels.length - 1)
    const context = this.context

    labels.forEach((label, index) => {
      // 绘制坐标文字
      let offset = context.measureText(label).width + 20
      context.strokeStyle = '#eaeaea'
      context.font = '16px'
      context.fillText(label, options.chartZone[0] - offset, options.chartZone[3] - index * gap)
      // 绘制小间隔
      context.strokeStyle = '#353535';
      context.moveTo(options.chartZone[0] - 10, options.chartZone[3] - index * gap);
      context.lineTo(options.chartZone[0], options.chartZone[3] - index * gap);
      context.stroke();
      //绘制辅助线
      context.beginPath();
      context.strokeStyle = '#eaeaea';
      context.strokeWidth = 2;
      context.moveTo(options.chartZone[0], options.chartZone[3] - index * gap);
      context.lineTo(options.chartZone[2], options.chartZone[3] - index * gap);
      context.stroke();
    })
  }
  /**
   *
   * @param {Object} options
   * @description 绘制x轴坐标
   */
  drawXLabels = (options) => {
    const context = this.context
    let labels = options.xAxisLabel
    let xLength = (options.chartZone[2] - options.chartZone[0]) * 0.96
    let gap = xLength / labels.length
    labels.forEach(function (label, index) {
      //绘制坐标文字
      let offset = context.measureText(label).width;
      context.strokeStyle = '#eaeaea';
      context.font = '18px';
      context.fillText(label, options.chartZone[0] + (index + 1) * gap - offset ,options.chartZone[3] + 20);
      //绘制小间隔
      context.beginPath();
      context.strokeStyle = '#353535';
      context.moveTo(options.chartZone[0] + (index + 1) * gap - offset / 2 ,options.chartZone[3]);
      context.lineTo(options.chartZone[0] + (index + 1) * gap - offset / 2,options.chartZone[3]+5);
      context.stroke();
      //存储偏移量
      options.offsetXLabel = offset / 2;
    });
  }
  /**
   * 绘制柱状图
   */
  drawBarData = (options) => {
    const context = this.context
    let data = options.data;
    let xLength = (options.chartZone[2] - options.chartZone[0])*0.96;
    let yLength = (options.chartZone[3] - options.chartZone[1])*0.98;
    let gap = xLength / options.xAxisLabel.length;

    //绘制矩形
    data.forEach(function (item, index) {
        context.fillStyle = options.barStyle.color || '#1abc9c'; //02BAD4
        let x0 = options.chartZone[0] + (index + 1) * gap - options.barStyle.width / 2 - options.offsetXLabel;
        let height = item / options.yMax * (options.chartZone[3] - options.chartZone[1])*0.98;
        let y0 =  options.chartZone[3] - height;
        let width = options.barStyle.width;
        context.fillRect(x0,y0,width,height);
    });
  }
  render () {
    const { width, height } = this.props.options
    return (
      <canvas id={this.id} width={width} height={height}></canvas>
    );
  }
}

export default Bar;