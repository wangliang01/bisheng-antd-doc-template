---
order: 1
title:
  zh-CN: 自定义footer
  en-US: basic
---

## zh-CN
自定义footer

## en-US

custom footer

````jsx
import { Button } from 'antd';
import Modal from '../modal.jsx'

class App extends React.Component {
  state = { visible: false }
  showModal = () => {
    this.setState({
      visible: true,
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
    const footer =<div className="innerContent-footer">
            <Button type='primary' onClick={this.handleCancel} className="btn btn-ok">关闭</Button>
          </div>
    return (
      <div>
        <Modal visible={this.state.visible} onOk={this.handleOK} onCancel={this.handleCancel} title="自定义标题" footer={footer}>
          <div>自定义footer模态框</div>
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
