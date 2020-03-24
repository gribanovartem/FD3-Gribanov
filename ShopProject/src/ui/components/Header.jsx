import React from 'react'
import {NavLink} from "react-router-dom"
import '../styles/Header.css'
import PropTypes from "prop-types"
import {connect} from 'react-redux'

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
    }
  }
  showMenu=()=> {
    this.setState((prevState) => ({ show: !prevState.show }))
  }
  render() {
    return (
      <header>
        <div className="content">
          <div className="row header-main">
            <div className="col-5 header-logo">
              <div>
                <NavLink to="/">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/shop-gribanov.appspot.com/o/logo.png?alt=media&token=735cbeb4-3e24-475b-868e-ae4f5f1f1ce4"
                    alt="Логотип"/>
                </NavLink>
              </div>
              <div className="header-logo_text">Продажа строительного инструмента в Минске с доставкой по всей
                Беларуси
              </div>
            </div>
            <div className="col-3 text-right header-phone">
              <div className="header-phone_number"><p>+375 29 555 55 55</p></div>
              <div className="header-phone_button">
                <button type="button">Заказать звонок</button>
              </div>
            </div>
            <div className="col-4 header-basket text-right">
              <div className="header-basket_body">
                <NavLink to="/basket">
                  <img className="basketImg"
                       src="https://firebasestorage.googleapis.com/v0/b/shop-gribanov.appspot.com/o/shopping-cart_icon-icons.com_69303.png?alt=media&token=0f8d2629-ecd6-4210-93e4-d23c1199f52f"
                       alt="basket"/>
                </NavLink>
                <p>Товаров в корзине {this.props.basket.basket.length}</p>
              </div>
            </div>
          </div>
          <nav className="navbar-expand-lg">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar"
                    onClick={this.showMenu}>
              <i className="fas fa-bars"/>
            </button>
            <ul
              className={this.state.show ? "collapse navbar-collapse navbar nav show" : "collapse navbar-collapse navbar nav"}
              id="collapsibleNavbar">
              <NavLink to={`${"/drills/page/"}${1}`}
                       className={this.props.catalog.nameEng === 'drills' ? 'active' : null}>Электродрели и
                дрели-шуруповерты</NavLink>
              <NavLink to={`${"/rotaryhammers/page/"}${1}`}
                       className={this.props.catalog.nameEng === 'rotaryhammers' ? 'active' : null}>Перфораторы</NavLink>
              <NavLink to={`${"/electric_saw/page/"}${1}`}
                       className={this.props.catalog.nameEng === 'electric_saw' ? 'active' : null}>Дисковые
                пилы</NavLink>
              <NavLink to={`${"/fretsaw/page/"}${1}`}
                       className={this.props.catalog.nameEng === 'fretsaw' ? 'active' : null}>Электролобзики</NavLink>
              <NavLink to={`${"/plane/page/"}${1}`}
                       className={this.props.catalog.nameEng === 'plane' ? 'active' : null}>Рубанки</NavLink>
            </ul>
          </nav>
        </div>
      </header>
    )
  }
}
const mapStateToProps = function (state) {
  return {
    catalog: state.catalog,
    basket: state.basket,
  }
}
Header.propTypes = {
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
}
Header.defaultProps = {
  catalog: PropTypes.shape({
    data: PropTypes.object,
  }),
};
export default connect(mapStateToProps)(Header)

