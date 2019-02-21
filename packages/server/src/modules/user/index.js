import access from './access';
import auth from './auth';
import confirmMiddleware from './confirm';
import schema from './schema.graphql';
import resolvers from './resolvers';
import settings from '../../../../../settings';
import ServerModule from '../ServerModule';
import resources from './locales';

const createContextFunc = async ({ req, context }) => {
    let user = null;

    if (req.session.userId && req.session.userId) {
        user = await context
            .UsersApi(req)
            .getUser(req.session.userId);
    }

    return {
        user
    };
};

const middleware = app => {
    if (settings.user.auth.password.sendConfirmationEmail) {
        app.get('/confirmation/:token', confirmMiddleware);
    }
};

export default new ServerModule(access, auth, {
    schema: [schema],
    createResolversFunc: [resolvers],
    createContextFunc: [createContextFunc],
    middleware: [middleware],
    localization: [{ ns: 'user', resources }]
});
