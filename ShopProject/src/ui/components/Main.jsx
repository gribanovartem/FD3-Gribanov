import React from 'react';
import { Route } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import LeftContent from './LeftContent';
import MainContent from './MainContent';
import '../styles/MainContent.css';
import  {dataLoad}  from '../../functions/dataLoad';

class Main extends React.Component {
  
    render(){
      return (
        <div className="main">
           <div className='content row'>
               {/* <MainContent/> */}
               <MainContent/>
               <LeftContent/>
           </div>
        </div>
     );
    }
       //'https://firebasestorage.googleapis.com/v0/b/shop-gribanov.appspot.com/o/catalog.json?alt=media&token=fb290126-a51b-4667-8e28-239cbf983c71'
      
  }
  export default Main;