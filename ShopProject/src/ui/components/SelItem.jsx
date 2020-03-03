import React from 'react';
import '../styles/MainContent.css';
import LeftContent from './LeftContent';
import Item from './Item';

class SelItem extends React.Component {
    render() {
      return (
          <div className="main">
           <div className='content row'>
               <Item url={this.props.url} id={parseInt(this.props.match.params.id)} catalogAC = {this.props.catalogAC} name={this.props.name}/>
               <LeftContent/>
           </div>
        </div>
      );
    }
  }
  export default SelItem;