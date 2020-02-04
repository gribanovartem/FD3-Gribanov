import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import PagesLinks from './pages/PagesLinks';
import PagesRouter from './pages/PagesRouter'

ReactDOM.render(
    <BrowserRouter>
        <div>
            <PagesLinks />
            <PagesRouter />
        </div>
    </BrowserRouter>, document.getElementById('root')
);
