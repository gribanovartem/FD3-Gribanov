import React from 'react';
import { Route } from 'react-router-dom';
import PageHeader from './PageHeader';

class PagesRouter extends React.Component {
          
    render() {
  
      return (
        <div>
          <Route path="/" exact component={PageHeader} />
          <Route path="/drills" component={PageTools} />
        </div>
      );
      
    }
  
  }
      
  export default PagesRouter;