import React from 'react';
import LeftContent from "./LeftContent";
import '../styles/Basket.css';
import {connect} from "react-redux";
import {change_count, delete_item, basket_filter_off} from "../../redux/basketAC";

class Basket extends React.Component {

  changeCount = (count, i) => {
    this.props.dispatch(change_count(count,i))
  }
  deleteItem = (i) => {
    this.props.dispatch(delete_item(i))
  }
  render() {
    let basketItems = this.props.basket.basket.map((item, i) => {
      return (
        <div className="product" key={item.key}>
          <div className="product-image">
            <img src={item.images.header}/>
          </div>
          <div className="product-details">
            <div className="product-title">{item["extended_name"]}</div>
          </div>
          <div className="product-quantity">
            <input type="number" value={item.count} onChange={(event)=>this.changeCount(event.target.value, i)} min="1"/>
          </div>
          <div className="product-removal">
            <button className="remove-product" onClick={()=> this.deleteItem(i)}>
              Удалить
            </button>
          </div>
          <div className="product-line-price">{((item["prices"]["price_min"].amount)*item.count).toFixed(2)} руб.</div>
        </div>
      )
    })
    let fullPrice = this.props.basket.basket.reduce((init, item)=>{
      return init + Number(item["prices"]["price_min"].amount * item.count)
    },0)
    return (
      <>
        <div className="main">
          <div className="content row">
            <div className="col-9 shopping-cart">
              <h1>Корзина</h1>
              <div className="shopping-cart">
                <div className="column-labels">
                  <label className="product-image">Image</label>
                  <label className="product-details">Product</label>
                  <label className="product-quantity">Количество</label>
                  <label className="product-removal">Remove</label>
                  <label className="product-line-price">Цена</label>
                </div>

                {basketItems}

                <div className="totals">
                  <div className="totals-item totals-item-total">
                    <label>Итого</label>
                    <div className="totals-value" id="cart-total">{fullPrice.toFixed(2)} руб.</div>
                  </div>
                </div>
                <button className="btn checkout right">Оформить заказ</button>
              </div>
            </div>
            <LeftContent/>
          </div>
        </div>
      </>
    )
  }

}

const mapStateToProps = function (state) {
  return {
    basket: state.basket,
  }
}
export default connect(mapStateToProps)(Basket)
