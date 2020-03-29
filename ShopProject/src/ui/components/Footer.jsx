import React from 'react'
import '../styles/Footer.css'

class Footer extends React.Component {
  render() {
    return (
      <div>
        <div className="row content">
          <div className="col-3 footer-logo">
            <div><a href="#"><img src="https://firebasestorage.googleapis.com/v0/b/shop-gribanov.appspot.com/o/logo.png?alt=media&token=735cbeb4-3e24-475b-868e-ae4f5f1f1ce4"/></a></div>
            <p>Наша творческая команда сделает<br/> Ваш
              интерьер красивее и уютнее</p>
          </div>
          <div className="col-7 footer-cat">
            <div className="footer-cat_item">
              <h5>Каталог</h5>
              <ul className="footer-cat_list">
                <li><a href="#">Модульные картины</a></li>
                <li><a href="#">Репродукции</a></li>
                <li><a href="#">Дизайнерские решения</a></li>
                <li><a href="#">Багетная мастерская</a></li>
                <li><a href="#">Другая фотопродукция</a></li>
                <li><a href="#">Дополнительные услуги</a></li>
              </ul>
            </div>
            <div className="footer-cat_item2">
              <h5>Покупателю</h5>
              <ul className="footer-cat_list">
                <li><a href="#">О компании</a></li>
                <li><a href="#">Доставка</a></li>
                <li><a href="#">Гарантия</a></li>
                <li><a href="#">Спецпредложения</a></li>
                <li><a href="#">Контакты</a></li>
                <li><a href="#">Отзывы</a></li>
              </ul>
            </div>
            <div className="footer-cat_item footer-cat_sub">
              <h5>Присоединяйтесь к нам!</h5>
              <p className="footer-cat_small">Вдохновляйтеcь нашими новыми идеями и предложениями!</p>
              <div className="footer-cat_subscribe">
                <div><input type="text" className="form-control" placeholder="Введите свой e-mail"/></div>
                <div>
                  <button className="form-control">Ок!</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-2 footer-adress">
            <div className="footer-phone_number"><a href="">+7 705 555 999 6</a></div>
            <p className="footer-phone_mail"><b>Email:</b> <a href="mailto:zakaz@holst.kz">zakaz@holst.kz</a><br/>
              <b>Адрес:</b> г. Алматы ул. Сатпаева 22б, офис 218</p>
            <div className="footer-social">
              <a href="#" className="facebook"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="instagram"><i className="fab fa-instagram"></i></a>
              <a href="#" className="vk"><i className="fab fa-vk"></i></a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Footer
