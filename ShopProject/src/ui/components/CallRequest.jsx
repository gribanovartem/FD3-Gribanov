import React from 'react'
import '../styles/CallRequest.css'
import {connect} from "react-redux";
import {call_request_hide} from "../../redux/callRequestAC";
import 'firebase/storage'
import isoFetch from "isomorphic-fetch"
import * as firebase from "firebase/app";
import PropTypes from "prop-types";

class CallRequest extends React.Component {
  constructor(props) {
    super(props);
    this.inputName = React.createRef()
    this.inputPhone = React.createRef()
    this.state = {
      opacityClass: 'modal callRequest hide',
      requestDone: false
    }
    this.request = <div className="modal-content">
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
    this.requestDone = <div className="modal-content">
                        <h4>Ваша заявка принята, ожидайте звонка в течение 30 минут</h4>
                      </div>
  }
  componentDidMount() {
    setTimeout(()=> this.setState({opacityClass: 'modal callRequest show'}),100)
  }
  closeModal=() => {
    this.setState({opacityClass: 'modal callRequest hide'})
    setTimeout(()=> this.props.dispatch(call_request_hide()), 500)

  }
  callRequest = () => {
    isoFetch(
      "https://firebasestorage.googleapis.com/v0/b/shop-gribanov.appspot.com/o/callRequest.json?alt=media&token=7c0e70b8-b398-4d9c-9ca6-7c4a7ae19ea5",
      {
        method: "get",
        headers: {
          Accept: "application/json",
        },
      },
    )
      .then((response) => {
        // response - HTTP-ответ
        if (!response.ok) throw new Error(`fetch error ${response.status}`)
        // дальше по цепочке пойдёт отвергнутый промис
        else return response.json() // дальше по цепочке пойдёт промис с пришедшими по сети данными
      })
      .then((data) => {
        const callRequests = data;
        const name = this.inputName.current.value
        const phone = this.inputPhone.current.value
        const date = new Date().toLocaleString()
        const newCallRequest = {
          name: name,
          phone: phone,
          date: date,
        }
        const config = {
          apiKey: "AIzaSyD9NIAz1hpx5LdZTLMrhMga1l3rQkqYZHc",
          authDomain: "shop-gribanov.firebaseapp.com",
          databaseURL: "https://shop-gribanov.firebaseio.com",
          projectId: "shop-gribanov",
          storageBucket: "shop-gribanov.appspot.com",
          messagingSenderId: "161416264169",
          appId: "1:161416264169:web:a05312c302f35c59f1f378",
        }

        if (!firebase.apps.length) {
          firebase.initializeApp(config);
        }
        const newCallRequests = [...callRequests, newCallRequest]
        const storage = firebase.storage()
        const storageRef = storage.ref()
        const reviewsRef = storageRef.child('callRequest.json')
        const blob = new Blob([JSON.stringify(newCallRequests, null, 2)], { type : 'application/json' })
        reviewsRef.put(blob).then(() => {
          this.setState({requestDone: true})
          setTimeout(()=> {
            setTimeout(()=> this.props.dispatch(call_request_hide()), 2000)
          },1000)
        })
      })
      .catch((error) => {
        console.log(error)
      })

  }
  render() {
    return (
      <div className={this.state.opacityClass} id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          {this.state.requestDone?this.requestDone:this.request}
        </div>
      </div>
    )
  }
}
CallRequest.propTypes = {
  callRequest: PropTypes.shape({
    callRequest: PropTypes.string,
  }),
  dispatch: PropTypes.func.isRequired,
}
const mapStateToProps = function (state) {
  return {
    callRequest: state.callRequest,
  }
}
export default connect(mapStateToProps)(CallRequest)
