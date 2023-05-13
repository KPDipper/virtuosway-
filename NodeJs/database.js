

const mongoose=require('mongoose')

mongoose.connect(process.env.DATABASE,{

    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Database Connection Established")
}).catch(()=>{
    console.log("Not connected to Database.")
})