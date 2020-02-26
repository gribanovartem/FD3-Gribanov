import React from 'react';
import { hot } from 'react-hot-loader/root';
import PageHeader from 'ui/pages/PageHeader';
// import PageFooter from 'ui/pages/PageFooter';
import PagesRouter from 'ui/pages/PagesRouter';
import LeftContent from './components/LeftContent';


class App extends React.Component {
  render() {
    return (
      <div>
        <PageHeader/>
        {/* <LeftContent/> */}
        <PagesRouter/>
        {/* <PageFooter/> */}
      </div>
    );
  }
}
export default hot(App)
