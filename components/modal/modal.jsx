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
    content: PropTypes.any,
    footer: PropTypes.any,
    width: PropTypes.number,
    okText: PropTypes.string,
    cancelText: PropTypes.string
  }
  static defaultProps = {
    visible: false,
    title: '标题',
    onOk: () => {},
    onCancel: () => { },
    footer: null,
    width: 600,
    okText: '确认',
    cancelText: '取消'
  }
  render () {
    const {
      visible,
      title,
      content,
      onOk,
      onCancel,
      footer,
      width,
      okText,
      cancelText,
      children
    } = this.props,
    show = { zIndex: 2000, opacity: 1 },
    hide = { zIndex: -1, opacity: 0 },
    style = { width: width, minHeight: 300, maxHeight: 600 }
    return (
      <div className="modalContainer" style={ visible ? show : hide }>
        <div className="mask" onClick={onCancel}></div>
        <div className="innerContent" style={ style }>
          <div className="innerContent-header">
            <div className="innerContent-title">
              <span className="title">{title}</span>
              <Icon type="close-circle" className="icon-close" onClick={onCancel}></Icon>
            </div>
          </div>
          <div className="innerContent-center">
            {content ? content : children}
          </div>
          {footer ? footer : <div className="innerContent-footer">
            <Button type='cancel' onClick={onCancel} className="btn btn-cancel">{cancelText}</Button>
            <Button type='primary' onClick={onOk} className="btn btn-ok">{okText}</Button>
          </div>}
        </div>
      </div>
    )
  }}