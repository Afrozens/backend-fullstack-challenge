const request = require('supertest')
// instance
const app = require('../app')
// mock
const { dataOrderMockWithoutId, dataOrderMock } = require('../__mock__/orderMock')
// stub
const { getOrderDeterminated, addOrder, getAllOrders } = require('../stub/data')

jest.mock('../stub/data')

beforeEach(() => {
    getOrderDeterminated.mockReset()
    addOrder.mockReset()
    getAllOrders.mockReset()
})

describe('GET /order/:id', () => {
    it('should return order determinated of id', async () => {
        getOrderDeterminated.mockReturnValue(dataOrderMock)
        const result = await request(app)
            .get(`/api/order/${dataOrderMock[0]}`)
            .expect(200)

        expect(result.body).toEqual({ data: dataOrderMock })
    })
})

describe('GET /orders', () => {
    it('should return list of orders', async () => {
        getAllOrders.mockReturnValue(dataOrderMock)
        const result = await request(app)
            .get('/api/orders')
            .expect(200)

        expect(result.body).toEqual({ data: dataOrderMock })
    })
})

describe('POST /orders', () => {
    it('should create order and return determinated order', async () => {
        const result = await request(app)
            .post('/api/orders')
            .send({ data: dataOrderMockWithoutId })
            .expect(201)

        const summaryMockData = dataOrderMockWithoutId.map(order => (
            order.name
        ))
        expect(result.body).toEqual({ message: `Your order is confirmed. Order summary: \n ${summaryMockData.join(', ')}` })
    })
})