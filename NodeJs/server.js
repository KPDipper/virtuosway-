const dotenv=require('dotenv')
dotenv.config({path:'./config.env'})


const app=require('./index')

const db=require('./database')

const port=process.env.PORT || 2000

app.listen(port,()=>{
    console.log(`App running on ${port}.`)
})