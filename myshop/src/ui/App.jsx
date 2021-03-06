import React from 'react';
import { hot } from 'react-hot-loader/root';
import PageHeader from 'ui/pages/PageHeader';
// import PageFooter from 'ui/pages/PageFooter';
import PagesRouter from 'ui/pages/PagesRouter';
import LeftContent from './components/LeftContent';
import {connect} from 'react-redux';
import AddReview from './components/AddReview';
import '../ui/styles/MainContent.css';


class App extends React.Component {
  render() {
    return (
      <div className='mainDiv'>
        <PageHeader/>
        {/* <LeftContent/> */}
        <PagesRouter/>
        <div className={this.props.reviews.mode===0?"fadeModal fadeClose":"fadeModal fadeShow"}></div>
          <AddReview/>
        {/* <PageFooter/> */}
      </div>
    );
  }
}
// export default hot(App)
const mapStateToProps = function (state) {
  return {
  reviews: state.reviews,
  };
};
export default connect(mapStateToProps)(hot(App));
