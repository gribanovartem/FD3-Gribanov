import React from 'react';
import { Route } from 'react-router-dom';
import PageHeader from './PageHeader';
import Main from '../components/Main'

class PagesRouter extends React.Component {
          
    render() {
  
      return (
        <div>
          <Route path="/" exact component={Main} />
          <Route path="/drills" component={Main } />
        </div>
      );
      
    }
  
  }
      
  export default PagesRouter;