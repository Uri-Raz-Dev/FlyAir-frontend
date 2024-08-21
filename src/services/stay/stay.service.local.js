
import { storageService } from '../async-storage.service.js'
import { makeId } from '../util.service'
import { userService } from '../user'

const STORAGE_KEY = 'stay'

const stays=[
    {
      "_id": 's101',
      "name": "Elegant Parisian Apartment",
      "type": "Apartment",
      "imgurls": [
        "https://example.com/images/paris1.jpg",
        "https://example.com/images/paris2.jpg"
      ],
      "price": 150,
      "capacity": 4,
      "location": {
        "city": "Paris",
        "country": "France",
        "countryCode": "FR",
        "address": "15 Rue de Rivoli",
        "lat": 48.8556,
        "lang": 2.3522
      }
    },
    {
      "_id":'s102',
      "name": "Cozy NYC Studio",
      "type": "Studio",
      "imgurls": [
        "https://example.com/images/nyc1.jpg",
        "https://example.com/images/nyc2.jpg"
      ],
      "price": 200,
      "capacity": 2,
      "location": {
        "city": "New York",
        "country": "United States",
        "countryCode": "US",
        "address": "350 5th Ave",
        "lat": 40.7484,
        "lang": -73.9857
      }
    },
    {
      "_id":'s103',
      "name": "Modern Tokyo Loft",
      "type": "Loft",
      "imgurls": [
        "https://www.parisdiscoveryguide.com/image-files/x800-musee-cite-architecture-view-of-tour-eiffel.jpg.pagespeed.ic.AzAm_tZrny.jpg",
        "https://example.com/images/tokyo1.jpg",
        "https://example.com/images/tokyo2.jpg"
      ],
      "price": 250,
      "capacity": 6,
      "location": {
        "city": "Tokyo",
        "country": "Japan",
        "countryCode": "JP",
        "address": "1-1, Marunouchi",
        "lat": 35.6824,
        "lang": 139.7591
      }
    },
    {
      "_id":'s104',
      "name": "Luxury Sydney Penthouse",
      "type": "Penthouse",
      "imgurls": [
        "https://example.com/images/sydney1.jpg",
        "https://example.com/images/sydney2.jpg"
      ],
      "price": 500,
      "capacity": 8,
      "location": {
        "city": "Sydney",
        "country": "Australia",
        "countryCode": "AU",
        "address": "1 Macquarie St",
        "lat": -33.8587,
        "lang": 151.2140
      }
    },
    {
      "_id":'s105',
      "name": "Charming Cape Town Cottage",
      "type": "Cottage",
      "imgurls": [
        "https://example.com/images/cape_town1.jpg",
        "https://example.com/images/cape_town2.jpg"
      ],
      "price": 120,
      "capacity": 3,
      "location": {
        "city": "Cape Town",
        "country": "South Africa",
        "countryCode": "ZA",
        "address": "Dock Road, V&A Waterfront",
        "lat": -33.9088,
        "lang": 18.4173
      }
    }
  ]
localStorage.setItem('stay', JSON.stringify(stays));

    

export const stayService = {
    query,
    getById,
    save,
    remove,
    addStayMsg
}
window.cs = stayService


async function query(   { filterBy = { price: 0 }}) {
    var stays = await storageService.query(STORAGE_KEY)
    // const { txt, minSpeed, maxPrice, sortField, sortDir } = filterBy

    // if (txt) {
    //     const regex = new RegExp(filterBy.txt, 'i')
    //     stays = stays.filter(stay => regex.test(stay.vendor) || regex.test(stay.description))
    // }
    // if (minSpeed) {
    //     stays = stays.filter(stay => stay.speed >= minSpeed)
    // }
    // if (sortField === 'vendor' || sortField === 'owner') {
    //     stays.sort((stay1, stay2) =>
    //         stay1[sortField].localeCompare(stay2[sortField]) * +sortDir)
    // }
    // if (sortField === 'price' || sortField === 'speed') {
    //     stays.sort((stay1, stay2) =>
    //         (stay1[sortField] - stay2[sortField]) * +sortDir)
    // }

    // stays = stays.map(({ _id, vendor, price, speed, owner }) => ({ _id, vendor, price, speed, owner }))
    return stays
}

function getById(stayId) {
    return storageService.get(STORAGE_KEY, stayId)
}

async function remove(stayId) {
    // throw new Error('Nope')
    await storageService.remove(STORAGE_KEY, stayId)
}

async function save(stay) {
    var savedStay
    if (stay._id) {
        const stayToSave = {
            _id: stay._id,
            price: stay.price,
            speed: stay.speed,
        }
        savedStay = await storageService.put(STORAGE_KEY, stayToSave)
    } else {
        const stayToSave = {
            vendor: stay.vendor,
            price: stay.price,
            speed: stay.speed,
            // Later, owner is set by the backend
            owner: userService.getLoggedinUser(),
            msgs: []
        }
        savedStay = await storageService.post(STORAGE_KEY, stayToSave)
    }
    return savedStay
}

async function addStayMsg(stayId, txt) {
    // Later, this is all done by the backend
    const stay = await getById(stayId)

    const msg = {
        id: makeId(),
        by: userService.getLoggedinUser(),
        txt
    }
    stay.msgs.push(msg)
    await storageService.put(STORAGE_KEY, stay)

    return msg
}