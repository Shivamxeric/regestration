import { text } from "express";
import mongoose, {Schema} from "mongoose";

const todoSchema = ({
     text:{
        type:String,
        require: true,
     }
})

const Todo = mongoose.model("Todo",todoSchema)

export {Todo}