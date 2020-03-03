import React from "react";
import { Route } from "react-router-dom";
import Main from "../components/Main";
import SelCategory from "../components/SelCategory";
import SelItem from "../components/SelItem";
import { catalog_drills, catalog_rotaryhammers, catalog_electric_saw, catalog_fretsaw, catalog_plane } from "../../redux/catalogAC";

class PagesRouter extends React.Component {
  render() {
    return (
      <div>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/drills" exact>
          <SelCategory
            url="https://firebasestorage.googleapis.com/v0/b/shop-gribanov.appspot.com/o/drils.json?alt=media&token=6e23c526-cd8e-49f4-8fb0-0493f7a53e12"
            catalogAC={catalog_drills}
            name='drills'
          />
        </Route>
        <Route
          path="/drills/:id"
          render={props => (
            <SelItem
              {...props}
              url="https://firebasestorage.googleapis.com/v0/b/shop-gribanov.appspot.com/o/drils.json?alt=media&token=6e23c526-cd8e-49f4-8fb0-0493f7a53e12"
              catalogAC={catalog_drills}
              name='drills'
            />
          )}
        />
        <Route path="/rotaryhammers" exact>
          <SelCategory
            url="https://firebasestorage.googleapis.com/v0/b/shop-gribanov.appspot.com/o/rotaryhammers.json?alt=media&token=5a8879d3-49aa-4e30-8724-84f9a1712d57"
            catalogAC={catalog_rotaryhammers}
            name='rotaryhammers'
          />
        </Route>
        <Route
          path="/rotaryhammers/:id"
          render={props => (
            <SelItem
              {...props}
              url="https://firebasestorage.googleapis.com/v0/b/shop-gribanov.appspot.com/o/rotaryhammers.json?alt=media&token=5a8879d3-49aa-4e30-8724-84f9a1712d57"
              catalogAC={catalog_rotaryhammers}
              name='rotaryhammers'
            />
          )}
        />
        <Route path="/electric_saw" exact>
          <SelCategory
            url="https://firebasestorage.googleapis.com/v0/b/shop-gribanov.appspot.com/o/electric_saw.json?alt=media&token=57d445a3-36e9-430e-af17-1193d0c7bf49"
            catalogAC={catalog_electric_saw}
            name='electric_saw'
          />
        </Route>
        <Route
          path="/electric_saw/:id"
          render={props => (
            <SelItem
              {...props}
              url="https://firebasestorage.googleapis.com/v0/b/shop-gribanov.appspot.com/o/electric_saw.json?alt=media&token=57d445a3-36e9-430e-af17-1193d0c7bf49"
              catalogAC={catalog_electric_saw}
              name='electric_saw'
            />
          )}
        />
        <Route path="/fretsaw" exact>
          <SelCategory
            url="https://firebasestorage.googleapis.com/v0/b/shop-gribanov.appspot.com/o/fretsaw.json?alt=media&token=c1ecdd4a-3926-4fc1-96b0-a04622cc52c1"
            catalogAC={catalog_fretsaw}
            name='fretsaw'
          />
        </Route>
        <Route
          path="/fretsaw/:id"
          render={props => (
            <SelItem
              {...props}
              url="https://firebasestorage.googleapis.com/v0/b/shop-gribanov.appspot.com/o/fretsaw.json?alt=media&token=c1ecdd4a-3926-4fc1-96b0-a04622cc52c1"
              catalogAC={catalog_fretsaw}
              name='fretsaw'
            />
          )}
        />
        <Route path="/plane" exact>
          <SelCategory
            url="https://firebasestorage.googleapis.com/v0/b/shop-gribanov.appspot.com/o/plane.json?alt=media&token=7581b5f7-3537-4419-8f63-6a95b5ddb429"
            catalogAC={catalog_plane}
            name='plane'
          />
        </Route>
        <Route
          path="/plane/:id"
          render={props => (
            <SelItem
              {...props}
              url="https://firebasestorage.googleapis.com/v0/b/shop-gribanov.appspot.com/o/plane.json?alt=media&token=7581b5f7-3537-4419-8f63-6a95b5ddb429"
              catalogAC={catalog_plane}
              name='plane'
            />
          )}
        />
      </div>
    );
  }
}

export default PagesRouter;
