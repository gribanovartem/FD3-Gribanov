import React from 'react'
import '../styles/Top.css'
import '../styles/all.css'

class Top extends React.Component {
  render() {
    return (
      <div className="top">
        <div className="content">
          <div className="row header-adress">
            <div className="col-4">
              <b>Адрес:</b> г. Минск ул. Промышленная 22б, офис 218
            </div>
            <div className="col-3 top-graphic">
              <b>График работы:</b> с 10:00 до 19:00
            </div>
            <div className="col-3 top-email">
              <b>Email:</b> <a href="https://mail.ru/">zakaz@stroyinstrument.by</a>
            </div>
            <div className="col-2 text-right header-social">
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
export default Top

