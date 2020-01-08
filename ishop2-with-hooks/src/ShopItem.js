import React from 'react';
import './ShopItem.css';
import PropTypes from 'prop-types';

const ShopItem = (props) => {
    const updateItem = () => {
        props.updateItem(props.id);
    }
    const deleteItem = (EO) => {
        EO.stopPropagation();
        let result = window.confirm('Вы уверены, что хотите удалить компонент?');
        if(result) {
            props.deleteItem(props.id);
        }
    }
    return (
        <div className='shopItem' onClick={updateItem} style={props.itemStyle?{background: 'palegoldenrod'}:{background: 'none'}}>
            <h2 className='itemName'>{props.itemName}</h2>
            <p className='itemPrice'>Цена: {props.itemPrice} руб</p>
            <img className='itemImg' src={props.itemImg} alt={props.itemName}/>
            <p className='itemStock'>Остаток на складе: {props.itemStock}</p>
            <button onClick={deleteItem}>Delete</button>
        </div>
    )
}
export default ShopItem;
ShopItem.propTypes = {
    id: PropTypes.number,
    itemName: PropTypes.string,
    itemPrice: PropTypes.number,
    itemImg: PropTypes.string,
    itemStock: PropTypes.number,
    updateItem: PropTypes.func,
    deleteItem: PropTypes.func,
    itemStyle: PropTypes.bool,
};