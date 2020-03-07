import React from 'react'
import '../styles/MainContent.css'
import '../styles/Media.css'
import PropTypes from 'prop-types'
import LeftContent from './LeftContent'
import Item from './Item'

class SelItem extends React.Component {

  render() {
    return (
      <div className="main">
        <div className="content row">
          <Item url={this.props.url} id={parseInt(this.props.match.params.id)} catalogAC={this.props.catalogAC} name={this.props.name} />
          <LeftContent />
        </div>
      </div>
    )
  }
}
SelItem.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  catalogAC: PropTypes.func.isRequired,
  match: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.object,
  ]),
}
SelItem.defaultProps = {
  match: PropTypes.object,
}
export default SelItem