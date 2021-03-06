import React from 'react'
import '../styles/LeftContent.css'
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { filter_on, filter_off, set_priceMin, set_priceMax, set_isOnSaleTrue, set_isOnSaleFalse, set_newCatalog } from "../../redux/filterAC"

class Filter extends React.Component {
  constructor(props) {
    super(props)
    this.priceMin = React.createRef()
    this.priceMax = React.createRef()
    this.isOnSale = React.createRef()
    this.state={
      checked: false,
    }
  }

    filterApply = () => {
      this.props.dispatch(filter_on())
      this.props.dispatch(set_priceMin(this.priceMin.current.value))
      this.props.dispatch(set_priceMax(this.priceMax.current.value))
      const newCatalog = []
      const { products } = this.props.catalog.data
      for (let i=0; i<products.length; i++) {
        if ( typeof Number(this.priceMin.current.value) === 'number'&& typeof Number(this.priceMax.current.value) === 'number') {
          if (Number(this.priceMax.current.value)===0&&Number(this.priceMin.current.value)!==0&&Number(products[i].prices.price_min.amount)>=Number(this.priceMin.current.value)&&this.state.checked===products[i].sale.is_on_sale) {
            newCatalog.push(products[i])
          }
          if (Number(this.priceMin.current.value)===0&&Number(this.priceMax.current.value)!==0&&Number(products[i].prices.price_min.amount)<=Number(this.priceMax.current.value)&&this.state.checked===products[i].sale.is_on_sale) {
            newCatalog.push(products[i])
          }
          if (Number(this.priceMin.current.value)!==0&&Number(this.priceMax.current.value)!==0&&Number(products[i].prices.price_min.amount)>=Number(this.priceMin.current.value)&&Number(products[i].prices.price_min.amount)<=Number(this.priceMax.current.value)&&this.state.checked===products[i].sale.is_on_sale) {
            newCatalog.push(products[i])
          }
          if (Number(this.priceMax.current.value)===0&&Number(this.priceMin.current.value)===0&&this.state.checked===products[i].sale.is_on_sale) {
            newCatalog.push(products[i])
          }
        }
      }
      this.props.dispatch(set_newCatalog(newCatalog))
    };

    filterReset = () => {
      this.props.dispatch(filter_off())
      this.props.dispatch(set_priceMin(null))
      this.priceMin.current.value=null
      this.props.dispatch(set_priceMax(null))
      this.priceMax.current.value=null
      this.setState({ checked: false })
    }

    check=() => {
      if (!this.props.filter.isOnSale) {
        this.props.dispatch(set_isOnSaleTrue())
      } else {
        this.props.dispatch(set_isOnSaleFalse())
      }
      this.setState((prevState) => ({ checked: !prevState.checked }))
    }

    render() {
      return (
        <div className="main-list">
          <h5 className="main-story_title">Фильтр</h5>
          <span>Цена: </span><br />
          <span>от</span>
          <input className="price" type="text" ref={this.priceMin} /><br />
          <span>до</span>
          <input className="price" type="text" ref={this.priceMax} /><br />
          <label htmlFor="check">
            На скидке 
            <input id="check" type="checkbox" className="checkbox" ref={this.isOnSale} onChange={this.check} checked={this.state.checked} />
          </label><br />
          <button type="button" className="btn btn-success" onClick={this.filterApply}>Применить фильтр</button>
          <button type="button" className="btn btn-danger" onClick={this.filterReset}>Сбросить фильтр</button>
        </div>
      )
    }
}
const mapStateToProps = function (state) {
  return {
    catalog: state.catalog,
    filter: state.filter,
  }
}
Filter.propTypes = {
  catalog: PropTypes.shape({
    data: PropTypes.shape({
      products: PropTypes.array,
    }),
  }),
  filter: PropTypes.shape({
    isOnSale: PropTypes.bool,
  }),
  dispatch: PropTypes.func.isRequired,
}
Filter.defaultProps = {
  catalog: PropTypes.object,
  filter: PropTypes.object,
}
export default connect(mapStateToProps)(Filter)