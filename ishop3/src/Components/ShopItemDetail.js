import React from 'react';
import './ShopItemDetail.css';
import PropTypes from 'prop-types';

class ShopItemDetail extends React.Component {
    render() {
        return (
            <div className='shopItemDetail'>
                <h2 className='itemName'>{this.props.itemName}</h2>
                <p className='itemPrice'>Цена: {this.props.itemPrice} руб</p>
                <img className='itemImg' src={this.props.itemImg} alt={this.props.itemName}/>
                <p className='itemStock'>Остаток на складе: {this.props.itemStock}</p>
                <p>{this.props.description}</p>
            </div>
        )
    }
}

export default ShopItemDetail;
ShopItemDetail.propTypes = {
    id: PropTypes.number,
    index: PropTypes.number,
    itemName: PropTypes.string,
    itemPrice: PropTypes.number,
    itemImg: PropTypes.string,
    itemStock: PropTypes.number,
    description: PropTypes.string,
};