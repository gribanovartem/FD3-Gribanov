import React from 'react';
import ShopList from '../shopList'

class Mobile extends React.Component {
    render() {
        let mob = ShopList.find(item=>{
            if(item.id === this.props.id) {
                return item;
            } return null;
        })
        return (
            <div>
                <h2 className='itemName'>{mob.name}</h2>
                <p className='itemPrice'>Цена: {mob.price} руб</p>
                <img className='itemImg' src={mob.url} alt={mob.name}/>
                <p className='itemIDescription'>{mob.description}</p>
                <p className='itemStock'>Остаток на складе: {mob.stockBalance}</p>
                {/* <div>
                    <button disabled={this.props.validateMode==='addItem'?this.props.disabled:this.props.isChange && this.props.disabled} onClick={this.edit}>Редактировать</button>
                    <button disabled={this.props.disabled} onClick={this.deleteItem}>Удалить</button>
                </div> */}

            </div>
        )
    }
}
export default Mobile;