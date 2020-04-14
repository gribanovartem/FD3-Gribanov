import React from "react"
import { NavLink } from "react-router-dom"
import "../styles/MainContent.css"
import "../styles/Media.css"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import isoFetch from "isomorphic-fetch"
import store from "../../redux/store"
import {catalog_off, ready_false, ready_true} from "../../redux/catalogAC"
import { filter_off, set_priceMin, set_priceMax } from "../../redux/filterAC"
import Loading from "./Loading"
import PagesNav from "./PagesNav"
import "firebase/storage"
import { Card } from 'antd'

const { Meta } = Card


class CategoryContent extends React.Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
  }

  componentDidMount() {
    if(this.props.name!==this.props.catalog.nameEng) {
      this.filterReset()
    }
    if (
      this.props.catalog.nameEng !== this.props.name
      || this.props.catalog.data === null
    ) {
      isoFetch(this.props.url, {
        method: "get",
        headers: {
          Accept: "application/json",
        },
      })
        .then((response) => {
          // response - HTTP-ответ
          if (!response.ok) throw new Error(`fetch error ${response.status}`)
          // дальше по цепочке пойдёт отвергнутый промис
          else return response.json() // дальше по цепочке пойдёт промис с пришедшими по сети данными
        })
        .then((data) => {
          this.fetchSuccess(data)
        })
        .catch((error) => {
          console.log(error)
        })
    } else {
      this.props.dispatch(ready_true())
    }
  }

  filterReset = () => {
    this.props.dispatch(filter_off())
    this.props.dispatch(set_priceMin(null))
    this.props.dispatch(set_priceMax(null))
  }

  componentWillUnmount() {
    this.props.dispatch(ready_false())
    this.props.dispatch(catalog_off())
  }

  fetchSuccess = (data) => {
    this.props.dispatch(this.props.catalogAC(data))
  };

  render() {
    let catalog
    if (!this.props.filter.isFilter) {
      if (
        this.props.catalog.data !== null
        && this.props.catalog.nameEng === this.props.name
      ) {
        catalog = this.props.catalog.data.products.map((item, i) => {
          if (i <= this.props.page * (this.props.name==='plane'?50:10) - 1 && i >= (this.props.name==='plane'?this.props.page * 50 - 50:this.props.page * 10 - 10)) {
            let priceSale = <p>Цена: <span className='beforeSale'>{item.prices.price_max.amount}</span> <span className='afterSale'>{item.prices.price_min.amount}</span></p>
            let priceNoSale = <p>Цена: {item.prices.price_min.amount}</p>
            return (
              <NavLink
                to={`${this.props.catalog.nav}/${item.id}`}
                className="col-6"
                key={item.key}
              >
                <Card
                  hoverable
                  style={{ width: 400 }}
                  cover={<img alt="img" src={item.images.header} />}
                >
                  <Meta title={item.full_name} description={item.sale.is_on_sale?priceSale:priceNoSale} />
                </Card>
              </NavLink>

            );
          }  else return null
        })
      }
    } else {
      catalog = this.props.filter.newCatalog.map((item, i) => {
        if (i <= this.props.page * (this.props.name==='plane'?50:10) - 1 && i >= (this.props.name==='plane'?this.props.page * 50 - 50:this.props.page * 10 - 10)) {
          let priceSale = <p>Цена: <span className='beforeSale'>{item.prices.price_max.amount}</span> <span className='afterSale'>{item.prices.price_min.amount}</span></p>
          let priceNoSale = <p>Цена: {item.prices.price_min.amount}</p>
          return (
            <NavLink
              to={`${this.props.catalog.nav}/${item.id}`}
              className="col-6"
              key={item.key}
            >
              <Card
                hoverable
                style={{ width: 400 }}
                cover={<img alt="img" src={item.images.header} />}
              >
                <Meta title={item.full_name} description={item.sale.is_on_sale?priceSale:priceNoSale} />
              </Card>
            </NavLink>
          );
        }  else return null
      })
    }

    return (
      <div className="col-9">
        {this.props.page
          && this.props.catalog.nameEng === this.props.name
          && this.props.catalog.data !== null && (
            <PagesNav
              name={this.props.name}
              pagesCount={Math.ceil(
                this.props.filter.isFilter
                  ? this.props.filter.newCatalog.length / (this.props.name==='plane'?50:10)
                  : this.props.catalog.data.products.length / (this.props.name==='plane'?50:10),
              )}
              page={this.props.page}
            />
        )}
        <h1>{this.props.catalog.name}</h1>
        <div className="row main-mashit">{catalog || <Loading />}</div>
        {this.props.page
          && this.props.catalog.nameEng === this.props.name
          && this.props.catalog.data !== null && (
            <PagesNav
              name={this.props.name}
              pagesCount={Math.ceil(
                this.props.filter.isFilter
                  ? this.props.filter.newCatalog.length / (this.props.name==='plane'?50:10)
                  : this.props.catalog.data.products.length / (this.props.name==='plane'?50:10),
              )}
              page={this.props.page}
            />
        )}
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
CategoryContent.propTypes = {
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
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  catalogAC: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  filter: PropTypes.shape({
    newCatalog: PropTypes.array,
    isFilter: PropTypes.bool.isRequired,
  }),
}
CategoryContent.defaultProps = {
  catalog: PropTypes.shape({
    data: PropTypes.object,
  }),
  filter: PropTypes.object,
}
export default connect(mapStateToProps)(CategoryContent)
