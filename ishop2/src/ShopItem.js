import React from 'react';
import './ShopItem.css';
import PropTypes from 'prop-types';

export default class ShopItem extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isShow: true,
        };
        this.highlightInColor = this.highlightInColor.bind(this);
        this.deleteComponent = this.deleteComponent.bind(this);
    }
    highlightInColor() {
        this.props.updateItem(this.props.id);
    }
    deleteComponent(EO) {
        EO.stopPropagation();
        let result = window.confirm('Вы уверены, что хотите удалить компонент?');
        if(result) {
            this.props.deleteItem(this.props.id);
        }
    }
    render() {
            return (
                <div className='shopItem' onClick={this.highlightInColor} style={this.props.itemStyle?{background: 'palegoldenrod'}:{background: 'none'}}>
                    <h2 className='itemName'>{this.props.itemName}</h2>
                    <p className='itemPrice'>Цена: {this.props.itemPrice} руб</p>
                    <img className='itemImg' src={this.props.itemImg} alt={this.props.itemName}/>
                    <p className='itemStock'>Остаток на складе: {this.props.itemStock}</p>
                    <button onClick={this.deleteComponent}>Delete</button>
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
    deleteItem: PropTypes.func,
    itemStyle: PropTypes.bool,
};