import React from 'react'
import '../styles/MainContent.css'
import '../styles/Media.css'
import PropTypes from 'prop-types'
import LeftContent from './LeftContent'
import CategoryContent from './CategoryContent'
import {connect} from "react-redux"
import {catalog_on} from "../../redux/catalogAC";

class SelCategory extends React.Component {
  componentDidMount() {
    this.props.dispatch(catalog_on())
  }

  render() {
    return (
      <div className="main">
        <div className="content row">
          {this.props.filter.isFilter
            ?<CategoryContent url={this.props.url} page={1} catalogAC={this.props.catalogAC} name={this.props.name} />
            :<CategoryContent url={this.props.url} page={parseInt(this.props.match.params.page)||null} catalogAC={this.props.catalogAC} name={this.props.name} />
          }
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
const mapStateToProps = function (state) {
  return {
    catalog: state.catalog,
    filter: state.filter,
  }
}
export default connect(mapStateToProps)(SelCategory)
