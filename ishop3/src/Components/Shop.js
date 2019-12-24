import React from 'react';
import ReactDOM from 'react-dom';
import './Shop.css';
import PropTypes from 'prop-types';
import ShopItem from './ShopItem';

class Shop extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          itemSelected: null,
          itemSelectedComponent: null,
      };
      this.updateItem = this.updateItem.bind(this);
  }
  updateItem(id, index) {
      this.setState({itemSelected: id});
      this.setState({itemSelectedComponent: index});
  }
  render() {
      let selectedItem;
      let items = this.props.shopList.map((item,index)=>(
          <ShopItem
              key={item.name}
              index={index}
              id={item.id}
              itemName={item.name}
              itemPrice={item.price}
              itemImg={item.url}
              itemStock={item.stockBalance}
              updateItem={this.updateItem}
              itemStyle={item.id===this.state.itemSelected?true:false}
          />
      ));

    return (
        <div className="shop">
          <h1>{this.props.shopName}</h1>
          <div className='shopItems'>{items}</div>
            {items[this.state.itemSelectedComponent]}
        </div>
    );
  }
}

export default Shop;
Shop.propTypes = {
    shopName: PropTypes.string,
    shopList: PropTypes.array,
};
