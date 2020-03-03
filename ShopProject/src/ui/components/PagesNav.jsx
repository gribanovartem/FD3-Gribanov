import React from "react";
import { NavLink } from "react-router-dom";

class PagesNav extends React.Component {
    render() {
        let pages = [];
        for(let i=1; i<=this.props.pagesCount; i++) {
            let num;
            if(this.props.page===i) {
                num =   (
                                <li className="page-item disabled" key={i}>
                                    <NavLink to={i+''} className="page-link" tabIndex="-1">{i}</NavLink>
                                </li>
                            );
            } else {
                num =   (
                                <li className="page-item" key={i}>
                                    <NavLink to={i+''} className="page-link" tabIndex="-1">{i}</NavLink>
                                </li>
                            );
            }
            
            pages.push(num);
        }
      return (
            <nav aria-label="...">
                <ul className="pagination pagination-sm">
                    {pages}
                </ul>
            </nav>
      );
    }
  }
  export default PagesNav;