import React from 'react'
import '../styles/CallRequest.css'
import {connect} from "react-redux";
import {call_request_hide} from "../../redux/callRequestAC";
import 'firebase/storage'
import isoFetch from "isomorphic-fetch"
import * as firebase from "firebase/app";
import PropTypes from "prop-types";
import {clear_basket, modal_hide} from "../../redux/basketAC";
import { Modal, Form, Input, InputNumber, DatePicker, Button } from 'antd';



const layout = {
  labelCol: {
    span: 5,
  },
  wrapperCol: {
    span: 16,
  },
};
const validateMessages = {
  required: 'Это поле не может быть пустым!',
  types: {
    email: 'Введите корректный ${label} !',
    number: '${label} is not a validate number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};


class Checkout extends React.Component {
  closeModal = () => {
    this.props.dispatch(modal_hide())
  }
  onFinish = values => {
    let newOrder = {...values,
      order: this.props.basket.basket,
    }
    this.props.dispatch(clear_basket())
    this.props.dispatch(modal_hide())
    console.log(newOrder)
  };
  constructor(props) {
    super(props);
    this.modalChekout = <Modal
                              title="Оформление заказа"
                              visible={this.props.basket.modalShow}
                              onOk={this.handleOk}
                              onCancel={this.closeModal}
                              footer={[]}
                        >
                            <Form {...layout} name="nest-messages" onFinish={this.onFinish} validateMessages={validateMessages}>
                              <Form.Item
                                name={['user', 'name']}
                                label="Имя"
                                rules={[
                                  {
                                    required: true,
                                  },
                                ]}
                              >
                                <Input />
                              </Form.Item>
                              <Form.Item
                                name={['user', 'lastName']}
                                label="Фамилия"
                                rules={[
                                  {
                                    required: true,
                                  },
                                ]}
                              >
                                <Input />
                              </Form.Item>
                              <Form.Item
                                name={['user', 'email']}
                                label="Email"
                                rules={[
                                  {
                                    type: 'email',
                                    required: true,
                                  },
                                ]}
                              >
                                <Input />
                              </Form.Item>
                              <Form.Item
                                name={['user', 'phone']}
                                label="Телефон"
                                rules={[
                                  {
                                    type: 'string',
                                    required: true,
                                  },
                                ]}
                              >
                                <Input />
                              </Form.Item>
                              <Form.Item name={['user', 'comment']} label={`Комментарии`}>
                                <Input.TextArea />
                              </Form.Item>
                              <div className='modal-footer'>
                                <Button key="back" onClick={this.closeModal}>
                                  Отмена
                                </Button>,
                                  <Button type="primary" htmlType="submit">
                                    Оформить
                                  </Button>
                              </div>

                            </Form>
                        </Modal>
  }
  render() {
    return (
      <>
          {this.props.correct&&this.modalChekout}
      </>
    )
  }
}
Checkout.propTypes = {
  callRequest: PropTypes.shape({
    callRequest: PropTypes.string,
  }),
  dispatch: PropTypes.func.isRequired,
}
const mapStateToProps = function (state) {
  return {
    basket: state.basket,
  }
}
export default connect(mapStateToProps)(Checkout)
