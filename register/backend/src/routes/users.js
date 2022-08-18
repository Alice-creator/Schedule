const express = require("express")

const router = express.Router();

const usersController = require('../app/controllers/UserController');
const VerifyToken = require("../utils/verifyToken");

//UPDATE
// router.put("/:id", usersController.update)
//DELETE
router.delete("/:id", usersController.delete)
//GET
router.get("/subjects", usersController.showSubjects)
router.put("/", usersController.createSubject)
router.get("/:id/subjects", usersController.createSubject)

//FAVOURITE
router.get("/favourite", usersController.showFavourite)
router.put("/favourite", usersController.updateFavourite)

//ACTIVITY
router.get("/activity", usersController.showActivity)
router.put("/activity", usersController.updateActivity)


//NOTIFY
router.get("/notify", usersController.showNotify)
router.put("/notify-all", usersController.updateNotifyAll)
router.put("/notify", usersController.updateNotify)
// router.delete("/notify/:id", usersController.deleteNotify)
router.put("/delete/notify", usersController.deleteNotifyAll)

//STORAGE
router.get("/storage", usersController.showStorage)
router.put("/storage", usersController.updateStorage)
router.put("/delete/storage", usersController.deleteStorage)






module.exports = router