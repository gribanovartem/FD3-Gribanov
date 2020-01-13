import React from 'react';

 const withRainbowFrame = colors => Comp => props => {
     let items = <Comp {...props} />;
     colors.forEach(item => (
         items = <div style={{border: '3px solid ' + item, padding: '5px', margin: '5px'}}>{items}</div>
     ));
     return items;
 };
export default withRainbowFrame;