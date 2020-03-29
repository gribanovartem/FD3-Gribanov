import React from "react"
import { NavLink } from "react-router-dom"
import "../styles/MainContent.css"
import "../styles/Media.css"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import isoFetch from "isomorphic-fetch"
import store from "../../redux/store"
import { catalog_all, ready_false } from "../../redux/catalogAC"
import Loading from "./Loading"

class MainContent extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = store.getState()
  }

  componentDidMount() {
    isoFetch(
      "https://firebasestorage.googleapis.com/v0/b/shop-gribanov.appspot.com/o/catalog.json?alt=media&token=4a8c44da-6936-4463-aa57-85193027c1cb",
      {
        method: "get",
        headers: {
          Accept: "application/json",
        },
      },
    )
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

  componentWillUnmount() {
    this.props.dispatch(ready_false())
  }

  fetchSuccess = (data) => {
    this.props.dispatch(catalog_all(data))
  };

  render() {
    let catalog
    if (this.props.catalog.nameEng === "all") {
      catalog = this.props.catalog.data.map((item) => {
        return (
          <NavLink
            to={`${item.url}/page/${1}`}
            key={item.name}
            className="col-6"
          >
            <h4>{item.name}</h4>
            <img src={item.img} alt="img" />
          </NavLink>
        )
      })
    }
    return (
      <div className="col-9">
        <h1>{this.props.catalog.name}</h1>
        <div className="row main-mashit">{catalog || <Loading />}</div>
      </div>
    )
  }
}

const mapStateToProps = function (state) {
  return {
    catalog: state.catalog,
  }
}
MainContent.propTypes = {
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
}
MainContent.defaultProps = {
  catalog: PropTypes.shape({
    data: PropTypes.object,
  }),
}
export default connect(mapStateToProps)(MainContent)
