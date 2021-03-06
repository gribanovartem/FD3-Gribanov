import React from 'react';
import '../styles/MainContent.css';
import '../styles/Media.css';
import LeftContent from './LeftContent';
import CategoryContent from './CategoryContent';

class SelCategory extends React.Component {
    render() {
      
      return (
          <div className="main">
           <div className='content row'>
               <CategoryContent url={this.props.url} page={parseInt(this.props.match.params.page)||null} catalogAC={this.props.catalogAC} name={this.props.name}/>
               <LeftContent/>
           </div>
        </div>
      );
    }
  }
  export default SelCategory;