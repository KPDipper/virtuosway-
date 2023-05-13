const express=require('express')
const { addNotes, viewAllNotes, viewNote, updateNote, deleteNote, checkBody } = require('../controllers/notesController')

const router=express.Router()

router.route('/').post(checkBody,addNotes).get(viewAllNotes)

router.route('/:id').get(viewNote).patch(updateNote).delete(deleteNote)

module.exports=router