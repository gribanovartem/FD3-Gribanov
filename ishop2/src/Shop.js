import React from 'react';
import './Shop.css';
import ShopItem from "./ShopItem";
import PropTypes from 'prop-types';

export default class Shop extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            newArr: this.props.itemArr,
            itemHighlight: null,
        };
        this.updateItem = this.updateItem.bind(this);
    }
    updateItem(value) {
        this.setState({itemHighlight: value});
    }
    render() {
        let items = this.state.newArr.map((item)=>(
            <ShopItem
                key={item.name}
                itemName={item.name}
                itemPrice={item.price}
                itemImg={item.url}
                itemStock={item.stockBalance}
                updateItem={this.updateItem}
                itemStyle={item.name===this.state.itemHighlight?true:false}
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
Shop.propTypes = {
    shopName: PropTypes.string,
    itemArr: PropTypes.array,
};