import mongoose from 'mongoose'

const puzzleSchema = new mongoose.Schema({
    id: { type: Number, required:true},
    cards:{
        front : { type: Array},
        back: { type: Array},
        answer: { type: Array}
    },
    createdAt: {type: Date, default: Date.now}
}, { collection: 'puzzles'})

export default mongoose.models.Puzzle || mongoose.model('Puzzle', puzzleSchema)