import React from 'react';
import { Route } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import '../styles/MainContent.css';
import  {dataLoad}  from '../../functions/dataLoad';
import store from '../../redux/store';
import { catalog_drills, catalog_all} from '../../redux/catalogAC';
import {connect} from 'react-redux';
import isoFetch from 'isomorphic-fetch';

class MainContent extends React.PureComponent {
	constructor(props) {
        super(props);
        this.state = store.getState();
    }
    componentDidMount() {
		isoFetch('https://firebasestorage.googleapis.com/v0/b/shop-gribanov.appspot.com/o/catalog.json?alt=media&token=4a8c44da-6936-4463-aa57-85193027c1cb', {
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
	fetchSuccess=(data,name)=> {
		this.props.dispatch(catalog_all(data));
	}
    render() {
		let catalog;
		if(this.props.catalog.ready) {
			
			catalog = this.props.catalog.data.map((item,i)=> (
				<div className="col-6" key={i}>
						<NavLink to={item.url}>
							<h4>{item.name}</h4>
							<img src={item.img}/>
						</NavLink>
				</div>
			))
		}
		
      return (
				<div className="col-9">
					<h1>{this.props.catalog.name}</h1>
					<div className="row main-mashit">
						{catalog}
					</div>
                </div>
      );
    }
  }

  const mapStateToProps = function (state) {
    return {
      // весь раздел Redux state под именем counters будет доступен
      // данному компоненту как this.props.counters
      catalog: state.catalog,
    };
  };
export default connect(mapStateToProps)(MainContent);
//   export default MainContent;