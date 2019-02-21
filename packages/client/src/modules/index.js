
import pageModule from './page';
import productModule from './product';
import commonModules from '../../../common/modules';
import defaultRouter from './defaultRouter';
import i18n from './i18n';
import user from './user';
import pageNotFound from './pageNotFound';

import './favicon';

import ClientModule from './ClientModule';

export default new ClientModule(
    pageModule,
    productModule,
    commonModules,
    defaultRouter,
    i18n,
    pageNotFound,
    user
);
