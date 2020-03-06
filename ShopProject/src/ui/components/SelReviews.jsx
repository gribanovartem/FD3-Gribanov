import React from 'react';
import '../styles/MainContent.css';
import '../styles/Media.css';
import Reviews from './Reviews';
import LeftContent from './LeftContent';
import Item from './Item';
import {connect} from 'react-redux';
import { set_reviews, set_mode_0, set_mode_1 } from '../../redux/reviewsAC';


class SelReviews extends React.Component {
    render() {
      return (
          <div className="main">
           <div className='content row'>
               <Reviews mode={1}/>
               <LeftContent/>
           </div>
        </div>
      );
    }
  }
  const mapStateToProps = function (state) {
    return {
	  reviews: state.reviews,
    };
};
export default connect(mapStateToProps)(SelReviews);