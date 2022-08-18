const Subject = require('../models/Subject')
const csv = require('csvtojson')
const fs = require('fs')

const constants = require('../../constants')
class SubjectsController {
	updateAllSubjects(req,res,next) {
		const datas = req.body
		datas.map((data) => {
			const subject = new Subject(data)
			subject.save()
				.then((data) => res.status(200).json(data))
				.catch(err => next(err))
		})
	}
	deleteAllSubjects(req,res,next) {
		Subject.deleteMany({})
			.then((data) => res.status(200).json("Subjects deteted"))
			.catch(err => next(err))
			
		
	}
    getAllSubjects(req,res,next) {
        Subject.find({})
            .then(data => {
                res.status(200).json(data)           
            })
            .catch(next)
    } 
	getAllFaculties(req, res, next) {
		Subject.find({})
            .then(data => {
				const datas = [...new Map(data.map(item => [item[constants.FACULTY], item])).values()]
				const arrays = []
				datas.map((data, index) => {
					arrays[index] = {
						name: data[constants.FACULTY],
					}
				})
                res.status(200).json(arrays)           
            })
            .catch(next)
	}
	getAllTrainnings(req,res,next) {
		Subject.find({})
            .then(data => {
				const datas = [...new Map(data.map(item => [item[constants.TRAINNING_SYSTEM], item])).values()]
				const arrays = []
				datas.map((data, index) => {
					arrays[index] = {
						name: data[constants.TRAINNING_SYSTEM],
					}
				})
                res.status(200).json(arrays)           
            })
            .catch(next)
	}
	//GET SUBJECT BY TRANNING AND FACULTY
	getFromFacultyTranning(req,res,next) {
		Subject.find({ faculty : req.query.faculty, 'trainning-system' : req.query.trainning })
		.then(data => {
			const datas = [...new Map(data.map(item => [item[constants.SUBJECT], item])).values()]
			const arrays = []
			datas.map((data, index) => {
				arrays[index] = {
					name: data[constants.SUBJECT],
				}
			})
			res.status(200).json(arrays)           
		})
		.catch(next)
	}

	getSubjectByName(req,res,next) {
		Subject.find({ title : req.query.title, faculty : req.query.faculty, 'trainning-system' : req.query.trainning })
		.then(data => {
			res.status(200).json(data)           
		})
		.catch(next)
	}
}

module.exports = new SubjectsController()
