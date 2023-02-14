import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import CartState from './Context/Cart/CartState';


const root = createRoot( document.getElementById('root'));

root.render( <CartState>
    <App/>
</CartState>);

serviceWorker.unregister();
//////////https://github.com/TommmyKelly/shoping-cart-with-context-api/tree/main/

////////////https://www.youtube.com/watch?v=BmVVkpCBWpQ