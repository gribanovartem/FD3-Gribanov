import React from 'react';
import ShopList from '../shopList';
import './Mobile.css';
import {connect} from 'react-redux';
import { select_mobile, unselect_mobile, select_create } from '../redux/selectAC';
import store from '../store';

class Mobile extends React.Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
    }
    // state = store.getState();
    UNSAFE_componentWillMount() {
        this.props.dispatch( select_create(this.props.id) );
    }
    select = () => {
        console.log(store.getState());
        if(store.getState().selecting[this.props.id].select === false) {
            this.props.dispatch( select_mobile(this.props.id) );
        } else {
            this.props.dispatch( unselect_mobile(this.props.id) );
        }
    }
    render() {
        let mob = ShopList.find(item=>{
            if(item.id === this.props.id) {
                return item;
            } return null;
        })
        return (
            <div className={store.getState().selecting[this.props.id].select?'mobile select':'mobile'} onClick={this.select}>
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

const mapStateToProps = function (state) {
    return {
      // весь раздел Redux state под именем counters будет доступен
      // данному компоненту как this.props.counters
      selecting: state.selecting,
    };
  };
export default connect(mapStateToProps)(Mobile);