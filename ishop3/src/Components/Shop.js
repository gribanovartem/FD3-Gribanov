import React from 'react';
import './Shop.css';
import PropTypes from 'prop-types';
import ShopItem from './ShopItem';
import ShopItemDetail from './ShopItemDetail'

class Shop extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          shopList: this.props.shopList,
          itemSelectedId: null,
      };
      this.updateItem = this.updateItem.bind(this);
      this.deleteItem = this.deleteItem.bind(this);
  }
  updateItem(id) {
      this.setState({itemSelectedId: id});
  }
  deleteItem(id) {
      let res = this.state.shopList.filter(item=>{
          if(item.id!==id) {
              return item;
          } else return null;
      });
      if(id===this.state.itemSelectedId) {
          this.setState({itemSelectedId: null});
      }
      this.setState({shopList: res});

  }
  render() {
      let items = this.state.shopList.map((item)=>(
          <ShopItem
              key={item.name}
              id={item.id}
              itemName={item.name}
              itemPrice={item.price}
              itemImg={item.url}
              itemStock={item.stockBalance}
              updateItem={this.updateItem}
              deleteItem={this.deleteItem}
              itemStyle={item.id===this.state.itemSelectedId?true:false}
          />
      ));
      let selectedItem = this.state.shopList.find(item=> item.id===this.state.itemSelectedId);
    return (
        <div className="shop">
          <h1>{this.props.shopName}</h1>
          <div className='shopItems'>{items}</div>
            {(this.state.itemSelectedId!==null) &&
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
