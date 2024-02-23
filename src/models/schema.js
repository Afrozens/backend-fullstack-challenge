class Order {
    constructor(name, price, id) {
        this.name = name
        this.price = price
        this.id = id
    }
}

class Pizza extends Order {
    constructor(ingredients, name, price) {
        super(name, price)
        this.ingredients = ingredients
    }
}


module.exports = { Order, Pizza }