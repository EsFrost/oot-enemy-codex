const monstersModel = require('../models/MonstersModel')
require('dotenv').config()
const sanitizeHtml = require('sanitize-html')
const validator = require('validator')

async function getAll(req, res) {
    try{
        const result = await monstersModel.getAll()
        res.status(200).json(result.rows)
    }
    catch (err) {
        res.status(500).json({message: "Failed to get all monsters", error: err})
    }
}

async function search(req, res) {
    let param = req.params.param
    param = sanitizeHtml(param)

    if (validator.isNumeric(param) || typeof(param) === 'string') {
        try{
            const result = await monstersModel.search(param)
            res.status(200).json(result.rows)
        }
        catch (err) {
            res.status(500).json({message: "Failed to execute your search", error: err})
        }
    }
    else {
        res.status(400).json({message: "Invalid search parameter"})
    }
}

async function individualCard(req, res) {
    let id = req.params.id
    id = sanitizeHtml(id)
    if (validator.isNumeric(id)) {
        try{
            const result = await monstersModel.individualCard(id)
            if (result.rows.length > 0) {
                try{
                    const result2 = await monstersModel.availableDetails(id)
                    res.status(200).json({card: result.rows[0], details: result2.rows})
                }
                catch (err) {
                    res.send(500).json({message: "Failed to get available details", error: err})
                }
            }
            else {
                res.status(404).json({message: "Card not found"})
            }
        }
        catch (err) {
            res.status(500).json({message: "Failed to get individual card", error: err})
        }
    }
    else {
        res.status(400).json({message: "Invalid card id"})
    }
}

async function getTotal(req, res) {
    try{
        const result = await monstersModel.countMax()
        res.status(200).json({total: result.rows[0].count})
    }
    catch (err) {
        res.status(500).json({message: "Failed to get total", error: err})
    }
}

module.exports = {
    getAll,
    search,
    individualCard,
    getTotal
}