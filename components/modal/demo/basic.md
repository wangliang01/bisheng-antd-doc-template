---
order: 0
title:
  zh-CN: 基本
  en-US: basic
---

## zh-CN
第一个对话框

## en-US

This is a first basic modal

````jsx
import { Button } from 'antd';
import Modal from '../modal.jsx'

class App extends React.Component {
  state = { visible: false }
  showModal = () => {
    this.setState({
      visible: true
    })
  }
  handleOK = () => {
    this.setState({
      visible: false
    })
  }
  handleCancel = () => {
    this.setState({
      visible: false
    })
  }
  render () {
    return (
      <div>
        <Modal visible={this.state.visible} onOk={this.handleOK} onCancel={this.handleCancel}>
          <div>这是一个模态框</div>
        </Modal>
        <Button type="primary" onClick={this.showModal}>打开Modal</Button>
      </div>
    )
  }
}

ReactDOM.render(
  <App />
, mountNode);
````
