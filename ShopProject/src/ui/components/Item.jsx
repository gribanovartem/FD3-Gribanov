import React from "react"
import "../styles/MainContent.css"
import '../styles/Media.css'
import PropTypes from "prop-types"
import { connect } from "react-redux"
import isoFetch from "isomorphic-fetch"
import store from "../../redux/store"
import { ready_false } from "../../redux/catalogAC"

class Item extends React.Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
  }

  componentDidMount() {
    if (this.props.catalog.data===null || this.props.catalog.nameEng!==this.props.name) {
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
    }
  }

  componentWillUnmount() {
    this.props.dispatch(ready_false())
  }

  fetchSuccess = (data) => {
    this.props.dispatch(this.props.catalogAC(data))
  };

  render() {
    let item, 
      product
    if (this.props.catalog.data !==null && this.props.catalog.nameEng===this.props.name) {
      item = this.props.catalog.data.products.find(
        (item) => item.id === this.props.id,
      )
      product = (
        <div>
          <h5>{item.extended_name}</h5>
          <img src={item.images.header} alt="img" />
          <p>{item.description}</p>
          <p className="price">{item.prices.price_min.amount} руб.</p>
          <button type="button" className="btn btn-warning">В корзину</button>
        </div>
      )
    }
    return (
      <div className="col-9">{product || "loaddddddddddddddddddddddddddddd"}</div>
    )
  }
}
const mapStateToProps = function (state) {
  return {
    catalog: state.catalog,
    filter: state.filter,
  }
}
Item.propTypes = {
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
  id: PropTypes.number.isRequired,
}
Item.defaultProps = {
  catalog: PropTypes.shape({
    data: PropTypes.object,
  }),
}
export default connect(mapStateToProps)(Item)
