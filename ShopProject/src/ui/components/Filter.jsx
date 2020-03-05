import React from 'react';
import '../styles/LeftContent.css';
import { connect } from "react-redux";
import {filter_on, set_priceMin, set_priceMax, set_isOnSale} from "../../redux/filterAC";

class Filter extends React.Component {
    constructor(props) {
        super(props);
        // this.state = store.getState();
        this.priceMin = React.createRef();
        this.priceMax = React.createRef();
        this.isOnSale = React.createRef();
    }
    filterApply = () => {
        this.props.dispatch(filter_on());
        this.props.dispatch(set_priceMin(this.priceMin.current.value));
        this.props.dispatch(set_priceMax(this.priceMax.current.value));
        console.log(this.isOnSale.current.value);
        this.props.dispatch(set_isOnSale(this.isOnSale.current.value));
    };
    render() {
        console.log(this.props);
      return (
			<div className="main-list">
				<h5 className="main-story_title">Фильтр</h5>
                <span>Цена: </span><br/>
                <span>от</span>
                <input className='price' type='text' ref={this.priceMin}/><br/>
                <span>до</span>
                <input className='price' type='text' ref={this.priceMax}/><br/>
                <label>
                    На скидке 
                    <input type='checkbox' className='checkbox' ref={this.isOnSale}/>
                </label><br/>
                <button type="button" className="btn btn-success" onClick={this.filterApply}>Применить фильтр</button>
                <button type="button" className="btn btn-danger">Сбросить фильтр</button>
			</div>
      );
    }
}
const mapStateToProps = function(state) {
    return {
      filter: state.filter,
    };
};
export default connect(mapStateToProps)(Filter);