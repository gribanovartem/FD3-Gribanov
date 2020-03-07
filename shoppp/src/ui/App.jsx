import React from 'react'
import { hot } from 'react-hot-loader/root'
import PropTypes from "prop-types"
import PageHeader from './pages/PageHeader'
import PageFooter from './pages/PageFooter'
import PagesRouter from './pages/PagesRouter'
import { connect } from 'react-redux'
import AddReview from './components/AddReview'
import "./styles/MainContent.css"


class App extends React.Component {
  render() {
    return (
      <div className="mainDiv">
        <PageHeader />
        <PagesRouter />
        <div className={this.props.reviews.mode===0?"fadeModal fadeClose":"fadeModal fadeShow"} />
        <AddReview />
        <PageFooter/>
      </div>
    )
  }
}
// export default hot(App)
const mapStateToProps = function (state) {
  return {
    reviews: state.reviews,
  }
}
App.propTypes = {
  reviews: PropTypes.shape({
    mode: PropTypes.number.isRequired,
  }).isRequired,
}
export default connect(mapStateToProps)(hot(App))
