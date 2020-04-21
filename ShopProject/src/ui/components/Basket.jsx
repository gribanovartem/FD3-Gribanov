import React from 'react';
import LeftContent from "./LeftContent";
import '../styles/Basket.css';
import {connect} from "react-redux";
import {change_count, delete_item, modal_show} from "../../redux/basketAC";
import {NavLink} from "react-router-dom";
import PropTypes from "prop-types"
import Checkout from "./Checkout";
import {Modal} from "antd";

class Basket extends React.Component {

  changeCount = (count, i) => {
    this.props.dispatch(change_count(count,i))
  }
  deleteItem = (i) => {
    this.props.dispatch(delete_item(i))
  }
  checkout = () => {
    if(this.props.basket.basket.length!==0) {
      this.props.dispatch(modal_show())
    }
    else {
      this.error()
    }
  }
  error = () => {
    Modal.error({
      title: 'Ошибка',
      content: 'В корзине нет товаров',
    });
  }
  render() {
    let basketItems = this.props.basket.basket.map((item, i) => {
      return (

        <div className="product" key={item.key}>
          <NavLink
            to={`${this.props.catalog.nav}/${item.id}`}
            key={item.key}
          >
            <div className="product-image">
              <img src={item.images.header}/>
            </div>
            <div className="product-details">
              <div className="product-title">{item["extended_name"]}</div>
            </div>
          </NavLink>


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
                <button className="btn checkout right" onClick={this.checkout}>Оформить заказ</button>
              </div>
              {this.props.basket.modalShow&&<Checkout correct={this.props.basket.basket.length!==0}/>}


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
    catalog: state.catalog,
  }
}

Basket.propTypes = {
  catalog: PropTypes.shape({
    data: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object,
    ]),
    ready: PropTypes.bool.isRequired,
    name: PropTypes.string,
    status: PropTypes.number,
    nav: PropTypes.string,
    nameEng: PropTypes.string,
  }),
  dispatch: PropTypes.func.isRequired,
  basket: PropTypes.shape({
    basket: PropTypes.array.isRequired
  })
}
Basket.defaultProps = {
  catalog: PropTypes.shape({
    data: PropTypes.object,
  })
}

export default connect(mapStateToProps)(Basket)
