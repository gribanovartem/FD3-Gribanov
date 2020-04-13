import React from 'react'
import  '../styles/Popup.css'
import {connect} from "react-redux";
import PropTypes from "prop-types";

class Popup extends React.Component {

  render() {
    return (
      <div className={`popup ${this.props.popup}`}>

        <div className="alert alert-secondary" role="alert">
          {this.props.text}
        </div>
      </div>
    )
  }
}
const mapStateToProps = function (state) {
  return {
    popup: state.popup.popup
  }
}

Popup.propTypes = {
  popup: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default connect(mapStateToProps)(Popup)
