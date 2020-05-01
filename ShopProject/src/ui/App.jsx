import React from 'react'
import { hot } from 'react-hot-loader/root'
import PropTypes from "prop-types"
import PageHeader from 'ui/pages/PageHeader'
import PageFooter from 'ui/pages/PageFooter'
import PagesRouter from 'ui/pages/PagesRouter'
import { connect } from 'react-redux'
import AddReview from './components/AddReview'
import "./styles/MainContent.css"
import CallRequest from "./components/CallRequest";


class App extends React.Component {

  render() {
    return (
      <div className="mainDiv">
        <PageHeader />
        <PagesRouter />
        <div className={this.props.reviews.mode===1 || this.props.callRequest.callRequest==='show' || this.props.basket.modalShow==='show' ?"fadeModal  fadeShow":"fadeModal fadeClose"} />
        <AddReview />
        {this.props.callRequest.callRequest==='show'?<CallRequest/>:null}
        <PageFooter/>
      </div>
    )
  }
}
const mapStateToProps = function (state) {
  return {
    reviews: state.reviews,
    callRequest: state.callRequest,
    basket: state.basket,
  }
}
App.propTypes = {
  reviews: PropTypes.shape({
    mode: PropTypes.number.isRequired,
  }).isRequired,
  callRequest: PropTypes.shape({
    callRequest: PropTypes.string,
  }),
  basket: PropTypes.shape({
    basket: PropTypes.array.isRequired,
    modalShow: PropTypes.bool,
  })
}
export default connect(mapStateToProps)(hot(App))
