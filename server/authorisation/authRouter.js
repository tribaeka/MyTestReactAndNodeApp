module.exports = (router, expressApp, authRoutesMethods) => {

    router.post('/registerUser', authRoutesMethods.registerUser);

    router.post('/login’, expressApp.oauth.grant()');

    return router
};
