import React from 'react';
import { Route } from 'react-router-dom';
import PageHeader from './PageHeader';
import Main from '../components/Main';
import SelCategory from '../components/SelCategory';
import SelItem from '../components/SelItem';
import { catalog_drills, catalog_rotaryhammers} from '../../redux/catalogAC';

class PagesRouter extends React.Component {
          
    render() {
  
      return (
        <div>
          <Route path="/" exact>
            <Main />
          </Route>
          <Route path="/drills" exact>
            <SelCategory 
                url='https://firebasestorage.googleapis.com/v0/b/shop-gribanov.appspot.com/o/drils.json?alt=media&token=6e23c526-cd8e-49f4-8fb0-0493f7a53e12'
                catalogAC = {catalog_drills}
            />
          </Route>
          <Route path="/drills/:id"
            render={(props) => <SelItem {...props} 
            url='https://firebasestorage.googleapis.com/v0/b/shop-gribanov.appspot.com/o/drils.json?alt=media&token=6e23c526-cd8e-49f4-8fb0-0493f7a53e12'
            catalogAC = {catalog_drills} />}
          />
          <Route path="/rotaryhammers">
            <SelCategory 
                url='https://firebasestorage.googleapis.com/v0/b/shop-gribanov.appspot.com/o/rotaryhammers.json?alt=media&token=5a8879d3-49aa-4e30-8724-84f9a1712d57'
                catalogAC = {catalog_rotaryhammers}
            />
          </Route>
        </div>
      );
      
    }
  
  }
      
  export default PagesRouter;