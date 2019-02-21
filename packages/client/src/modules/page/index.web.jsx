import React from 'react';
import { Route } from 'react-router-dom';
import ClientModule from '../ClientModule';
import Page from './containers/Page';

export default new ClientModule({
    route: [
        <Route exact path="/" component={Page} />
    ]
});
