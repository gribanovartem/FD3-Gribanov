import React from 'react'
import LeftContent from './LeftContent'
import MainContent from './MainContent'
import '../styles/MainContent.css'
import isoFetch from 'isomorphic-fetch'
import { set_reviews, set_mode_0, set_mode_1 } from '../../redux/reviewsAC'


class Main extends React.Component {
  render(){
      
    return (
      <>
        <div className="main">
          <div className="content row">
            <MainContent />
            <LeftContent />
                
          </div>
        </div>
         
      </>
    )
  }
      
}
export default Main