import express from 'express'
import RecipeService from '../services/RecipeService';
import { Authorize } from '../middleware/authorize.js'
import Axios from "axios";

let _recipeService = new RecipeService().repository

const _foodapi = Axios.create({
    baseURL: 'https://api.edamam.com/'
})

let apiKey = 'search?app_id=$e5152851app_key=$b5e235b115bbed4de5e65e86ac731f4a'

export default class RecipeController {
    constructor() {
        this.router = express.Router()
            //NOTE all routes after the authenticate method will require the user to be logged in to access
            .get('', this.getAll)
            .get('/random', this.getRandomRecipes)
            .get('/:id', this.getById)
            .use(Authorize.authenticated)
            .post('/myRecipes', this.getAllByUser)
            .post('', this.create)
            .post('/:id/notes', this.createNotes)
            .put('/:id', this.edit)
            .put('/:id/notes', this.deleteNotes)
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

    async getRandomRecipes(req, res, next) {
        try {
            let options = randomizeQueryAndGetMaxCount(req.query.q)
            let url = apiKey + '&q=' + options.query + '&to=' + options.maxTo + '&from=' + (options.maxTo - 100)
            let data = await _foodapi.get(url)
            res.send(data.data.hits)
        } catch (error) {
            next(error)
        }
    }


    async getAllByUser(req, res, next) {
        try {
            let data = await _recipeService.find({ userId: req.session.uid })
            if (!data) {
                throw new Error("Invalid User Id")
            }
            return res.send(data)
        } catch (error) { next(error) }

    }

    async create(req, res, next) {
        try {
            //NOTE the user id is accessable through req.body.uid, never trust the client to provide you this information
            req.body.userId = req.session.uid
            let data = await _recipeService.create(req.body)
            res.send(data)
        } catch (error) { next(error) }
    }

    async createNotes(req, res, next) {
        req.body.userId = req.session.uid
        try {
            let comment = await _recipeService.findOneAndUpdate({ _id: req.params.id, userId: req.session.uid }, { $push: { comments: req.body } }, { new: true })
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
            let comment = await _recipeService.findOneAndUpdate({ _id: req.params.id, userId: req.session.uid }, { $pull: { comments: req.body } }, { new: true })
            res.send(comment)
        } catch (error) {
            next(error)
        }
    }

}


let options = {
    beef: 69809,
    chicken: 170158
}

function randomizeQueryAndGetMaxCount(query) {
    if (!query || query == "random") {
        let keys = Object.keys(options)
        query = keys[Math.floor(Math.random() * keys.length)]
    }
    let maxTo = Math.floor(Math.random() * (options[query]))
    return { query, maxTo: maxTo > 100 ? maxTo : 100 }
}