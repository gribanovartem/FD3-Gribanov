import React from 'react';
import { NavLink } from "react-router-dom";
import '../styles/MainContent.css';
import '../styles/Media.css';
import store from '../../redux/store';
import { ready_false, ready_true} from '../../redux/catalogAC';
import {connect} from 'react-redux';
import isoFetch from 'isomorphic-fetch';
import Loading from './Loading';
import PagesNav from './PagesNav';

class CategoryContent extends React.Component {
	constructor(props) {
        super(props);
        this.state = store.getState();
    }
    componentDidMount() {
		if(this.props.catalog.nameEng!==this.props.name||this.props.catalog.data===null) {
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
		console.log(this.props);
		let catalog;
		if(!this.props.filter.isFilter) {
			if(this.props.catalog.data !==null && this.props.catalog.nameEng===this.props.name) {
				catalog = this.props.catalog.data.products.map((item,i)=> {
					if(i<=this.props.page*10-1 && i>=this.props.page*10-10) {
						return <NavLink to={this.props.catalog.nav + '/' +item.id} className="col-6" key={item.key}>
									<h4>{item.full_name}</h4>
									<img src={item.images.header}/>
									<p>Цена: {item.prices.price_min.amount}</p>
								</NavLink>
					}
				})
			}
		} else {
			catalog = this.props.filter.newCatalog.map((item,i)=> {
				if(i<=this.props.page*10-1 && i>=this.props.page*10-10) {
					return <NavLink to={this.props.catalog.nav + '/' +item.id} className="col-6" key={item.key}>
								<h4>{item.full_name}</h4>
								<img src={item.images.header}/>
								<p>Цена: {item.prices.price_min.amount}</p>
							</NavLink>
				}
			})
		}
		
		
      return (
		
				<div className="col-9">
					{this.props.page &&
					 this.props.catalog.nameEng===this.props.name &&
					 this.props.catalog.data !==null &&
					  <PagesNav 
					  name={this.props.name}
					  pagesCount={Math.ceil(this.props.filter.isFilter?this.props.filter.newCatalog.length/10:this.props.catalog.data.products.length/10)} 
					  page={this.props.page}/>
					}
					<h1>{this.props.catalog.name}</h1>
					<div className="row main-mashit">
						{catalog||<Loading/>}
					</div>
					{this.props.page &&
					 this.props.catalog.nameEng===this.props.name &&
					 this.props.catalog.data !==null &&
					  <PagesNav 
					  name={this.props.name} 
					  pagesCount={Math.ceil(this.props.filter.isFilter?this.props.filter.newCatalog.length/10:this.props.catalog.data.products.length/10)} 
					  page={this.props.page}/>
					}
                </div>
      );
    }
  }

  const mapStateToProps = function (state) {
    return {
	  catalog: state.catalog,
	  filter: state.filter,
    };
  };
export default connect(mapStateToProps)(CategoryContent);