import React from 'react';
import { NavLink } from "react-router-dom";
import '../styles/MainContent.css';
import '../styles/Media.css';
import store from '../../redux/store';
import { ready_false, ready_true} from '../../redux/catalogAC';
import {connect} from 'react-redux';
import isoFetch from 'isomorphic-fetch';
import Loading from './Loading';

class CategoryContent extends React.Component {
	constructor(props) {
        super(props);
        this.state = store.getState();
    }
    componentDidMount() {
		if(this.props.catalog.nameEng!==this.props.name) {
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
		} else {
			this.props.dispatch(ready_true());
		}
		
    }
    componentWillUnmount() {
        this.props.dispatch(ready_false());
    }
	fetchSuccess=(data)=> {
        this.props.dispatch(this.props.catalogAC(data));
	}
    render() {
		let catalog;
		if(this.props.catalog.status===1&&this.props.catalog.ready) {
			catalog = this.props.catalog.data.products.map((item,i)=> (
						<NavLink to={this.props.catalog.nav + '/' +item.id} className="col-6" key={item.key}>
							<h4>{item.full_name}</h4>
							<img src={item.images.header}/>
                            <p>Цена: {item.prices.price_min.amount}</p>
						</NavLink>
			))
		}
		
      return (
				<div className="col-9">
					<h1>{this.props.catalog.name}</h1>
					<div className="row main-mashit">
						{catalog||<Loading/>}
					</div>
                </div>
      );
    }
  }

  const mapStateToProps = function (state) {
    return {
      catalog: state.catalog,
    };
  };
export default connect(mapStateToProps)(CategoryContent);