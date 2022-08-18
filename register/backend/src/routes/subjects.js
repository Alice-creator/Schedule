const express = require("express")

const router = express.Router();

const subjectsController = require('../app/controllers/SubjectController');
// const VerifyToken = require("../utils/verifyToken");

//UPDATE
// router.put("/:id", subjectsController.update)
//DELETE
router.delete("/delete", subjectsController.deleteAllSubjects)
//POST
router.post("/store", subjectsController.updateAllSubjects)
//GET
router.get("/", subjectsController.getAllSubjects)
//GET FACULTY
router.get("/faculty", subjectsController.getAllFaculties)
//GET FACULTY
router.get("/trainning-system", subjectsController.getAllTrainnings)
//GET TRANNING
router.post("/name", subjectsController.getFromFacultyTranning)

router.post("/find-names", subjectsController.getSubjectByName)




module.exports = router