import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MobileCompany from './Components/MobileCompany';
import clients from './Clients'

ReactDOM.render(<MobileCompany clients={clients}/>, document.getElementById('root'));