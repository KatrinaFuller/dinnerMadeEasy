import express from 'express'
import RecipeService from '../services/RecipeService';
import { Authorize } from '../middleware/authorize.js'
import Axios from "axios";
import GroceryListService from '../services/GroceryListService';

let _groceryListService = new GroceryListService().repository

export default class GroceryListController {
  constructor() {
    this.router = express.Router()
      .use(Authorize.authenticated)
      .get('', this.getAll)
      .post('', this.create)
      .put('/:id', this.edit)
      .delete('/:id', this.delete)
  }

  async getAll(req, res, next) {
    try {
      let data = await _groceryListService.find({})
      return res.send(data)
    } catch (error) { next(error) }

  }

  async create(req, res, next) {
    try {
      //NOTE the user id is accessable through req.body.uid, never trust the client to provide you this information
      req.body.userId = req.session.uid
      let data = await _groceryListService.create(req.body)
      res.send(data)
    } catch (error) { next(error) }
  }

  async edit(req, res, next) {
    try {
      let data = await _groceryListService.findOneAndUpdate({ _id: req.params.id, }, req.body, { new: true })
      if (data) {
        return res.send(data)
      }
      throw new Error("invalid id")
    } catch (error) {
      next(error)
    }
  }

  async delete(req, res, next) {
    try {
      await _groceryListService.findOneAndRemove({ _id: req.params.id })
      res.send("deleted recipe")
    } catch (error) { next(error) }

  }

}