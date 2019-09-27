import mongoose from "mongoose"
import { stringify } from "querystring";
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

let _notesSchema = new Schema({
    notes: { type: String },
    userId: { type: ObjectId, ref: 'User', required: true }
})



const _model = new Schema({
    edamamId: { type: String },
    label: { type: String, required: true },
    image: { type: String },
    source: { type: String },
    url: { type: String },
    dietLabels: [{ type: String }],
    healthLabels: [{ type: String }],
    ingredients: [{ type: String }],
    type: { type: String, enum: ['favorites', 'toTry'] },
    tags: [{ type: String }],
    ratings: { type: Number },
    userId: { type: ObjectId, ref: "User", required: true },
    notes: [_notesSchema],
})

export default class RecipeService {
    get repository() {
        return mongoose.model('recipe', _model)
    }
}