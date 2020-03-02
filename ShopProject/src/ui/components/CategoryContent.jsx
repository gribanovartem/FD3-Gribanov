import React from 'react';
import { Route } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import '../styles/MainContent.css';
import  {dataLoad}  from '../../functions/dataLoad';
import store from '../../redux/store';
import { catalog_drills, catalog_all, ready_false} from '../../redux/catalogAC';
import {connect} from 'react-redux';
import isoFetch from 'isomorphic-fetch';

class CategoryContent extends React.Component {
	constructor(props) {
        super(props);
        this.state = store.getState();
    }
    componentDidMount() {
		isoFetch(this.props.url, {
			method: 'get',
			headers: {
			  "Accept": "application/json",
			},
		  })
		  .then( response => { // response - HTTP-ответ
			  if (!response.ok)
				  throw new Error("fetch error " + response.status); // дальше по цепочке пойдёт отвергнутый промис
			  else
				  return response.json(); // дальше по цепочке пойдёт промис с пришедшими по сети данными
		  })
		  .then( data => {
			this.fetchSuccess(data);
		  }) 
		  .catch( error => {
			console.log(error);
		  })
    }
    componentWillUnmount() {
        this.props.dispatch(ready_false());
    }
	fetchSuccess=(data,name)=> {
        this.props.dispatch(this.props.catalogAC(data));
	}
    render() {
		let catalog;
		if(this.props.catalog.status===1&&this.props.catalog.ready) {
			catalog = this.props.catalog.data.products.map((item,i)=> (
				<div className="col-6" key={item.key}>
						<NavLink to={this.props.catalog.nav + '/' +item.id}>
							<h4>{item.extended_name}</h4>
							<img src={item.images.header}/>
                            <p>Цена: {item.prices.price_min.amount}</p>
						</NavLink>
				</div>
			))
		}
		
      return (
				<div className="col-9">
					<h1>{this.props.catalog.name}</h1>
					<div className="row main-mashit">
						{catalog||'loaddddddddddddddddddddddddddddddddddd'}
					</div>
                </div>
      );
    }
  }

  const mapStateToProps = function (state) {
    return {
      // весь раздел Redux state под именем catalog будет доступен
      // данному компоненту как this.props.catalog
      catalog: state.catalog,
    };
  };
export default connect(mapStateToProps)(CategoryContent);