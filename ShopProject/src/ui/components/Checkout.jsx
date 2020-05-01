import React from 'react'
import '../styles/CallRequest.css'
import {connect} from "react-redux";
import 'firebase/storage'
import PropTypes from "prop-types";
import {clear_basket, modal_hide} from "../../redux/basketAC";
import { Modal, Form, Input, Button } from 'antd';
import {orderPush} from "../../functions/orderPush";


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

  constructor(props) {
    super(props);
    this.state = {
      whatShow: 'modal',
      newOrderNum: 123,
    }
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
  closeModal = () => {
    this.props.dispatch(modal_hide())
  }
  onFinish = values => {
    let newOrder = {...values,
      order: this.props.basket.basket,
    }

    orderPush('orderList.json', newOrder)
      .then((newOrderNum)=> {
        this.setState({newOrderNum: newOrderNum})
        return newOrderNum
      })
      .then(()=>{
        this.setState({whatShow: 'order'})
      })
    this.props.dispatch(clear_basket())
  };
  render() {
    return (
      <>
        {this.props.correct&&this.state.whatShow==='modal'&&this.modalChekout}
        {this.state.whatShow==='order'&&<Modal
                                            title="Ваш заказ успешно оформлен"
                                            visible={this.props.basket.modalShow}
                                            onOk={this.handleOk}
                                            onCancel={this.closeModal}
                                            footer={[]}
                                          >
                                            {`Номер заказа ${this.state.newOrderNum}`}
                                          </Modal>}
      </>
    )
  }
}
Checkout.propTypes = {
  callRequest: PropTypes.shape({
    callRequest: PropTypes.string,
  }),
  dispatch: PropTypes.func.isRequired,
  basket: PropTypes.shape({
    basket: PropTypes.array.isRequired,
    modalShow: PropTypes.bool,
  }),
  correct: PropTypes.bool.isRequired,
}
const mapStateToProps = function (state) {
  return {
    basket: state.basket,
  }
}
export default connect(mapStateToProps)(Checkout)
