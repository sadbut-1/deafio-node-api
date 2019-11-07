import mongoose from 'mongoose'
import mongoosePaginate from 'mongoose-paginate'
import bcrypt from 'bcrypt'

const saltRounds = 10

const User = new mongoose.Schema({
    name: { type: String },
    cpf: { type: String },
    email: {
        type: String,
        trim: true,
        unique: true,
        required: true
    },
    password: {
        type: String,
        trim: true,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

User.pre('save', function (next) {
    this.password = bcrypt.hashSync(this.password, saltRounds);
    next()
});

User.plugin(mongoosePaginate)

export default mongoose.model('User', User)