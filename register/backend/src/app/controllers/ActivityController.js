const User = require('../models/User')
const Activity = require('../models/Activity')

class ActivityController {
    async create(req, res, next) {
        const UserId = req.query.email
        const newActivity = new Activity(req.body)
        try {
            const savedActivity = await newActivity.save()
            try {
                
                await User.findOneAndUpdate(UserId, {
                    $push: {activity: savedActivity }
                })
            } catch (err) {
                next(err)
            }
            res.status(200).json(savedActivity)
        } catch (err) {
            next(err)
        }
    }
    //UPDATE
    async update(req,res,next) {
        try {
            const updateRoom = await Room.findByIdAndUpdate(req.params.id, {$set : req.body }, { new: true})
            res.status(200).json(updateRoom)
        } catch(err) {
            next(err)
        }
    }
    //DELETE
    async delete(req,res,next) {
        const UserId = req.query.email
        try {
            await Activity.findByIdAndDelete(req.params.id)
            try {
                await User.findOneAndUpdate(UserId, {
                    $pull: {activities: req.params.id }
                })
            } catch (err) {
                next(err)
            }
            res.status(200).json("Activity deteted")
        } catch(err) {
            next(err)
        }
    }
    //GET ALL
    async index(req, res, next) {
        // Cách viết promise
        // Activity.find({})
        //     .then(activity => {
        //         res.status(200).json(activity)           
        //     })
        //     .catch(next)
        try {
            const userData = await User.findOne({ email :req.query.email })
            res.status(200).json(userData.activity)
        } catch(err) {
            next(err)
        }
    }
    //GET 1
    show(req, res, next) {
        Activity.findById(req.body.id)
            .then(act => {
                res.status(200).json(act)             
            })
            .catch(next)
    }
}
module.exports = new ActivityController()