const express=require('express')
const app=express()
const cors=require('cors')

const morgan=require('morgan')

const noteRouter=require('./routes/notesRoute')
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

app.use('/api/v1/notes',noteRouter)


module.exports=app