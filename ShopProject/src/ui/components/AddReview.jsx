import React from 'react';
import '../styles/AddReview.css';
import {connect} from 'react-redux';
import { set_reviews, set_mode_0, set_mode_1 } from '../../redux/reviewsAC';
import * as firebase from "firebase/app";
import 'firebase/storage'; 

class AddReview extends React.Component {
    constructor(props) {
        super(props);
        this.inputName = React.createRef();
        this.inputCity = React.createRef();
        this.inputReview = React.createRef();
    }
    closeModal=()=>{
        this.props.dispatch(set_mode_0());
    }
    submitReview=()=>{
        let name = this.inputName.current.value;
        let city = this.inputCity.current.value;
        let review = this.inputReview.current.value;
        let newReview = {
            "name": name,
            "city": city,
            "review": review
        }
        let newReviews = [newReview,...this.props.reviews.reviews ];
        const storage = firebase.storage();
		var storageRef = storage.ref();
        var reviewsRef = storageRef.child('reviews.json');
        const blob = new Blob([JSON.stringify(newReviews, null, 2)], {type : 'application/json'});
		reviewsRef.put(blob).then(()=> {
            this.props.dispatch(set_reviews(newReviews));
            this.props.dispatch(set_mode_0());
		});
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
                    <form className='form'>
                        <div className="form-group">
                            <label htmlFor="UserName">Имя</label>
                            <input className="form-control" type="text" id='UserName' ref={this.inputName}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="City">Город</label>
                            <input className="form-control" type="text" id='City' ref={this.inputCity}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea1">Ваш отзыв</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" ref={this.inputReview}/>
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
         
      );
    }
  }
const mapStateToProps = function (state) {
    return {
	  reviews: state.reviews,
    };
};
export default connect(mapStateToProps)(AddReview);