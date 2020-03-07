import React from 'react'
import '../styles/MainContent.css'
import '../styles/Media.css'
import PropTypes from 'prop-types'
import LeftContent from './LeftContent'
import CategoryContent from './CategoryContent'

class SelCategory extends React.Component {
  render() {
      
    return (
      <div className="main">
        <div className="content row">
          <CategoryContent url={this.props.url} page={parseInt(this.props.match.params.page)||null} catalogAC={this.props.catalogAC} name={this.props.name} />
          <LeftContent />
        </div>
      </div>
    )
  }
}
SelCategory.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  catalogAC: PropTypes.func.isRequired,
  match: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.object,
  ]),
}
SelCategory.defaultProps = {
  match: PropTypes.number,
}
export default SelCategory