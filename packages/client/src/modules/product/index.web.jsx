import React from 'react';
import { Route } from 'react-router-dom';
import ClientModule from '../ClientModule';
import ProductPage from './containers/ProductPanel';

export default new ClientModule({
    route: [
        <Route path="/product/:code" component={ProductPage} />
    ]
});
