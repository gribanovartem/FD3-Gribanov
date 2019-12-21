import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Shop from './Shop';

let itemArr = [
    {
        id: 123,
        name: 'Samsung Galaxy A50',
        price: 490,
        url: 'https://content2.onliner.by/catalog/device/main/c93a1df6be27222912d27530201d7d7a.jpeg',
        stockBalance: 50,
    },
    {
        id: 124,
        name: 'Xiaomi Redmi Note 8 Pro',
        price: 543,
        url: 'https://content2.onliner.by/catalog/device/main/e16c6a794798c03985a53861f42a1da9.jpeg',
        stockBalance: 40,
    },
    {
        id: 125,
        name: 'Apple iPhone XR',
        price: 1550,
        url: 'https://content2.onliner.by/catalog/device/main/712401a310828d6293a3761d878fb37a.jpeg',
        stockBalance: 20,
    },
    {
        id: 126,
        name: 'Apple iPhone 11',
        price: 1890,
        url: 'https://content2.onliner.by/catalog/device/main/e2189f90f9088975c553ec33431fc186.jpeg',
        stockBalance: 15,
    },
    {
        id: 127,
        name: 'Samsung Galaxy S10e G970',
        price: 1195,
        url: 'https://content2.onliner.by/catalog/device/main/b2c0f7fa25003ccad4d9c494ba4a7d46.jpeg',
        stockBalance: 32,
    }
];

ReactDOM.render(<Shop shopName={'Mobiles'} itemArr={itemArr}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
