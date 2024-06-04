import mongoose from 'mongoose';

const Schema = mongoose.Schema; 

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
    }
}, {
    timestamps: true,
});

const User = mongoose.model('user', userSchema, 'user'); // The third argument specifies the custom collection name

export default User; // Use export default for ES6 modules
