import React from 'react';
import './ShopItem.css';
import PropTypes from 'prop-types';

export default class ShopItem extends React.Component{
    constructor(props) {
        super(props);
        this.selectItem = this.selectItem.bind(this);
    }
    selectItem() {
        this.props.updateItem(this.props.id, this.props.index);
    }
    render() {
        return (
            <div className={this.props.itemStyle?'shopItemSelected':'shopItem'} onClick={this.selectItem}>
                <h2 className='itemName'>{this.props.itemName}</h2>
                <p className='itemPrice'>Цена: {this.props.itemPrice} руб</p>
                <img className='itemImg' src={this.props.itemImg} alt={this.props.itemName}/>
                <p className='itemStock'>Остаток на складе: {this.props.itemStock}</p>
                <div>
                    <button>Редактировать</button>
                    <button>Удалить</button>
                </div>

            </div>
        )
    }
}
ShopItem.propTypes = {
    id: PropTypes.number,
    itemName: PropTypes.string,
    itemPrice: PropTypes.number,
    itemImg: PropTypes.string,
    itemStock: PropTypes.number,
    updateItem: PropTypes.func,
};