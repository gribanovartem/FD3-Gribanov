import React from 'react';
import Mobile from '../components/Mobile'
import ShopList from '../shopList'

class Page_Mobiles extends React.PureComponent {
    render() {
        let mobiles = ShopList.map(item=>{
            return <Mobile key={item.id} id={item.id}/>
        })
        return (
            <div>
                {mobiles}
            </div>
        )
    }
}
export default Page_Mobiles;