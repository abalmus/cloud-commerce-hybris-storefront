import { PubSub } from 'graphql-subscriptions';

interface PageParams {
    code: string;
    fields: string;
    pageLabelOrId: string;
    pageType: string;
}

export default (pubsub: PubSub) => ({
    Query: {
        async page(obj: any, params: PageParams, { PageService }: any) {
            const result = await PageService.page(params);
            return result;
        }
    }
});
