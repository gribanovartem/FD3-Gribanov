import React from 'react';
import { NavLink } from "react-router-dom";
import Top from '../components/Top';
import Header from '../components/Header';

class PageHeader extends React.Component {
  render() {
    return (
      	<div>
			<Top/>
			<Header/>
		</div>
    );
  }
}
export default PageHeader;