
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
        "description": 'Step into the charm of Paris with this stylish apartment located in the heart of the city. Perfect for a romantic getaway, this modern urban retreat offers easy access to the vibrant nightlife. Enjoy amenities like air conditioning, a fully equipped kitchen, and an elevator. Hosted by Samantha Lee, this stay is a blend of elegance and convenience, making it an ideal choice for your next city escape.',
        "amenities": ['Air conditioning', 'Wifi', 'Kitchen', 'Washer', 'Dryer', 'Elevator'],
        "labels": ['Cityscape', 'Modern', 'Urban Retreat', 'Nightlife'],
        "host": {
            "_id": 'u102',
            "fullname": 'Samantha Lee',
            "imgUrl": 'https://res.cloudinary.com/dooscjcpt/image/upload/v1724504652/Flyair/Samantha%20Lee.jpg',
        },
        "location": {
            "city": "Paris",
            "country": "France",
            "countryCode": "FR",
            "address": "15 Rue de Rivoli",
            "lat": 48.8556,
            "lang": 2.3522
        },
        "reviews": [
            { "id": makeId(), "by": "Alice Johnson", "txt": "Absolutely loved this apartment! The location was perfect for exploring Paris." },
            { "id": makeId(), "by": "Bob Smith", "txt": "Great place to stay, very modern and comfortable. Samantha was a wonderful host." },
            { "id": makeId(), "by": "Catherine Lee", "txt": "The apartment was clean and well-equipped. Highly recommended!" },
            { "id": makeId(), "by": "David Brown", "txt": "A bit pricey, but the experience was worth it. Would stay again." },
            { "id": makeId(), "by": "Emma Davis", "txt": "Perfect for a romantic getaway. The view from the apartment was stunning." },
            { "id": makeId(), "by": "Frank Green", "txt": "Enjoyed our stay! The location was central and close to many attractions." }
        ],
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
        "description": 'Nestled on the bustling 5th Avenue, this charming studio offers a warm and intimate atmosphere. Ideal for couples or solo travelers, it features a private entrance, a cozy fireplace, and a backyard for some outdoor relaxation. Hosted by Emily Watson, this pet-friendly retreat provides the perfect balance of city excitement and homey comfort.',

        "amenities": ['Fireplace', 'Wifi', 'Kitchen', 'Free parking', 'Private entrance', 'Backyard'],
        "labels": ['Countryside', 'Romantic Getaway', 'Pet-Friendly', 'Cozy'],
        "host": {
            "_id": 'u103',
            "fullname": 'Emily Watson',
            "imgUrl": 'https://res.cloudinary.com/dooscjcpt/image/upload/v1724504661/Flyair/Emily%20Watson.jpg',
        },
        "location": {
            "city": "New York",
            "country": "United States",
            "countryCode": "US",
            "address": "350 5th Ave",
            "lat": 40.7484,
            "lang": -73.9857
        },
        "reviews": [
            { "id": makeId(), "by": "Grace Hill", "txt": "The studio was perfect for our weekend in NYC. Loved the cozy atmosphere!" },
            { "id": makeId(), "by": "Henry Adams", "txt": "Great location, right on 5th Avenue. The backyard was a nice touch." },
            { "id": makeId(), "by": "Isabella Taylor", "txt": "Emily was a fantastic host. The studio was clean and well-maintained." },
            { "id": makeId(), "by": "Jack White", "txt": "We enjoyed our stay. The private entrance made it feel very exclusive." },
            { "id": makeId(), "by": "Kathy Martinez", "txt": "A bit small, but cozy and comfortable. Perfect for a short stay." },
            { "id": makeId(), "by": "Leo Clark", "txt": "The fireplace was a highlight! Made the studio feel so warm and inviting." }
        ]
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
        "description": 'Experience luxury in Tokyo with this stunning beachfront loft. Perfect for families or groups, this spacious stay offers breathtaking sunset views, access to a private beach, and an outdoor BBQ grill for memorable evenings. With a pool and sun loungers, it\'s a tropical escape hosted by Carlos Diaz, combining modern design with natural beauty.',

        "amenities": ['Pool', 'Wifi', 'Beach access', 'BBQ grill', 'Outdoor dining area', 'Sun loungers'],
        "labels": ['Beachfront', 'Luxury', 'Sunset Views', 'Tropical Escape'],
        "host": {
            "_id": 'u104',
            "fullname": 'Carlos Diaz',
            "imgUrl": 'https://res.cloudinary.com/dooscjcpt/image/upload/v1724504648/Flyair/Carlos%20Diaz.jpg',
        },
        "location": {
            "city": "Tokyo",
            "country": "Japan",
            "countryCode": "JP",
            "address": "1-1, Marunouchi",
            "lat": 35.6824,
            "lang": 139.7591
        },
        "reviews": [
            { "id": makeId(), "by": "Mia Kim", "txt": "The loft was beautiful! Loved the sunset views from the balcony." },
            { "id": makeId(), "by": "Nathan Lee", "txt": "A perfect place for our family vacation. The pool and beach access were great." },
            { "id": makeId(), "by": "Olivia Johnson", "txt": "Carlos was an excellent host. The loft was clean and well-equipped." },
            { "id": makeId(), "by": "Paul Anderson", "txt": "The private beach made our stay special. Highly recommended!" },
            { "id": makeId(), "by": "Quincy Brown", "txt": "A bit expensive, but the luxury and location were worth it." },
            { "id": makeId(), "by": "Rachel Evans", "txt": "We had a wonderful time. The outdoor BBQ grill was a nice touch." }
        ]
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
        "description": 'This expansive penthouse in Sydney is a paradise for adventurers and winter enthusiasts. Located in a secluded area with panoramic mountain views, it offers ski-in/ski-out access, a hot tub, and a cozy fireplace. Hosted by James Rogers, this luxurious stay promises an unforgettable winter wonderland experience with all the comforts of home.',

        "amenities": ['Hot tub', 'Wifi', 'Fireplace', 'Mountain view', 'Ski-in/Ski-out', 'Balcony'],
        "labels": ['Mountain Views', 'Adventure', 'Winter Wonderland', 'Secluded'],
        "host": {
            "_id": 'u105',
            "fullname": 'James Rogers',
            'imgUrl': 'https://res.cloudinary.com/dooscjcpt/image/upload/v1724504658/Flyair/James%20Rogers.jpg',
        },
        "location": {
            "city": "Sydney",
            "country": "Australia",
            "countryCode": "AU",
            "address": "1 Macquarie St",
            "lat": -33.8587,
            "lang": 151.2140
        },
        "reviews": [
            { "id": makeId(), "by": "Sophia Martinez", "txt": "The villa was amazing! The gardens and pool were perfect for our group." },
            { "id": makeId(), "by": "Thomas Wilson", "txt": "We had a wonderful time. The game room was a hit with the kids." },
            { "id": makeId(), "by": "Ursula Lewis", "txt": "James was a great host. The villa was clean and well-maintained." },
            { "id": makeId(), "by": "Victor Turner", "txt": "A beautiful rustic escape. The BBQ area was perfect for family dinners." },
            { "id": makeId(), "by": "Wendy Scott", "txt": "The location was perfect for exploring Tuscany. Highly recommended!" },
            { "id": makeId(), "by": "Xander Harris", "txt": "A bit expensive, but the villa and surroundings were worth it." }
        ]
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
        "description": ' Immerse yourself in the artistic and historic vibe of Cape Town with this lovely cottage. Featuring vintage decor, exposed brick, and high ceilings, this centrally located stay is perfect for those who appreciate character and style. Hosted by Avery Bennett, it\'s a unique city center retreat that blends old- world charm with modern amenities.',

        "amenities": ['Wifi', 'Kitchen', 'Washer', 'Vintage decor', 'Exposed brick', 'High ceilings'],
        "labels": ['Historic', 'Loft', 'Artistic', 'City Center'],
        "host": {
            "_id": 'u106',
            "fullname": 'Avery Bennett',
            "imgUrl": 'https://res.cloudinary.com/dooscjcpt/image/upload/v1724504920/Flyair/Avery%20Bennett.jpg ',
        },
        "location": {
            "city": "Cape Town",
            "country": "South Africa",
            "countryCode": "ZA",
            "address": "Dock Road, V&A Waterfront",
            "lat": -33.9088,
            "lang": 18.4173
        },
        "reviews": [
            { "id": makeId(), "by": "Yasmin Ali", "txt": "The penthouse was beyond our expectations. The views were incredible!" },
            { "id": makeId(), "by": "Zane Ford", "txt": "We had an amazing stay. The infinity pool was a highlight." },
            { "id": makeId(), "by": "Amelia Brown", "txt": "Fatima was a great host. The penthouse was luxurious and spacious." },
            { "id": makeId(), "by": "Benjamin Clark", "txt": "A bit pricey, but worth every penny for the luxury experience." },
            { "id": makeId(), "by": "Chloe Adams", "txt": "The rooftop terrace was perfect for relaxing and enjoying the views." },
            { "id": makeId(), "by": "Daniel Evans", "txt": "We loved the penthouse. The gourmet kitchen was a nice touch." }
        ]
    }
    ,
    {
        "_id": 's106',
        "name": "house of momy",
        "type": " house",
        "imgurls": [
            "https://a0.muscache.com/im/pictures/prohost-api/Ho…dde3a41-7037-461d-a982-2d0dc164d7f2.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/prohost-api/Ho…6e6aacf-baf1-431d-a0a8-b7f5ca1c75d4.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/prohost-api/Ho…91df1a9-e5e3-4421-b678-d63b8d1adc5c.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/prohost-api/Ho…98edfc8-c40b-4c33-8be2-7ee83f922a02.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/prohost-api/Ho…d551298-3fd4-44e6-ac73-37e93fa6bf25.jpeg?im_w=720"
        ],
        "price": 160,
        "capacity": 2,
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


async function query({ filterBy = { txt: '' } }) {
    var stays = await storageService.query(STORAGE_KEY)
    const { txt } = filterBy

    if (txt) {
        const regex = new RegExp(filterBy.txt, 'i')
        stays = stays.filter(stay => regex.test(stay.name) || regex.test(stay.description) || regex.test(stay.summary) || regex.test(stay.location.city) || regex.test(stay.location.country))
    }

    // const { txt, minSpeed, maxPrice, sortField, sortDir } = filterBy
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