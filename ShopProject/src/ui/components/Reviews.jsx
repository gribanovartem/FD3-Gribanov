import React from "react"
import PropTypes from "prop-types"
import "../styles/LeftContent.css"
import { connect } from "react-redux"

class Reviews extends React.Component {
  render() {
    
    let reviews

    if (this.props.reviews.reviews !== null) {
      if (this.props.mode === 0) {
        const rev = []
        for (let i = 0; i < 3; i++) {
          rev.push(this.props.reviews.reviews[i])
        }

        reviews = rev.map((item) => {
          return (
            <div className="main-story" key={item.name}>
              <div className="main-story_title">{`${item.name} , ${item.city}`}</div>
              <p>{item.review}</p>
            </div>
          )
        })
      }
      if (this.props.mode === 1) {
        reviews = this.props.reviews.reviews.map((item) => {
          return (
            <div className="main-story" key={item.name}>
              <div className="main-story_title">{`${item.name} , ${item.city}`}</div>
              <p>{item.review}</p>
            </div>
          )
        })
      }
    }

    return (
      <div className={this.props.mode === 0 ? null : "col-9"}> {reviews} </div>
    )
  }
}
const mapStateToProps = function (state) {
  return {
    reviews: state.reviews,
  }
}
Reviews.propTypes = {
  reviews: PropTypes.shape({
    reviews: PropTypes.array,
    mode: PropTypes.number.isRequired,
  }),
  mode: PropTypes.number.isRequired,
}
Reviews.defaultProps = {
  reviews: PropTypes.shape({
    reviews: PropTypes.number,
  }),
}
export default connect(mapStateToProps)(Reviews)
