export default () => ({
    Mutation: {
        async refreshTokens() {
            const accessToken = 'hqhhqhqhq';
            const refreshToken = 'hdhdhdhdh1';

            return {
                accessToken,
                refreshToken
            };
        }
    }
});
