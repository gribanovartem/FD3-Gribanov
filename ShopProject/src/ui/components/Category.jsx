import React from 'react';
import { Route } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import '../styles/MainContent.css';
import  {dataLoad}  from '../../functions/dataLoad';

class Category extends React.Component {
    componentDidMount() {
		
	}
    render() {
      return (
         
			
				<div className="col-9">
					<h1>Интернет-магазин модульных картин и постеров</h1>
					<div className="row main-mashit">
						<div className="col-6">
                            <a><img src='//content2.onliner.by/catalog/device/header/4a7ed6112eec000196cef35cc0c90a13.jpeg'/></a>
							<h4>Электродрели и дрели-шуруповерты</h4>
						</div>
						<div className="col-6">
							<h4>Пейзаж</h4>
						</div>
						<div className="col-6">
							<h4>Города</h4>
						</div>
						<div className="col-6">
							<h4>Животный мир</h4>
						</div>
						<div className="col-6">
							<h4>Цветы, растения</h4>
						</div>
						<div className="col-6">
							<h4>Космос</h4>
						</div>
						<div className="col-6">
							<h4>На кухню</h4>
						</div>
						<div className="col-6">
							<h4>Картины маслом (репродукции)</h4>
						</div>
					</div>
                </div>
            
         
      );
    }
  }
  export default Category;