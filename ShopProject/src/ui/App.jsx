import React from 'react';
import { hot } from 'react-hot-loader/root';
import PageHeader from 'ui/pages/PageHeader';
// import PageFooter from 'ui/pages/PageFooter';
// import PagesRouter from 'ui/pages/PagesRouter';


class App extends React.Component {
  render() {
    return (
      <div>
        <PageHeader/>
        {/* <PagesRouter/>
        <PageFooter/> */}
      </div>
    );
  }
}
export default hot(App)
