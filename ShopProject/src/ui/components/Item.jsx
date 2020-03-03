import React from "react";
import "../styles/MainContent.css";
import store from "../../redux/store";
import {ready_false} from "../../redux/catalogAC";
import { connect } from "react-redux";
import isoFetch from "isomorphic-fetch";

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
  }

  componentDidMount() {
    if(this.props.catalog.data===null || this.props.catalog.nameEng!==this.props.name) {
      isoFetch(this.props.url, {
        method: "get",
        headers: {
          Accept: "application/json"
        }
      })
        .then(response => {
          // response - HTTP-ответ
          if (!response.ok) throw new Error("fetch error " + response.status);
          // дальше по цепочке пойдёт отвергнутый промис
          else return response.json(); // дальше по цепочке пойдёт промис с пришедшими по сети данными
        })
        .then(data => {
          this.fetchSuccess(data);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }

  componentWillUnmount() {
    this.props.dispatch(ready_false());
  }

  fetchSuccess = (data, name) => {
    this.props.dispatch(this.props.catalogAC(data));
  };

  render() {
    let item, product;
    if (this.props.catalog.data !==null && this.props.catalog.nameEng===this.props.name) {
      item = this.props.catalog.data.products.find(
        (item, i) => item.id === this.props.id
      );
      product = (
        <div>
          <h5>{item.extended_name}</h5>
          <img src={item.images.header} />
        </div>
      );
    }
    return (
        <div>{product || "loaddddddddddddddddddddddddddddd"}</div>
    )
  }
}
const mapStateToProps = function(state) {
  return {
    catalog: state.catalog
  };
};
export default connect(mapStateToProps)(Item);
