// import ProductService from '../occ/ProductService';
import schema from './schema.graphql';
import createResolvers from './resolvers';
// import { apiProvider } from '../occ/config';

import ServerModule from '../ServerModule';

// const createContext = ({ req }: any) => {
//     const ProductsApi = apiProvider(req.headers).ProductsApi;
//
//     return {
//         ProductService: new ProductService(new ProductsApi())
//     }
// };

export default new ServerModule({
    schema: [schema],
    createResolversFunc: [createResolvers]
    // createContextFunc: [createContext]
});
