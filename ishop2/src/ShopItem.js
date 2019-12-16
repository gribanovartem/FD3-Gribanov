import React from 'react';
import './ShopItem.css';

export default class ShopItem extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isActive: false,
            color: null,
            isShow: true,
        };
        this.highlightInColor = this.highlightInColor.bind(this);
        this.deleteComponent = this.deleteComponent.bind(this);
    }
    highlightInColor() {
        if(this.state.isActive===false) {
            this.setState({color: 'palegoldenrod', isActive: true});
        } else {
            this.setState({color: null, isActive: false});
        }
    }
    deleteComponent(EO) {
        EO.stopPropagation();
        let result = window.confirm('Вы уверены, что хотите удалить компонент?');
        if(result) {
            this.setState({isShow: false})
        }
    }
    render() {
        if(this.state.isShow) {
            return (
                <div className='shopItem' onClick={this.highlightInColor} style={{background: this.state.color}}>
                    <h2 className='itemName'>{this.props.itemName}</h2>
                    <p className='itemPrice'>Цена: {this.props.itemPrice} руб</p>
                    <img className='itemImg' src={this.props.itemImg} alt={this.props.itemName}/>
                    <p className='itemStock'>Остаток на складе: {this.props.itemStock}</p>
                    <button onClick={this.deleteComponent}>Delete</button>
                </div>

            )
        } else return  null;
    }
}