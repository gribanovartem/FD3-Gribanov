import React from 'react';
import '../styles/PageHeader.css'


class PageHeader extends React.Component {
  render() {
    return (
      <div className="top">
			<div className="content">
				<div className="row header-adress">
					<div className="col-4">
						<b>Адрес:</b> г. Алматы ул. Сатпаева 22б, офис 218
					</div>
					<div className="col-3 top-graphic">
						<b>График работы:</b> с 10:00 до 19:00
					</div>
					<div className="col-3 top-email">
						<b>Email:</b> <a href="#">zakaz@holst.kz</a>
					</div>
					<div className="col-2 text-right header-social">
						<a href="#" className="facebook"><i className="fab fa-facebook-f"></i></a>
						<a href="#" className="instagram"><i className="fab fa-instagram"></i></a>
						<a href="#" className="vk"><i className="fab fa-vk"></i></a>
					</div>
				</div>
			</div>
		</div>
    );
  }
}
export default PageHeader;