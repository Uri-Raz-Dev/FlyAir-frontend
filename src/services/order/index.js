const { DEV, VITE_LOCAL } = import.meta.env

import { getRandomIntInclusive, makeId } from '../util.service'

import { orderService as local } from './order.service.remote'
import { orderService as remote } from './order.service.remote'

// function getEmptyOrder() {
//     return {
//         name: '',
//         summary: 'Luxury chalet in the mountains of Switzerland',
//         type: 'Chalet',
//         imgurls: [
//             'https://example.com/img1.jpg',
//             'https://example.com/img2.jpg',
//             'https://example.com/img3.jpg',
//             'https://example.com/img4.jpg',
//             'https://example.com/img5.jpg'
//         ],
//         price: 100,  // אתה יכול לשנות את הטווח בהתאם
//         capacity: 8,
//         description: 'Experience the beauty of the Swiss Alps with this luxury mountain chalet.',
//         amenities: ['Wifi', 'Fireplace', 'Mountain view', 'Hot tub'],
//         labels: ['Lake', 'Luxury', 'Mountain'],
//         host: {
//             _id: '', // יש למלא בעת יצירת המשתמש
//             fullname: '',
//             imgUrl: ''
//         },
//         location: {
//             city: '',
//             country: '',
//             lat: 0,
//             lng: 0
//         },
//         region: 'Switzerland',
//         reviews: [],
//         startDate: '2025-1-7',
//         endDate: '2025-2-2'
//     };
// }

function getEmptyOrder() {
    return {
        hostId: '', 
        buyer: {
            _id: '', 
            fullname: '',
            imgURL: ''
        },
        totalPrice: 0, 
        startDate: '', 
        endDate: '', 
        guests: {
            adults: 0,
            kids: 0,
            infants: 0,
            pets: 0
        },
        order: {
            _id: '', 
            name: '',
            price: 0, 
            loc: {} 
        },
        msgs: [], 
        status: '' 
    }
}


function getDefaultFilter() {
    return {
        price: '',
        sortDir: '',
        txt: ''
    }
}

const service = VITE_LOCAL === 'true' ? local : remote
export const orderService = { getEmptyOrder, getDefaultFilter, ...service }

// Easy access to this service from the dev tools console
// when using script - dev / dev:local

if (DEV) window.orderService = orderService
