import React from 'react';
import LeftContent from "./LeftContent";

class Basket extends React.Component {
  render() {

    return (
      <>
        <div className="main">
          <div className="content row">
            <div className="col-9">basket</div>
            <LeftContent/>
          </div>
        </div>
      </>
    )
  }

}

export default Basket
