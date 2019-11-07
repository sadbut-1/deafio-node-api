import mongoose from 'mongoose'

const Profile = new mongoose.Schema({
    name: { type: String },
    email: { type: String },
    user: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', 
        required: true
    }
})

export default mongoose.model('Profile', Profile)