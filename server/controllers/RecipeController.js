import express from 'express'
import RecipeService from '../services/RecipeService';
import { Authorize } from '../middleware/authorize.js'

let _recipeService = new RecipeService().repository

export default class RecipeController {
    constructor() {
        this.router = express.Router()
            //NOTE all routes after the authenticate method will require the user to be logged in to access
            .get('', this.getAll)
            .get('/:id', this.getById)
            .use(Authorize.authenticated)
            .post('', this.create)
            .post('/:id/notes', this.createNotes)
            .post('/:id/tags', this.createTags)
            .put('/:id', this.edit)
            .put('/:id/notes', this.deleteNotes)
            .put('/:id/tags', this.deleteTags)
            .delete('/:id', this.delete)
    }

    async getAll(req, res, next) {
        try {
            let data = await _recipeService.find({})
            return res.send(data)
        } catch (error) { next(error) }

    }

    async getById(req, res, next) {
        try {
            let data = await _recipeService.findById(req.params.id)
            if (!data) {
                throw new Error("Invalid Id")
            }
            res.send(data)
        } catch (error) { next(error) }
    }

    async create(req, res, next) {
        try {
            //NOTE the user id is accessable through req.body.uid, never trust the client to provide you this information
            req.body.authorId = req.session.uid
            let data = await _recipeService.create(req.body)
            res.send(data)
        } catch (error) { next(error) }
    }

    async createNotes(req, res, next) {
        req.body.authorId = req.session.uid
        try {
            let comment = await _recipeService.findOneAndUpdate({ _id: req.params.id, authorId: req.session.uid }, { $push: { comments: req.body } }, { new: true })
            res.send(comment)
        } catch (error) {
            next(error)
        }
    }

    async createTags(req, res, next) {
        req.body.authorId = req.session.uid
        try {
            let comment = await _recipeService.findOneAndUpdate({ _id: req.params.id, authorId: req.session.uid }, { $push: { comments: req.body } }, { new: true })
            res.send(comment)
        } catch (error) {
            next(error)
        }
    }

    async edit(req, res, next) {
        try {
            let data = await _recipeService.findOneAndUpdate({ _id: req.params.id, }, req.body, { new: true })
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
            await _recipeService.findOneAndRemove({ _id: req.params.id })
            res.send("deleted recipe")
        } catch (error) { next(error) }

    }

    async deleteNotes(req, res, next) {
        try {
            let comment = await _recipeService.findOneAndUpdate({ _id: req.params.id, authorId: req.session.uid }, { $pull: { comments: req.body } }, { new: true })
            res.send(comment)
        } catch (error) {
            next(error)
        }
    }

    async deleteTags(req, res, next) {
        try {
            let comment = await _recipeService.findOneAndUpdate({ _id: req.params.id, authorId: req.session.uid }, { $pull: { comments: req.body } }, { new: true })
            res.send(comment)
        } catch (error) {
            next(error)
        }
    }

}