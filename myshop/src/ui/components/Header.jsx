import React from 'react';
import { NavLink } from "react-router-dom";
import '../styles/Header.css';
import {connect} from 'react-redux';

class Header extends React.Component {
    
    render() {
      return (
        <header>
            <div className="content">
                <div className="row header-main">
                    <div className="col-5 header-logo">
                        <div>
                        <NavLink to="/" >
                            <img src="../../assets/img/logo.png" alt="Логотип"/>
                        </NavLink>
                        </div>
                        <div className="header-logo_text">Продажа строительного инструмента в Минске с доставкой по всей Беларуси</div>
                    </div>
                    <div className="col-4 header-search">
                        <div className="header-search_body">
                            <div><input type="text" className="form-control" placeholder="Поиск по сайту"/></div>
                            <div><button className="form-control"><i className="fas fa-search"></i></button></div>
                        </div>
                    </div>
                    <div className="col-3 text-right header-phone">
                        <div className="header-phone_number"><a href="">+375 29 555 55 55</a></div>
                        <div className="header-phone_button"><a href="#">Заказать звонок</a></div>
                    </div>
                </div>
                <nav className="navbar-expand-lg">
                    <div className="nav-back">
                        <a>
                            <i className="fas fa-arrow-right"></i>
                        </a>
                    </div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                        <i className="fas fa-bars"></i>
                    </button>
                    <ul className="collapse navbar-collapse navbar nav" id="collapsibleNavbar">
                        <NavLink to={"/drills"+'/'+'page'+'/'+1} className={this.props.catalog.nameEng==='drills'?'active':null}>Электродрели и дрели-шуруповерты</NavLink>
                        <NavLink to={"/rotaryhammers"+'/'+'page'+'/'+1} className={this.props.catalog.nameEng==='rotaryhammers'?'active':null}>Перфораторы</NavLink>
                        <NavLink to={"/electric_saw"+'/'+'page'+'/'+1} className={this.props.catalog.nameEng==='electric_saw'?'active':null}>Дисковые пилы</NavLink>
                        <NavLink to={"/fretsaw"+'/'+'page'+'/'+1} className={this.props.catalog.nameEng==='fretsaw'?'active':null}>Электролобзики</NavLink>
                        <NavLink to={"/plane"+'/'+'page'+'/'+1} className={this.props.catalog.nameEng==='plane'?'active':null}>Рубанки</NavLink>
                    </ul>
                </nav>
            </div>
        </header>
      );
    }
  }
  const mapStateToProps = function (state) {
    return {
      catalog: state.catalog,
    };
  };
export default connect(mapStateToProps)(Header);

