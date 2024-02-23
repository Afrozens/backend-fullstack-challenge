const express = require('express')
const { getOrder, createOrder, getOrders } = require('../controllers/orderController')
const { validateCreate, validateId } = require('../validators/orderValidator')

const router = express.Router()

router.get('/order/:id', validateId, getOrder)

router.get('/orders', getOrders)

router.post('/orders', validateCreate, createOrder)

module.exports = router