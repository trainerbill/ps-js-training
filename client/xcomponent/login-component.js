var LoginComponent = xcomponent.create({
    tag: 'login-component',
    url: 'our-login.html',
    dimensions: {
        width: 400,
        height: 600
    },
    logLevel: 'debug',
    props: {
        // Implement email, onLogin, getUser, user
        email: {
            type: 'string',
            required: false
        },
        onLogin: {
            type: 'function',
            required: true
        },
        getUser: {
            type: 'function',
            required: true
        },
        user: {
            type: 'object',
            required: false
        }
    }
});