const express = require("express")

const router = express.Router();

const activityController = require('../app/controllers/ActivityController')

//CREATE
router.post("/", activityController.create)
//UPDATE
router.put("/:id", activityController.update)
//DELETE
router.delete("/:id", activityController.delete)
//GET
router.get("/:id", activityController.show)
//GET ALL
router.get("/", activityController.index)

module.exports = router


module.exports = router