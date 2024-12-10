import mongoose from 'mongoose'
import { unique } from 'next/dist/build/utils'

const userSchema = new mongoose.Schema({
    name: { type: String, required:true, unique: true},
    password: { type: String, default: 'password'},
    createdAt: {type: Date, default: Date.now},
    theme: {type: String, default: 'garden-view' },
    puzzleStat: {type: Number, default: 0},
    riddleStat: {type:Number, default: 0},
    zipCode: { type: Number, default: 23221}
}, { collection: 'users'})

export default mongoose.models.User || mongoose.model('User', userSchema)