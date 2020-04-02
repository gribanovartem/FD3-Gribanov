import React from 'react'
import '../styles/Footer.css'
import {NavLink} from "react-router-dom";

class Footer extends React.Component {
  render() {
    return (
      <div>
        <div className="row content">
          <div className="col-3 footer-logo">
            <div>
              <NavLink to="/">
                <img src="https://firebasestorage.googleapis.com/v0/b/shop-gribanov.appspot.com/o/logo.png?alt=media&token=735cbeb4-3e24-475b-868e-ae4f5f1f1ce4"/>
              </NavLink>
            </div>
            <p>Продажа строительного инструмента в Минске с доставкой по всей
              Беларуси</p>
          </div>
          <div className="col-6 footer-cat">
            <div className="footer-cat_item">
              <h5>Каталог</h5>
              <ul className="footer-cat_list">
                <li>
                  <NavLink to={`${"/drills/page/"}${1}`}>
                    Электродрели
                  </NavLink>
                </li>
                <li>
                  <NavLink to={`${"/rotaryhammers/page/"}${1}`}>
                    Перфораторы
                  </NavLink>
                </li>
                <li>
                  <NavLink to={`${"/electric_saw/page/"}${1}`}>
                    Дисковые пилы
                  </NavLink>
                </li>
                <li>
                  <NavLink to={`${"/fretsaw/page/"}${1}`}>
                    Электролобзики
                  </NavLink>
                </li>
                <li>
                  <NavLink to={`${"/plane/page/"}${1}`}>
                    Рубанки
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="footer-cat_item2">
              <h5>Покупателю</h5>
              <ul className="footer-cat_list">
                <li><a href="#">О компании</a></li>
                <li><NavLink to="/reviews">Отзывы</NavLink></li>
              </ul>
            </div>
          </div>
          <div className="col-3 footer-adress">

            <div className="footer-phone_number">
              <a href="">+375 29 555 55 55</a>
            </div>
            <p className="footer-phone_mail">
              <b>Email:</b> <a href="https://mail.ru/">zakaz@stroyinstrument.by</a><br/>
              <b>Адрес:</b> г. Минск ул. Промышленная 22б, офис 218
            </p>
            <div className="footer-social">
              <a href="https://www.facebook.com/" className="facebook" aria-label="facebook"><i className="fab fa-facebook-f" /></a>
              <a href="https://www.instagram.com/?hl=ru" className="instagram" aria-label="instagram"><i className="fab fa-instagram" /></a>
              <a href="https://vk.com/" className="vk" aria-label="vk"><i className="fab fa-vk" /></a>
            </div>

          </div>
        </div>
      </div>
    )
  }
}
export default Footer
