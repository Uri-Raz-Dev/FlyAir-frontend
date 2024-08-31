
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
            "https://a0.muscache.com/im/pictures/miso/Hosting-777231477173885889/original/538633f2-6b5e-40b7-b162-ddaab99b0db3.jpeg?im_w=1200",
            "https://a0.muscache.com/im/pictures/miso/Hosting-777231477173885889/original/8c76f2a3-3a07-491c-ad60-dca49f4807ae.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-777231477173885889/original/9cb240be-57a8-4a51-ab30-873ef3537806.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-777231477173885889/original/cfc9f5ca-8f58-412a-912e-4676e2590942.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-777231477173885889/original/97f28666-72be-4f40-910c-a22d331a72f4.jpeg?im_w=720"
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
        "labels": ['Beach', 'Lake', 'Luxe', 'Islands'],
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
            "https://a0.muscache.com/im/pictures/9ccfb248-370e-49c8-833b-72a649908d5a.jpg?im_w=1200",
            "https://a0.muscache.com/im/pictures/65ad24f5-3c4f-4340-8e75-1c84278361f1.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/039384b0-75de-4c34-aae2-6fd5c76a2b50.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/c8e4ccb3-b13a-42a0-a1e3-8d48199b81a8.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/efb8673c-b5e6-4502-9e60-b46a2ae0ce44.jpg?im_w=720"
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
            "https://a0.muscache.com/im/pictures/ebfed8d1-2760-4d39-a440-e2fac4c96dd5.jpg?im_w=1200",
            "https://a0.muscache.com/im/pictures/f5f7248f-0cba-486e-88d0-4d26b98ff532.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/4327e289-2786-4699-9250-510b13966a5b.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/76fc03c9-c908-4c58-bf02-7fbc0c6c4321.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/dd9db4f9-2607-456e-9ad9-71a222c75ff5.jpg?im_w=720"
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
            "https://a0.muscache.com/im/pictures/624e42ab-960e-476b-8e44-c36e61d101e9.jpg?im_w=1200",
            "https://a0.muscache.com/im/pictures/c60aee12-835d-4c37-b369-ff750deff1f7.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/9e8d819c-e26f-441f-8420-567138e2041d.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/11610818-590b-4c29-a48d-fc8813b83f18.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/9f7d53ca-94d3-4e26-881d-a2e0c7537f13.jpg?im_w=720"
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
        "summary": "Lovely houst in Momy,South Africa",
        "type": " house",
        "imgurls": [
            "https://a0.muscache.com/im/pictures/1e934a37-d009-48a3-8721-5eaf2f3d6fc0.jpg?im_w=1200",
            "https://a0.muscache.com/im/pictures/f462dbf1-c1d4-45b5-91fd-8527c123718a.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/f3c2bdbe-56c2-44f8-94f0-806e29eed4d7.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/78269067-4b27-4431-93d1-497b71c199e8.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/c39325ee-45d9-4522-9ef3-03774ddaed85.jpg?im_w=720"
        ],
        "price": 160,
        "capacity": 2,
        "description": ' Immerse yourself in the artistic and historic vibe of Cape Town with this lovely cottage. Featuring vintage decor, exposed brick, and high ceilings, this centrally located stay is perfect for those who appreciate character and style. Hosted by Avery Bennett, it\'s a unique city center retreat that blends old- world charm with modern amenities.',
        "amenities": ['Wifi', 'Kitchen', 'Washer', 'Vintage decor', 'Exposed brick', 'High ceilings'],
        "labels": ['Historic', 'Loft', 'Artistic', 'City Center'],
        "host": {
            "_id": 'u107',
            "fullname": 'Suzy Bennett',
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


async function query(filterBy = {}) {
    var stays = await storageService.query(STORAGE_KEY)
    // const { filterBy } = store.getState().toyModule
    const { txt } = filterBy
    console.log('filterBy:', filterBy)

    if (txt) {
        const regex = new RegExp(filterBy.txt, 'i')
        stays = stays.filter(stay => regex.test(stay.name) || regex.test(stay.description) || regex.test(stay.summary) || regex.test(stay.location.city) || regex.test(stay.location.country))
        console.log('stays:', stays)
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

    // stays = stays.map(({ _id, name, description, }) => ({ _id, name, description }))
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