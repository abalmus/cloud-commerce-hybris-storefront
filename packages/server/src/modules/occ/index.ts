import * as hybris from 'hybris-occ-client';
import ServerModule from '../ServerModule';
import AuthService from './AuthService';

import { hybris as hybrisConfig } from '../../../../../config';

export interface OCCOptions {
    basePath?: string;
    defaultHeaders?: object;
    timeout?: number;
    cache?: boolean;
    enableCookies?: boolean;
    accessToken?: string;
}

class OCC {
    public hybris: any;
    public usersService: any;
    public productService: any;

    constructor(options: OCCOptions = {}) {
        this.hybris = this.applyToken(options);
    }

    public applyToken(options?: OCCOptions = {}): hybris {
        hybris.ApiClient.instance = new hybris.ApiClient({
            basePath: hybrisConfig.api.sandbox,
            ...options
        });

        return hybris;
    }
}

const makeApi = (apiName: string, req: Request) => {
    let OccInstance = null;

    if (req.session && req.session.accessToken) {
        OccInstance = new OCC({
            // accessToken: req.session.accessToken
        });
    } else {
        OccInstance = new OCC({});
    }

    return new OccInstance.hybris[apiName]();
};

export const addOCCToContext = ({ req, context, ...rest }: any) => {
    console.log('OCC Context called', req.session);

    return {
        AuthService,
        UsersApi: (req: Request) => makeApi('UsersApi', req),
        ProductsApi: (req: Request) => makeApi('ProductsApi', req)
    };
};

export default new ServerModule({
    createContextFunc: [addOCCToContext]
});
