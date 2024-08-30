import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name: { type: String, required:true},
    password: { type: String, default: 'password'},
    createdAt: {type: Date, default: Date.now},
    theme: {type: String, default: 'garden-view' },
    zipCode: { type: Number, default: 23221}
}, { collection: 'users'})

export default mongoose.models.User || mongoose.model('User', userSchema)