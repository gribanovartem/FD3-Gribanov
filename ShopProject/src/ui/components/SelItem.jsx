import React from 'react';
import { Route } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import '../styles/MainContent.css';
import  {dataLoad}  from '../../functions/dataLoad';
import LeftContent from './LeftContent';
import Item from './Item';

class SelItem extends React.Component {
    render() {
      return (
          <div className="main">
           <div className='content row'>
               <Item url={this.props.url} id={parseInt(this.props.match.params.id)} catalogAC = {this.props.catalogAC}/>
               <LeftContent/>
           </div>
        </div>
      );
    }
  }
  export default SelItem;