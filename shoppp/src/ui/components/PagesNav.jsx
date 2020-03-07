import React from "react"
import { NavLink } from "react-router-dom"
import PropTypes from "prop-types"

class PagesNav extends React.Component {
  render() {
    const pages = []
    for (let i=1; i<=this.props.pagesCount; i++) {
      let num
      if (this.props.page===i) {
        num =   (
          <li className="page-item disabled" key={i}>
            <NavLink to={`${i}`} className="page-link" tabIndex="-1">{i}</NavLink>
          </li>
        )
      } else {
        num =   (
          <li className="page-item" key={i}>
            <NavLink to={`${i}`} className="page-link" tabIndex="-1">{i}</NavLink>
          </li>
        )
      }
      pages.push(num)
    }
    return (
      <nav aria-label="...">
        <ul className="pagination pagination-sm">
          {pages}
        </ul>
      </nav>
    )
  }
}
PagesNav.propTypes = {
  page: PropTypes.number.isRequired,
  pagesCount: PropTypes.number.isRequired,
}
export default PagesNav