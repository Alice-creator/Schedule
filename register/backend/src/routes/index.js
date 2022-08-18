const authRouter = require("./auth")
const usersRouter = require("./users")
const subjectsRouter = require("./subjects")
const activitiesRouter = require('./activities')

function route(app) {
    // app.use(app.router);
    app.use('/api/auth', authRouter)
    app.use('/api/users', usersRouter)

    app.use('/api/subjects', subjectsRouter)

    app.use('/api/activities', activitiesRouter)

    
    // app.use('/users', usersRouter)

    // app.use('/signup', signupRouter)
    // app.use('/me', meRouter)

   
    // app.use('/', siteRouter)

}

module.exports = route 