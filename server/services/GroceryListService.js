import mongoose from "mongoose"
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId


const _model = new Schema({
  description: { type: String, required: true },
  userId: { type: ObjectId, ref: "User", required: true },
  completed: { type: Boolean, default: false }
})

export default class GroceryListService {
  get repository() {
    return mongoose.model('grocery', _model)
  }
}