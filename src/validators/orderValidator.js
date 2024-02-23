const { check, param } = require('express-validator')
const { validateResult } = require('../utils/validateResult')

const validateCreate = [
    check('data').exists().isArray().custom((value) => {
        if (value.length <= 0) throw new Error('data not found, try again')
        return true
    }),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

const validateId = [
    param('id').isUUID().custom((value) => {
        if (!value) throw new Error('Order with this ID not found')
        return true
    }),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

module.exports = { validateCreate, validateId }