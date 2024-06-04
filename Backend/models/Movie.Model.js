import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const movieSchema = new Schema({

    title:{
        type: String,
        required:true,
        trim: true,
    },
    description:{
        type:Text,
        required:true,
        trim:true,
    },
    category:{
        type:String,
        required:true,
        trim:true,
    },
    image:{
        type:String,
        required:true,
        trim:true,
    }

});