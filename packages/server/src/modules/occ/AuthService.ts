import fetch from 'node-fetch';
import { defaultOptions } from './config';
import { hybris as hybrisConfig } from '../../../../../config';

const OAUTH_ENDPOINT = '/authorizationserver/oauth/token';

export default class AuthService {
    public async auth(userId: string, password: string) {
        const params = {
            grant_type: 'password',
            client_id: 'b2caccelerator', // TODO: get from config or process.env
            client_secret: 'ghqpghqphgpq', // TODO: get from config or process.env
            username: userId,
            password
        };

        const props = {
            ...defaultOptions,
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        };

        const data = await fetch(
            `
            ${hybrisConfig.api.sandbox}${OAUTH_ENDPOINT}?grant_type=${params.grant_type}&client_id=${
                params.client_id
            }&client_secret=${params.client_secret}&username=${userId}&password=${password}
        `,
            props
        );

        const json = await data.json();

        return json;
    }
}
