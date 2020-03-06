import React from 'react'
import '../styles/LeftContent.css'
import { connect } from 'react-redux'
import isoFetch from 'isomorphic-fetch'
import { NavLink } from 'react-router-dom'
import Filter from './Filter'
import Reviews from './Reviews'
import { set_reviews, set_mode_0, set_mode_1 } from '../../redux/reviewsAC'

class LeftContent extends React.Component {
  componentDidMount() {
    isoFetch("https://firebasestorage.googleapis.com/v0/b/shop-gribanov.appspot.com/o/reviews.json?alt=media&token=8547c87e-a1bd-4e3c-8b81-e24bd68224f5", {
				  method: 'get',
				  headers: {
        "Accept": "application/json",
				  },
    })
      .then( (response) => { // response - HTTP-ответ
        if (!response.ok) throw new Error(`fetch error ${response.status}`) // дальше по цепочке пойдёт отвергнутый промис
        else return response.json() // дальше по цепочке пойдёт промис с пришедшими по сети данными
      })
      .then( (data) => {
        this.fetchSuccess(data)
      }) 
      .catch( (error) => {
        console.log(error)
      })	
	  }

	  fetchSuccess=(reviews) => {
	    this.props.dispatch(set_reviews(reviews))
	  }
 
	  showModal=() => {
	    this.props.dispatch(set_mode_1())
	  }

	  render() {
	    return (
  <div className="col-3">
    {this.props.catalog.status===1?<Filter />:null}
    <h5 className="main-orange2">Отзывы о Магазине</h5>
    <Reviews mode={0} />
    <div className="main-more">
      <div className="main-more_button"><NavLink to="/reviews">Все отзывы</NavLink></div>
      <div className="main-more_add">
        <a onClick={this.showModal}>Добавить отзыв</a>
      </div>
    </div>
  </div>
	    )
	  }
}
const mapStateToProps = function (state) {
  return {
	  catalog: state.catalog,
	  filter: state.filter,
	  reviews: state.reviews,
  }
}
export default connect(mapStateToProps)(LeftContent)