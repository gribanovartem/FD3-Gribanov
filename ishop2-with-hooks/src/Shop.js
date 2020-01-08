import React, {useState} from 'react';
import './Shop.css';
import ShopItem from "./ShopItem";
import PropTypes from 'prop-types';

const Shop = (props) => {
    const [newArr, setNewArr] = useState(props.itemArr);
    const [selectItem, setSelectItem] = useState(null);

    const updateItem = (value) => {
        setSelectItem(value);
    }
    const deleteItem = (itemId) => {
        let res = newArr.filter(item=>{
            if(item.id!==itemId) {
                return item;
            } else return null;
        });
        setNewArr(res);
    }
    let items = newArr.map((item)=>(
        <ShopItem
            key={item.name}
            id={item.id}
            itemName={item.name}
            itemPrice={item.price}
            itemImg={item.url}
            itemStock={item.stockBalance}
            updateItem={updateItem}
            deleteItem={deleteItem}
            itemStyle={item.id===selectItem?true:false}
        />
    ));
    return (
        <div className='shop'>
            <h1>{props.shopName}</h1>
            <div className='shopItems'>{items}</div>
        </div>
    )
}
export default Shop;

Shop.propTypes = {
    shopName: PropTypes.string,
    itemArr: PropTypes.array,
};