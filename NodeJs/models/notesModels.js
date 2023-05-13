const mongoose=require('mongoose')

const noteSchema=new mongoose.Schema({


    notes_name:{
        type:String,
        required:[true,"Notes must be given"],
        trim:true,
        inLength:[5,"Notes  should atleast be 5 characters"],
        maxLength:[20,"Notes  shouldn't exceed 300 characters."],
        unique:[true,"All Note should have unique name."]
    },
    notes_description:{
        type:String,
        required:[true," Description must be given"],
        trim:true,
        minLength:[5,"Description should atleast be 5 characters"],
        maxLength:[300,"Description shouldn't exceed 300 characters."]
    },
},{
    timestamps:true
})


const Note=mongoose.model('Note',noteSchema)

module.exports=Note