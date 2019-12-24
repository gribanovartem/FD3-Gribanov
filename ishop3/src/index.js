import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Shop from './Components/Shop';
import ShopList from './shopList';

ReactDOM.render(<Shop shopList={ShopList} shopName={'Mobiles'}/>, document.getElementById('root'));
