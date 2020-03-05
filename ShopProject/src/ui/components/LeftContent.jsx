import React from 'react';
import '../styles/LeftContent.css';
import Filter from './Filter';

class LeftContent extends React.Component {
    render() {
      return (
         <div className="col-3">
					<Filter/>
					<h5 className="main-orange2">Отзывы о Магазине</h5>
					<div className="main-story">
						<div className="main-story_title">Ксения, г. Минск</div>
						<p>Быстро обработали и привезли заказ, с курьером можно рассчитаться картой,
                             что для меня огромный плюс. Благодаря этому, скорее всего буду заказывать здесь и дальше.</p>
					</div>
                    <div className="main-story">
						<div className="main-story_title">Ксения, г. Минск</div>
						<p>Быстро обработали и привезли заказ, с курьером можно рассчитаться картой,
                             что для меня огромный плюс. Благодаря этому, скорее всего буду заказывать здесь и дальше.</p>
					</div>
					<div className="main-more">
						<div className="main-more_button"><a href="#">Все отзывы</a></div>
						<div className="main-more_add">
							<a href="#">Добавить отзыв</a>
						</div>
					</div>
		</div>
      );
    }
  }
  export default LeftContent;