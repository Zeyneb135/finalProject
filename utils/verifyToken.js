import jwt from 'jsonwebtoken'
import { createError } from '../utils/error.js'

export const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token;
    if (!token) {
        return next(createError(401, 'you are not authenticated'));
    }

    jwt.verify(token, process.env.JWT_SECRET, (error, user) => {
        if (error) return next(createError(403, 'token is not valid'))
        req.user = user;
        next()
    })
}

export const verifyUser = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.id === req.params.id || req.user.isAdmin) {
            next()
        } else {
            if (error) return next(createError(403, 'you are not authorized'))

        }
    })
}