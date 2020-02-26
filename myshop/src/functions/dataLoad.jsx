﻿import React from 'react';
import isoFetch from 'isomorphic-fetch';

function dataLoad(url) {

//   isoFetch(url, {
//         method: 'get',
//         headers: {
//             "Accept": "application/json",
//         },
//     })
//         .then( response => { // response - HTTP-ответ
//             if (!response.ok)
//                 throw new Error("fetch error " + response.status); // дальше по цепочке пойдёт отвергнутый промис
//             else
//                 return response.json(); // дальше по цепочке пойдёт промис с пришедшими по сети данными
//         })
//         .then( data => {
          return function(Component) {
            return (
                <Component data={url} />
            );
          }; // передаём полезные данные в fetchSuccess, дальше по цепочке пойдёт успешный пустой промис
    //     })
    //     .catch( error => {
    //         console.log(error);
    //     })
    // ;
    // return function(Component) {
    //   return props => (
    //       <Component data={data} />
    //   );
    // };
}
export { dataLoad };