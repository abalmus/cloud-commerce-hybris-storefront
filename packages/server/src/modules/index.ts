import commonModules from '../../../common/modules';
import cookies from './cookies';
import i18n from './i18n';
import user from './user';
import graphqlTypes from './graphqlTypes';
import occ from './occ';
import page from './page';
import product from './product';

import ServerModule from './ServerModule';

export default new ServerModule(commonModules, occ, cookies, i18n, user, graphqlTypes, page, product);
