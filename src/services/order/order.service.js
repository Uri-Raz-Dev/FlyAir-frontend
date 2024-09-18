import { httpService } from "../http.service"


export const orderService = {
    query,
    save,
    remove,
    getById,
    addOrderMsg,
    removeOrderMsg,
    getEmptyOrder
}

async function query(filterBy = { stayId: '' }) {
    //should maybe be in body?
    var queryStr = (!filterBy) ? '' : `?stayId=${filterBy.stayId || ''}`
    return await httpService.get(`order${queryStr}`)
}

async function getById(orderId) {
    return await httpService.get(`book/${orderId}`)
}

async function remove(orderId) {
    return await httpService.delete(`order/${orderId}`)
}

async function save(order) {
    if (order._id) {
        return await httpService.put(`book/${order._id}`, order)
    } else {
        return await httpService.post(`book/*`, order)
    }
}

async function addOrderMsg(orderId, msg) {
    return await httpService.post(`order/${orderId}/msg`, msg)
}

async function removeOrderMsg(orderId, msgId) {
    return await httpService.delete(`order/${orderId}/msg/${msgId}`)
}

function getEmptyOrder(
    startDate = '',
    endDate = '',
    guests = { adults: 1, kids: 0, infants: 0, pets: 0 },
    stayId = '',
    buyerId = '',
    totalPrice = '',
    hostId = '',
    msgs = [],
    status = 'pending',
) {
    return {
        hostId,
        buyerId,
        totalPrice,
        startDate,
        endDate,
        guests,
        stayId,
        msgs,
        status,
    }
}




