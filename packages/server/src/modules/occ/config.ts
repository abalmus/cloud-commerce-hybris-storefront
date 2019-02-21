import https from 'https';
import * as hybris from 'hybris-occ-client';

import { hybris as hybrisConfig } from '../../../../../config';

export interface OCCOptions {
    basePath?: string;
    defaultHeaders?: object;
    timeout?: number;
    cache?: boolean;
    enableCookies?: boolean;
    accessToken?: string;
}

export function apiProvider(headers: any, options?: OCCOptions) {
    const apiOption = {
        accessToken: headers.Authorization
    };

    hybris.ApiClient.instance = new hybris.ApiClient({
        basePath: hybrisConfig.api.sandbox,
        ...apiOption,
        ...options
    });

    return hybris;
}

export const defaultOptions = {
    agent: new https.Agent({
        rejectUnauthorized: false
    }),
    headers: {
        'Content-Type': 'application/json; charset=utf-8'
    }
};

export const dataTransformMap = {
    pageData(data: any) {
        data.contentSlots = data.contentSlots.contentSlot;

        data.contentSlots.map((slot: any) => {
            if (slot.components) {
                slot.components = slot.components.component || [];
            }
        });

        return data;
    }
};
