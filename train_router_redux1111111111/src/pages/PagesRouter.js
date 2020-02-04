import React from 'react';
import { Route } from 'react-router-dom';

import Page_About from '../pages/Page_About';
import Page_Mobiles from '../pages/Page_Mobiles';
import Page_Mobile from '../pages/Page_Mobile';

class PagesRouter extends React.Component {
          
  render() {

    return (
      <div>
        <Route path="/" exact component={Page_About} />
        <Route path="/allMobiles" component={Page_Mobiles} />
        <Route path="/mobile/:mobile" component={Page_Mobile} />
      </div>
    );
    
  }

}
    
export default PagesRouter;