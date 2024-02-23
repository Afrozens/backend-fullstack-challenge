// stub
const { getOrderDeterminated, addOrder, getAllOrders } = require('../stub/data')
// utils
const { httpError } = require('../utils/handleError')

const getOrder = async (req, res) => {
    try {
        const { id } = req.params
        return res.status(200).send({ data: getOrderDeterminated(id) })
    } catch (e) {
        httpError(res, e)
    }
}

const getOrders = async (req, res) => {
    try {
        return res.status(200).send({ data: getAllOrders() })
    } catch (e) {
        httpError(res, e)
    }
}

const createOrder = async (req, res) => {
    const { data } = req.body
    addOrder(data)
    const summaryData = data.map(order => (
        order.name
    ))
    res.status(201).send({ message: `Your order is confirmed. Order summary: \n ${summaryData.join(', ')}` })
}
module.exports = { getOrder, createOrder, getOrders }