
import { storageService } from '../async-storage.service.js'
import { makeId } from '../util.service'
import { userService } from '../user'

const STORAGE_KEY = 'stay'

const stays = [
    {
        "_id": 's101',
        "name": "Elegant Parisian Apartment",
        "summary": "Fantastic Parisian apartment",
        "type": "Apartment",
        "imgurls": [
            "https://a0.muscache.com/im/pictures/miso/Hosting-3…297244e-8f5c-44d6-a85b-0423d0d55f3e.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-3…b51d91f-0e10-42b4-b90d-abf01d58cb9a.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/a3e9e1a1-ebed-4d2e-a00a-4b1a81015d2d.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-3…6d5ec7a-9049-473a-8e58-421c74fa5c62.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/3b683927-42d5-4883-990d-26904f1e6532.jpg?im_w=720"
        ],
        "price": 150,
        "capacity": 4,
        "amenities": ['Air conditioning', 'Wifi', 'Kitchen', 'Washer', 'Dryer', 'Elevator'],
        "labels": ['Cityscape', 'Modern', 'Urban Retreat', 'Nightlife'],
        "host": {
            "_id": 'u102',
            "fullname": 'Samantha Lee',
            "imgUrl": 'https://a0.muscache.com/im/pictures/3cdb0c3d-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small',
        },
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
        "_id": 's102',
        "name": "Cozy NYC Studio",
        "summary": "Entire studio in New York,5th Avenue",
        "type": "Tiny homes",
        "imgurls": [
            "https://a0.muscache.com/im/pictures/86655972/f708e3db_original.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/86657319/66d37ba2_original.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/86655544/5cb703c2_original.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/86653287/721e627a_original.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/86656684/9c21bbde_original.jpg?im_w=720"
        ],
        "price": 200,
        "capacity": 2,
        "amenities": ['Fireplace', 'Wifi', 'Kitchen', 'Free parking', 'Private entrance', 'Backyard'],
        "labels": ['Countryside', 'Romantic Getaway', 'Pet-Friendly', 'Cozy'],
        "host": {
            "_id": 'u103',
            "fullname": 'Emily Watson',
            "imgUrl": 'https://a0.muscache.com/im/pictures/874fb1bc-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small',
        },
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
        "_id": 's103',
        "name": "Modern Tokyo Loft",
        "summary": "Loft in Tokyo,Japan",

        "type": "Loft",
        "imgurls": [
            "https://a0.muscache.com/im/pictures/f5632441-f554-4686-961a-6fbe6fc50930.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/94488dde-14a8-4493-b703-b312fdcc697a.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/f248ffe6-6efe-4bc6-aebc-80d49f8ef652.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/750e0a8e-5e1e-4770-bef7-c1a676cb1718.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/hosting/Hostin…f7f22bf-e15d-47c6-88fe-d25e80cfb331.jpeg?im_w=720"
        ],
        "price": 250,
        "capacity": 6,
        "amenities": ['Pool', 'Wifi', 'Beach access', 'BBQ grill', 'Outdoor dining area', 'Sun loungers'],
        "labels": ['Beachfront', 'Luxury', 'Sunset Views', 'Tropical Escape'],
        "host": {
            "_id": 'u104',
            "fullname": 'Carlos Diaz',
            "imgUrl": 'https://a0.muscache.com/im/pictures/65b8d621-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small',
        },
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
        "_id": 's104',
        "name": "Luxury Sydney Penthouse",
        "summary": "Penthouse in Sydney,Australia",
        "type": "Penthouse",
        "imgurls": [
            "https://a0.muscache.com/im/pictures/hosting/Hostin…11feca9-3a4f-4713-b754-ba2e267116ce.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/hosting/Hostin…7a76002-9d99-4e09-8af5-5bba34278f1f.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/hosting/Hostin…8241d52-3ae6-49ef-a96e-21d68274c3d1.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/hosting/Hostin…07f4f7a-ae94-4182-b5ba-80581322bad8.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/hosting/Hostin…61f0b98-e4d7-4361-b020-a3ffc804f678.jpeg?im_w=720"
        ],
        "price": 500,
        "capacity": 8,
        "amenities": ['Hot tub', 'Wifi', 'Fireplace', 'Mountain view', 'Ski-in/Ski-out', 'Balcony'],
        "labels": ['Mountain Views', 'Adventure', 'Winter Wonderland', 'Secluded'],
        "host": {
            "_id": 'u105',
            "fullname": 'James Rogers',
            'imgUrl': 'https://a0.muscache.com/im/pictures/12efdc4a-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small',
        },
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
        "_id": 's105',
        "name": "Charming Cape Town Cottage",
        "summary": "Lovely cottage in Cape Town,South Africa",
        "type": " pool",
        "imgurls": [
            "https://a0.muscache.com/im/pictures/prohost-api/Ho…dde3a41-7037-461d-a982-2d0dc164d7f2.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/prohost-api/Ho…6e6aacf-baf1-431d-a0a8-b7f5ca1c75d4.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/prohost-api/Ho…91df1a9-e5e3-4421-b678-d63b8d1adc5c.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/prohost-api/Ho…98edfc8-c40b-4c33-8be2-7ee83f922a02.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/prohost-api/Ho…d551298-3fd4-44e6-ac73-37e93fa6bf25.jpeg?im_w=720"
        ],
        "price": 120,
        "capacity": 3,
        "amenities": ['Wifi', 'Kitchen', 'Washer', 'Vintage decor', 'Exposed brick', 'High ceilings'],
        "labels": ['Historic', 'Loft', 'Artistic', 'City Center'],
        "host": {
            "_id": 'u106',
            "fullname": 'Avery Bennett',
            "imgUrl": 'https://a0.muscache.com/im/pictures/4de4ab9d-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small',
        },
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


async function query({ filterBy = { price: 0 } }) {
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