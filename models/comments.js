import mongoose from "mongoose";

const commentSchema= mongoose.Schema({
    videoId:String,
    userId:String,
    commentBody:String,
    userCommented:String,
    CommentOn:{type:Date,default:Date.now},
    Location:{
        city:String,
        country:String
    }
})
export default mongoose.model("Comments",commentSchema)