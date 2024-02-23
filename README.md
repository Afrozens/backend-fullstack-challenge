# Backend

## Project description

**Pizzeria**

This application serves the purpose of exposing a JSON API to be consumed by a frontend client for ordering pizza. The development of an actual DB is not required.

The following entities should be created (including proper relations):

- _pizza_ - has a name and price (e.g. Margherita $5, Pepperoni $6, ...)
- _order_ - has items
- _order item_ - has a pizza and quantity

The following endpoints should return a JSON response:

- `/api/orders` (list of orders)
- `/api/orders/:id` (details of an individual order)
- `/api/pizzas` (list of pizzas; see './backend/example-pizzas.json')

## Summary and documentation

### Pizza

REQUEST:

operation: /api/pizzas

method: GET

RESPONSE:

[
{
"name": "Diavola",
"price": 7.5,
"ingredients": ["tomato", "mozzarella", "spicy salami"]
},

{
"name": "Pizza Bianca",
"price": 5,
"ingredients": ["mozzarella", "oregano"]
}
]

### Order

REQUEST:

operation: /api/orders/:id

method: GET

RESPONSE:

{
"data": [
[
"00e94251-8663-4310-9d12-a5d1bd227ba7",
{
"name": "pizza piña",
"price": 12
}
]
]
}

REQUEST:

operation: /api/orders

method: POST

Content-type: application/json

Body:

{
"data": [
{
"name": "pizza de piña",
"price": 12
},
{
"name": "pizza de calabacín",
"price": 5
}
]
}

RESPONSE:

{
"message": "Your order is confirmed. Order summary: pizza de piña, pizza de calabacín"
}

### How install
npm i 

npm run dev