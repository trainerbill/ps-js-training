var LoginComponent = xcomponent.create({
    tag: 'login-component',
    url: 'our-login.html',
    dimensions: {
        width: 400,
        height: 600
    },
    logLevel: 'debug',
    props: {
        // PART 1: Complete the login-Component.js Definition file
            // Implement the following properties
                // email. type is string and required is false
                // onLogin. type is function required is false
                // getUser. type is function required is false
                // user.  type is object required is false
        email: {
            type: 'string',
            required: false
        },
        onLogin: {
            type: 'function',
            required: false
        },
        getUser: {
            type: 'function',
            required: false
        },
        user: {
            type: 'object',
            required: false
        }

        // END PART 1
        
    }
});