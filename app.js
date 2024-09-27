const express = require('express')
const { register, getAllUser } = require('./Controller/user.controller')
const { createBlog, getAllBlogs } = require('./Controller/blog.controller')
const app = express()

app.use(express.json())

app.get('/',getAllUser)
app.post('/register',register)
app.post('/blog',createBlog)
app.get('/blog',getAllBlogs)

module.exports = app