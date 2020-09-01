import React, { Component } from 'react'
import { Button, Icon } from 'antd'
import PropTypes from 'prop-types'
import './style'
export default class Modal extends Component {
  static propTypes = {
    visible: PropTypes.bool,
    title: PropTypes.string,
    onOk: PropTypes.func,
    onCancel: PropTypes.func,
    children: PropTypes.any
  }
  static defaultProps = {
    visible: false,
    title: '标题',
    onOk: () => {},
    onCancel: () => {}
  }
  render () {
    const {
       visible,
       title,
       children,
       onOk,
       onCancel
    } = this.props,
    show = { zIndex: 2000, opacity: 1 },
    hide = { zIndex: -1, opacity: 0 },
    contShow = { width: 600, minHeight: 300, maxHeight: 600 },
    contHide = { width: 0, height: 0 }
    return (
      <div className="modalContainer" style={ visible ? show : hide }>
        <div className="mask" onClick={onCancel}></div>
        <div className="innerContent" style={ visible ? contShow : contHide }>
          <div className="innerContent-header">
            <div className="innerContent-title">
              <span className="title">{title}</span>
              <Icon type="close-circle" className="icon-close" onClick={onCancel}></Icon>
            </div>
          </div>
          <div className="innerContent-center">
            {children}
          </div>
          <div className="innerContent-footer">
            <Button type='cancel' onClick={onCancel} className="btn btn-cancel">取消</Button>
            <Button type='primary' onClick={onOk} className="btn btn-ok">确定</Button>
          </div>
        </div>
      </div>
    )
  }}