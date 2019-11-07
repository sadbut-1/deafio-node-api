import login from './users/login-routes'
import users from './users/index'
import profiles from './profiles/index'
import register from './users/services/create'
import jwt from 'jsonwebtoken'

function validateUser(req, res, next) {
    jwt.verify(req.headers['x-access-token'], process.env.SECRET_KEY, function (err, decoded) {
        if (err) {
            res.status(403).json({ status: false, message: err.message, data: null });
        }
        else {
            req.body.userId = decoded.id
            next();
        }
    });
}

export default (app) => {
    app.use('/login', login)
    app.use('/register', register)
    app.use('/users', validateUser, users)
    app.use('/profiles', validateUser, profiles)
}