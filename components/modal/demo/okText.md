---
order: 3
title:
  zh-CN: 修改确认按钮文字内容
  en-US: basic
---

## zh-CN
修改确认按钮文字内容

## en-US

update confirm button content

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
        <Modal visible={this.state.visible} onOk={this.handleOK} onCancel={this.handleCancel} title="自定义标题" width={800} okText="同意">
          <div>修改确认按钮文字内容模态框</div>
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
