import fetch from 'node-fetch';
import { defaultOptions, dataTransformMap } from './config';
import { hybris as hybrisConfig } from '../../../../../config';
console.log(hybrisConfig);
const queryString = require('query-string');

interface PageParams {
    code: string;
    fields: string;
    pageLabelOrId: string;
    pageType: string;
}

export default class PageService {
    public async page(props: PageParams) {
        const data = await fetch(`${hybrisConfig.api.sandbox}/cms/pages?${queryString.stringify(props)}`, {
            ...defaultOptions
        });

        const json = await data.json();

        return dataTransformMap.pageData(json);
    }
}
