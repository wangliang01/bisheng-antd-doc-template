---
order: 2
title:
  zh-CN: 自定义模态框宽度
  en-US: basic
---

## zh-CN
自定义模态框宽度

## en-US

custom define modal width

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
    return (
      <div>
        <Modal visible={this.state.visible} onOk={this.handleOK} onCancel={this.handleCancel} title="自定义标题" width={800}>
          <div>自定义模态框宽度</div>
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
