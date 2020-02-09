import React from 'react';
import './Page_About.css';
import isoFetch from 'isomorphic-fetch';

class Page_About extends React.PureComponent {
    componentDidMount() {
        isoFetch("https://catalog.onliner.by/sdapi/catalog.api/search/notebook", {
        method: 'get',
        headers: {
            "Accept": "application/json",
        },
    })
        .then( response => { // response - HTTP-ответ
            if (!response.ok)
                throw new Error("fetch error " + response.status); // дальше по цепочке пойдёт отвергнутый промис
            else
                return response.json(); // дальше по цепочке пойдёт промис с пришедшими по сети данными
        })
        .then( data => {
            console.log(data);
            // this.fetchSuccess(data); // передаём полезные данные в fetchSuccess, дальше по цепочке пойдёт успешный пустой промис
        })
        .catch( error => {
            this.fetchError(error.message);
        })
    ;
    }
    render() {
        return (
            <div className='title'>
                <h1>Мобильные телефоны</h1>
            </div>
        )
    }
}
export default Page_About;