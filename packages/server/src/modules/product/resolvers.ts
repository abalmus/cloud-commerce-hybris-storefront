import { PubSub } from 'graphql-subscriptions';

interface ProductParams {
    code: string;
}

export default (pubsub: PubSub) => ({
    Query: {
        async products(obj: any, args: any, { ProductsApi, req }: any) {
            const result = await ProductsApi(req).search();
            return result;
        },

        async product(obj: any, { code }: ProductParams, { ProductsApi, req }: any) {
            console.log('ProductService called');
            const result = await ProductsApi(req).getProduct(code);
            return result;
        }
    }
});
