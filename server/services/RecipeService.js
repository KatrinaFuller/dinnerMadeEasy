import mongoose from "mongoose"
import { stringify } from "querystring";
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

let _notesSchema = new Schema({
    notes: { type: String },
    userId: { type: ObjectId, ref: 'User', required: true }
})

let _tagsSchema = new Schema({
    tags: { type: String },
    userId: { type: ObjectId, ref: 'User', required: true }
})


const _model = new Schema({
    edamamId: { type: String },
    label: { type: String, required: true },
    image: { type: String },
    source: { type: String },
    url: { type: String, required: true },
    dietLabels: [{ type: String }],
    healthLabels: [{ type: String }],
    ingredientLines: [{ type: String }],
    type: { type: String, enum: ['favorites', 'toTry'] },
    userId: { type: ObjectId, ref: "User", required: true },
    notes: [_notesSchema],
    tags: [_tagsSchema]
})

export default class RecipeService {
    get repository() {
        return mongoose.model('recipe', _model)
    }
}