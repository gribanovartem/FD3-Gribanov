import React from 'react';
import './ShopItem.css';
import PropTypes from 'prop-types';

class ShopItem extends React.Component{
    constructor(props) {
        super(props);
        this.selectItem = this.selectItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }
    selectItem() {
        this.props.updateItem(this.props.id);
    }
    deleteItem(EO) {
            EO.stopPropagation();
            let result = window.confirm('Вы уверены, что хотите удалить компонент?');
            if (result) {
                this.props.deleteItem(this.props.id);
            }
    }
    edit = (EO) => {
        EO.stopPropagation();
        let itemId = this.props.id;
        this.props.edit(itemId);
    };
    render() {
        return (
            <div className={this.props.itemStyle?'shopItemSelected':'shopItem'} onClick={this.selectItem}>
                <h2 className='itemName'>{this.props.itemName}</h2>
                <p className='itemPrice'>Цена: {this.props.itemPrice} руб</p>
                <img className='itemImg' src={this.props.itemImg} alt={this.props.itemName}/>
                <p className='itemStock'>Остаток на складе: {this.props.itemStock}</p>
                <div>
                    <button disabled={this.props.validateMode==='addItem'?this.props.disabled:this.props.isChange && this.props.disabled} onClick={this.edit}>Редактировать</button>
                    <button disabled={this.props.disabled} onClick={this.deleteItem}>Удалить</button>
                </div>

            </div>
        )
    }
}
export default ShopItem;
ShopItem.propTypes = {
    id: PropTypes.number,
    index: PropTypes.number,
    itemName: PropTypes.string,
    itemPrice: PropTypes.number,
    itemImg: PropTypes.string,
    itemStock: PropTypes.number,
    updateItem: PropTypes.func,
    deleteItem: PropTypes.func,
    edit: PropTypes.func,
    disabled: PropTypes.bool,
    isChange: PropTypes.bool,
    validateMode: PropTypes.string,
};