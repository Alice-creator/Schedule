const User = require('../models/User')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class AuthController {
    register(req, res, next) {
        const salt = bcrypt.genSaltSync(10);
        let hash;
        if(req.body.password) {
            hash = bcrypt.hashSync(req.body.password, salt)
        } else {
            hash = process.env.PASSWORD_GG
        }
        const formData ={
                name: req.body.name,
                email: req.body.email,
                imageUrl: req.body.imageUrl,
                password: hash,
                _id: req.body._id,
                isAdmin: false,
            }
        const newUser = new User(formData)
        newUser.save()
            .then(() => res.status(200).json(formData))
            .catch(next)
            
        
    }
    async login(req, res, next) {
        try {
            const user = await User.findOne({ email :req.body.email })
            if(!user) return next()
            const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password)
            if(!isPasswordCorrect ) console.log("Incorrect password")
            
            const token = jwt.sign({name : user.name, email: user.email, isAdmin: user.isAdmin, imageUrl: user.imageUrl}, process.env.JWT)
            
            res.status(200).json(token)
        } catch(err) {
            next(err)
        }
    }

}
module.exports = new AuthController()