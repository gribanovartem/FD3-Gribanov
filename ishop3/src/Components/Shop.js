import React from 'react';
import ReactDOM from 'react-dom';
import './Shop.css';
import PropTypes from 'prop-types';
import ShopItem from './ShopItem';
import ShopItemDetail from './ShopItemDetail'

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
      let selectedItem = this.props.shopList[this.state.itemSelectedComponent];
    return (
        <div className="shop">
          <h1>{this.props.shopName}</h1>
          <div className='shopItems'>{items}</div>
            {(this.state.itemSelectedComponent!==null) &&
                <ShopItemDetail key={selectedItem.name}
                                id={selectedItem.id}
                                itemName={selectedItem.name}
                                itemPrice={selectedItem.price}
                                itemImg={selectedItem.url}
                                itemStock={selectedItem.stockBalance}
                                description={selectedItem.description}
                />
            }
        </div>
    );
  }
}

export default Shop;
Shop.propTypes = {
    shopName: PropTypes.string,
    shopList: PropTypes.array,
};
