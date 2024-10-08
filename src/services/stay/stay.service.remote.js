import { httpService } from "../http.service.js"
import { labels } from "../labels.service.js"

export const stayService = {
    query,
    getById,
    save,
    remove,
    addStayMsg
}

async function query(filterBy = {
    region: '', startdate: '', startDate: '', label: '', guests: {
        adults: 0, children: 0, infants: 0, pets: 0
    },
}) 
{
    return httpService.get(`stay`, filterBy)
}

function getById(stayId) {
    return httpService.get(`stay/${stayId}`)
}

async function remove(stayId) {
    return httpService.delete(`stay/${stayId}`)
}
async function save(stay) {
    var savedStay
    if (stay._id) {
        savedStay = await httpService.put(`stay/${stay._id}`, stay)
    } else {
        savedStay = await httpService.post('stay', stay)
    }
    return savedStay
}

async function addStayMsg(stayId, txt) {
    const savedMsg = await httpService.post(`stay/${stayId}/msg`, { txt })
    return savedMsg
}
//
