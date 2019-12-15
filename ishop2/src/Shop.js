import React from 'react';
import './Shop.css';
import ShopItem from "./ShopItem";

export default class Shop extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            newArr: this.props.itemArr,
        };
    }
  render() {
        let items = this.state.newArr.map((item)=>(
            <ShopItem
                key={item.name}
                itemName={item.name}
                itemPrice={item.price}
                itemImg={item.url}
                itemStock={item.stockBalance}
            />
        ));
    return (
        <div className='shop'>
            <h1>{this.props.shopName}</h1>
            <div className='shopItems'>{items}</div>

        </div>
    )
  }
}
