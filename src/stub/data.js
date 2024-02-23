const { v4: uuid } = require('uuid');

let stubOrder = []

const getOrderDeterminated = (id) => {
    const orderDeterminated = stubOrder.filter(order => order[0] === id)
    if (orderDeterminated.length <= 0) throw new Error('order not found')
    return orderDeterminated
}

const addOrder = (data) => {
    const id = uuid()
    stubOrder.push([id, ...data])
}

const getAllOrders = () => {
    return stubOrder
}

module.exports = { stubOrder, getOrderDeterminated, getAllOrders, addOrder }