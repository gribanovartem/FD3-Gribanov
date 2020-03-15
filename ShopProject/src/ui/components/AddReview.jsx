import React from 'react'
import '../styles/AddReview.css'
import { connect } from 'react-redux'
import PropTypes from "prop-types"
import * as firebase from "firebase/app"
import { set_reviews, set_mode_0, } from '../../redux/reviewsAC'
import 'firebase/storage' 

class AddReview extends React.Component {
  constructor(props) {
    super(props)
    this.inputName = React.createRef()
    this.inputCity = React.createRef()
    this.inputReview = React.createRef()
  }

    closeModal=() => {
      this.props.dispatch(set_mode_0())
    }

    submitReview=() => {
      const name = this.inputName.current.value
      const city = this.inputCity.current.value
      const review = this.inputReview.current.value
      const newReview = {
        "name": name,
        "city": city,
        "review": review,
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
      
      firebase.initializeApp(config)
      const newReviews = [newReview,...this.props.reviews.reviews]
      const storage = firebase.storage()
      console.log(storage)
      var storageRef = storage.ref()
      var reviewsRef = storageRef.child('reviews.json')
      const blob = new Blob([JSON.stringify(newReviews, null, 2)], { type : 'application/json' })
      reviewsRef.put(blob).then(() => {
        this.props.dispatch(set_reviews(newReviews))
        this.props.dispatch(set_mode_0())
      })
    }

    render() {
      return (
        <div className={this.props.reviews.mode===0?"modal":"modal addReview"} id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">Добавить отзыв</h5>
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
                    <label htmlFor="City">Город</label>
                    <input className="form-control" type="text" id="City" ref={this.inputCity} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">Ваш отзыв</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" ref={this.inputReview} />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={this.closeModal}>Отмена</button>
                <button type="button" className="btn btn-primary" onClick={this.submitReview}>Отправить отзыв</button>
              </div>
            </div>
          </div>
        </div>
         
      )
    }
}
const mapStateToProps = function (state) {
  return {
    reviews: state.reviews,
  }
}
AddReview.propTypes = {
  reviews: PropTypes.shape({
    reviews: PropTypes.array,
    mode: PropTypes.number.isRequired,
  }),
  mode: PropTypes.func,
  dispatch: PropTypes.func.isRequired,
}
AddReview.defaultProps = {
  reviews: PropTypes.shape({
    reviews: PropTypes.number,
  }),
  mode: PropTypes.func,
}
export default connect(mapStateToProps)(AddReview)