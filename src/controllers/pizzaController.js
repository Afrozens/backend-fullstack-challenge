// data
const data = require('../stub/stub-data-pizza.json')
// utils
const { httpError } = require('../utils/handleError')

const getPizzas = async (req, res) => {
    try {
        res.status(200).send({ data: data })
    } catch (e) {
        httpError(res, e)
    }
}
module.exports = { getPizzas }