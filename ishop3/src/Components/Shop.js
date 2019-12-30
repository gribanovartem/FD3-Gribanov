import React from 'react';
import './Shop.css';
import PropTypes from 'prop-types';
import ShopItem from './ShopItem';
import ShopItemDetail from './ShopItemDetail'
import AddItem from './AddItem'

class Shop extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          shopList: this.props.shopList,
          itemSelectedId: null,
          addFormShow: false,
          validateMode: null,
          disabled: false,
          editItemId: null,
          isChange: false,
          editItem: null,
      };
      this.updateItem = this.updateItem.bind(this);
      this.deleteItem = this.deleteItem.bind(this);
      this.addForm = this.addForm.bind(this);
  }
  updateItem(id) {
      if(this.state.isChange===false) {
          this.setState({addFormShow: false});
          this.setState({itemSelectedId: id});
      }
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
  change=(change)=> {
      this.setState({isChange: change})
  };
  addForm() {
      this.setState({validateMode: 'addItem'});
      this.setState({addFormShow: true});
      this.setState({itemSelectedId: null});
      this.setState({disabled: true});
  }
  cancel = () =>  {
      this.setState({addFormShow: false});
      this.setState({disabled: false});
      this.setState({validateMode: null});
      this.setState({editItemId: null});
  };
  addItem = (id, name, price, url, balance) => {
      let newShopList = [...this.state.shopList, {id:Number(id), name:name, price:Number(price), url:url, stockBalance: Number(balance)}];
      this.setState({shopList: newShopList});
      this.setState({addFormShow: false});
      this.setState({disabled: false});
      this.setState({itemSelectedId: null});
      this.setState({editItemId: null});
  };
  edit = (id) => {
      this.setState({addFormShow: true});
      this.setState({itemSelectedId: id});
      this.setState({validateMode: 'editItem'});
      this.setState({disabled: true});
      this.setState({editItemId: id});
      let editItem = this.state.shopList.find(item=> item.id===id);
      this.setState({editItem: editItem});

  };
  saveItem = (id, name, price, url, balance) => {
      let editItem = this.state.shopList.find(item=> item.id===id);
      editItem.id=Number(id);
      editItem.name=name;
      editItem.price=Number(price);
      editItem.url=url;
      editItem.stockBalance=Number(balance);
      let newShopList = this.state.shopList.map((item)=> (item.id===id)?editItem:item);
      this.setState({shopList: newShopList});
      this.setState({addFormShow: false});
      this.setState({disabled: false});
      this.setState({itemSelectedId: null});
      this.setState({editItemId: null});
      this.setState({isChange: false})
  };
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
              edit={this.edit}
              disabled={this.state.disabled}
              itemStyle={item.id===this.state.itemSelectedId?true:false}
              isChange={this.state.isChange}
          />
      ));
      let selectedItem = this.state.shopList.find(item=> item.id===this.state.itemSelectedId);
      console.log(this.state.itemSelectedId, this.state.addFormShow);
    return (
        <div className="shop">
          <h1>{this.props.shopName}</h1>
          <div className='shopItems'>{items}</div>
            <button onClick={this.addForm} disabled={this.state.disabled}>Новый товар</button>
            {(this.state.itemSelectedId!==null) && (this.state.addFormShow===false) &&
                <ShopItemDetail key={selectedItem.name}
                                id={selectedItem.id}
                                itemName={selectedItem.name}
                                itemPrice={selectedItem.price}
                                itemImg={selectedItem.url}
                                itemStock={selectedItem.stockBalance}
                                description={selectedItem.description}

                />
            }
            {(this.state.addFormShow) && (this.state.editItemId===null) &&
                <AddItem lastId={(this.state.shopList[this.state.shopList.length-1].id)+1}
                         validateMode={this.state.validateMode}
                         cancel={this.cancel}
                         addItem={this.addItem}
                         itemName=''
                         itemPrice=''
                         itemURL=''
                         itemBalance=''
                         change= {this.change}
                />
            }
            {(this.state.addFormShow) && (this.state.editItemId!==null) &&
                <AddItem lastId={this.state.editItemId}
                         validateMode={this.state.validateMode}
                         cancel={this.cancel}
                         saveItem={this.saveItem}
                         itemName={this.state.editItem.name}
                         itemPrice={this.state.editItem.price}
                         itemURL={this.state.editItem.url}
                         itemBalance={this.state.editItem.stockBalance}
                         change= {this.change}
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
