const jwt = require('jsonwebtoken');

class VerifyToken {
    verifytoken = (req, res, next) => {
        const token = req.cookies.accsess_token
        if(!token) {
            return next()
        }
        jwt.verify(token, process.env.JWT, (err, user) => {
            if (err) return next()
            req.user = user 
            next()
        })
    
    }
    
    // verifyUser= (req, res, next) => {
    //     verifytoken(req,res, next, () => {
    //         if(req.user.id === req.params.id || req.user.isAdmin) {
    //             next()
    //         } else {
    //             return next()
    //         }
    //     })    
    // }
    verifyAdmin= (req, res, next) => {
        verifytoken(req,res, next, () => {
            if(req.user.isAdmin) {
                next()
            } else {
                return next()
            }
        })
    
    }
    
}
module.exports = new VerifyToken()