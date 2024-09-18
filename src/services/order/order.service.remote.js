import { httpService } from "../http.service.js"
import { labels } from "../labels.service.js"

export const orderService = {
    query,
    getById,
    save,
    remove,
    addOrderMsg
}


// price: 0, sortDir: 1, txt: '', labels: []
async function query(filterBy = {}) {
    return httpService.get(`order`, filterBy)
}

function getById(orderId) {
    return httpService.get(`order/${orderId}`)
}

async function remove(orderId) {
    return httpService.delete(`order/${orderId}`)
}
async function save(order) {
    var savedOrder
    if (order._id) {
        savedOrder = await httpService.put(`order/${order._id}`, order)
    } else {
        savedOrder = await httpService.post('order/add-order', order)
    }
    return savedOrder
}

async function addOrderMsg(orderId, txt) {
    const savedMsg = await httpService.post(`order/${orderId}/msg`, { txt })
    return savedMsg
}
//
