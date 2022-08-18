const User = require('../models/User')
class UsersController {
    //UPDATE
    async update(req,res,next) {
        try {
            const updateUser = await User.findByIdAndUpdate(req.params.id, {$set : req.body }, { new: true})
            res.status(200).json(updateUser)
        } catch(err) {
            next(err)
        }
    }
    //DELETE
    async delete(req,res,next) {
        try {
            await User.findByIdAndDelete(req.params.id)
            res.status(200).json("User deteted")
        } catch(err) {
            next(err)
        }
    }
    async createSubject(req,res,next) {        
        try {
            const updateUser = await User.findOneAndUpdate({ email :req.query.email }, { subjects: req.body }, { new: true})
            res.status(200).json(updateUser)
        } catch(err) {
            next(err)
        }
    }
   
    async showSubjects(req,res,next) {        
        try {
            const userData = await User.findOne({ email :req.query.email })
            res.status(200).json(userData.subjects)
        } catch(err) {
            next(err)
        }
    }
     //Update favourite
    async updateFavourite(req,res,next) {        
        try {
            const updateFavourite = await User.findOneAndUpdate({ email :req.query.email }, { favourite: req.body }, { new: true})
            res.status(200).json(updateFavourite)
        } catch(err) {
            next(err)
        }
    }
    async showFavourite(req,res,next) {        
        try {
            const userData = await User.findOne({ email :req.query.email })
            res.status(200).json(userData.favourite)
        } catch(err) {
            next(err)
        }
    }

    async updateActivity(req,res,next) {        
        try {
            const updateActivity = await User.findOneAndUpdate({ email :req.query.email }, { $push: { activity: req.body }}, { new: true })
            res.status(200).json(updateActivity)
        } catch(err) {
            next(err)
        }
    }
    async showActivity(req,res,next) {        
        try {
            const userData = await User.findOne({ email :req.query.email })
            res.status(200).json(userData.activity)
        } catch(err) {
            next(err)
        }
    }

    async updateStorage(req,res,next) {        
        try {
            const updateStorage = await User.findOneAndUpdate({ email :req.query.email }, { $push: { storage: req.body }}, { new: true })
            res.status(200).json(updateStorage)
        } catch(err) {
            next(err)
        }
    }
    async showStorage(req,res,next) {        
        try {
            const userData = await User.findOne({ email :req.query.email })
            res.status(200).json(userData.storage)
        } catch(err) {
            next(err)
        }
    }
    async deleteStorage(req,res,next) {        
        try {
            const userData = await User.update({ email :req.query.email }, { $pull: {storage: req.body}})
            res.status(200).json(userData.storage)
        } catch(err) {
            next(err)
        }
    }
    async updateNotifyAll(req,res,next) {        
        try {
            const updateNotify = await User.updateMany({}, { $push: { notification: req.body }}, { new: true })
            res.status(200).json(updateNotify)
        } catch(err) {
            next(err)
        }
    }

    async updateNotify(req,res,next) {        
        try {
            const updateNotify = await User.findOneAndUpdate({ email: req.query.email }, { $push: { notification: req.body }}, { new: true })
            res.status(200).json(updateNotify)
        } catch(err) {
            next(err)
        }
    }

    async showNotify(req,res,next) {        
        try {
            const userData = await User.findOne({ email :req.query.email })
            res.status(200).json(userData.notification)
        } catch(err) {
            next(err)
        }
    }
    async deleteNotifyAll(req, res, next) {
        try {
            const userData = await User.updateMany({ email : req.query.email },{ $unset: { notification: "" } })
            res.status(200).json("Deleted Notify")
        } catch(err) {
            next(err)
        }
    }

    async deleteSubjects(req,res,next) {
        try {
            await User.findOneAndDelete(req.params.id)
            res.status(200).json("User deteted")
        } catch(err) {
            next(err)
        }
    }
    
    show(req, res, next) {
        User.findById(req.body.id)
            .then(User => {
                res.status(200).json(User)             
            })
            .catch(next)
    }
}
module.exports = new UsersController()