import React from 'react';
import { Route } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import LeftContent from './LeftContent';
import MainContent from './MainContent';
import '../styles/MainContent.css';

class Main extends React.Component {
    render() {
      return (
         <div className="main">
            <div className='content row'>
                <MainContent/>
                <LeftContent/>
            </div>
         </div>
      );
    }
  }
  export default Main;