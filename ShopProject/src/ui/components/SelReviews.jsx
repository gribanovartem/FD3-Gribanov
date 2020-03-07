import React from "react"
import "../styles/MainContent.css"
import "../styles/Media.css"
import { connect } from "react-redux"
import Reviews from "./Reviews"
import LeftContent from "./LeftContent"

class SelReviews extends React.Component {
  render() {
    return (
      <div className="main">
        <div className="content row">
          <Reviews mode={1} />
          <LeftContent />
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
export default connect(mapStateToProps)(SelReviews)
