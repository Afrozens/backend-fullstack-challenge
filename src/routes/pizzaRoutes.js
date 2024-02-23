const express = require('express')
const { getPizzas } = require('../controllers/pizzaController')

const router = express.Router()

router.get('/pizzas', getPizzas)

module.exports = router