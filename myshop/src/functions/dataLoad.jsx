﻿import React from 'react';
import isoFetch from 'isomorphic-fetch';

function dataLoad(url, name) {
   isoFetch(url, {
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
              fetchSuccess(data);
            }) 
            .catch( error => {
              console.log(error);
            })

    
  };
  
export { dataLoad };