import { httpService } from "../http.service.js"

export const hostService = {
    query,
    getUserStays
}

async function query(filterBy = { region: '', startdate: '', startDate: '', label: '' }) {
    return httpService.get('hosting', filterBy)
}


async function getUserStays() {
    return httpService.get(`hosting/listings`)
}