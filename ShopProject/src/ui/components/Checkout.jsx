import React from 'react'
import '../styles/CallRequest.css'
import {connect} from "react-redux";
import {call_request_hide} from "../../redux/callRequestAC";
import 'firebase/storage'
import isoFetch from "isomorphic-fetch"
import * as firebase from "firebase/app";
import PropTypes from "prop-types";
import {modal_hide} from "../../redux/basketAC";

class Checkout extends React.Component {
  closeModal = () => {
    this.props.dispatch(modal_hide())
  }
  constructor(props) {
    super(props);
    this.modalChekout = <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Заказать звонок</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.closeModal}>
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div className="modal-body">
                            <form className="form">
                              <div className="form-group">
                                <label htmlFor="UserName">Имя</label>
                                <input className="form-control" type="text" id="UserName" ref={this.inputName} />
                              </div>
                              <div className="form-group">
                                <label htmlFor="City">Телефон</label>
                                <input className="form-control" type="text" id="Phone" ref={this.inputPhone} />
                              </div>
                            </form>
                          </div>
                          <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={this.closeModal}>Отмена</button>
                            <button type="button" className="btn btn-primary" onClick={this.callRequest}>Заказать звонок</button>
                          </div>
                        </div>
    this.modalError = <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLongTitle">Корзина пуста</h5>
                          <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.closeModal}>
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                      </div>
  }
  render() {
    return (
      <div className='modal callRequest show' id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          {this.props.correct?this.modalChekout:this.modalError}
        </div>
      </div>
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
