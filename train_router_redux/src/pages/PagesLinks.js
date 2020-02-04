import React from "react";
import { NavLink } from "react-router-dom";
import ShopList from '../shopList'
import './PageLinks.css'

class PagesLinks extends React.Component {
  render() {
    let mobiles = ShopList.map(item=>{
      return <NavLink key={item.id} to={"/mobile/"+item.id} className="PageLink" activeClassName="ActivePageLink">{item.name}</NavLink>
    })
    return (
      <div className='nav'>
        <NavLink to="/" exact className="PageLink" activeClassName="ActivePageLink">Главная</NavLink>
        <NavLink to="/allMobiles" className="PageLink" activeClassName="ActivePageLink">ALL MOBILES</NavLink>
        {mobiles}
      </div>
    );
  }
}
export default PagesLinks;
