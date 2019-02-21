import fetch from 'node-fetch';
import { defaultOptions } from './config';
import { hybris as hybrisConfig } from '../../../../../config';

export default class ProductService {
    constructor(private api: any) {}

    public async search(queryString: string) {
        const data = await fetch(
            `${hybrisConfig.api.sandbox}/products/
                search${queryString ? '?' + queryString : ''}`,
            {
                ...defaultOptions
            }
        );

        const json = await data.json();

        return json.products;
    }

    public async getProduct(productCode: string) {
        const productData = await this.api.getProduct(productCode);
        return productData;
    }
}
