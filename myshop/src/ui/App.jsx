import React from 'react';
import PageHeader from './pages/PageHeader';
// import PageFooter from 'ui/pages/PageFooter';
import PagesRouter from './pages/PagesRouter';
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
export default App;
