import React from 'react';
import { Route } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import '../styles/LeftContent.css';

class LeftContent extends React.Component {
    render() {
      return (
         <div className="col-3">
					<div className="main-list">
						<h5 className="main-story_title">Фильтр</h5>
                        <span>Цена</span>
                        <input type='text'/>
                        <input type='button' value='Применить'/>
					</div>
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