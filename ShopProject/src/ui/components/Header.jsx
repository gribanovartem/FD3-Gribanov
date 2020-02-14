import React from 'react';
import { NavLink } from "react-router-dom";
import '../styles/Header.css';

class Header extends React.Component {
    render() {
      return (
        <header>
            <div className="content">
                <div className="row header-main">
                    <div className="col-5 header-logo">
                        <div>
                            <a href="#"><img src="../../assets/img/logo.png" alt="Логотип"/></a>
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
                        <li className="active"><a href="#">Модульные картинки</a></li>
                        <li><NavLink to="/drills" >Электродрели и дрели-шуруповерты</NavLink></li>
                        <li><a href="#">Дизайнерские решения</a></li>
                        <li><a href="#">Багетная мастерская</a></li>
                        <li><a href="#">Другая фотопродукция</a></li>
                        <li><a href="#">Услуги</a></li>
                        <li><a href="#">Спецпредложения</a></li>
                    </ul>
                </nav>
            </div>
        </header>
      );
    }
  }
  export default Header;

