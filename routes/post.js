const express = require('express')
const {getPosts,createPost } = require('../controllers/post')
const validator = require('../helpers/validator')


const router = express.Router()
router.get('/posts', getPosts)
router.post('/posts', validator.createPostValidator, createPost)

module.exports= router

