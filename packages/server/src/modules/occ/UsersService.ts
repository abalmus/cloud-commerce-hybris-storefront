export default class UsersService {
    constructor(private occ: any) {}
    public async getUser(userId: string) {
        const data = await this.occ.getUser(userId);
        return data;
    }

    public async getCarts(userId: string) {
        const data = await this.occ.getCarts(userId);
        return data;
    }

    public async postCart(userId: string) {
        const data = await this.occ.postCart(userId);
        return data;
    }
}
