import React from 'react';
import { Route } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import '../styles/MainContent.css';
import  {dataLoad}  from '../../functions/dataLoad';
import LeftContent from './LeftContent';
import CategoryContent from './CategoryContent';

class SelCategory extends React.Component {
    render() {
      return (
          <div className="main">
           <div className='content row'>
               <CategoryContent url={this.props.url} catalogAC={this.props.catalogAC}/>
               <LeftContent/>
           </div>
        </div>
      );
    }
  }
  export default SelCategory;