const { DEV, VITE_LOCAL } = import.meta.env

import { getRandomIntInclusive, makeId } from '../util.service'

import { stayService as local } from './stay.service.remote'
import { stayService as remote } from './stay.service.remote'

function getEmptyStay() {
    return {
        name: '',
        summary: 'REAL MADRID',
        type: '',
        imgurls: [
            'https://example.com/img1.jpg',
            'https://example.com/img2.jpg',
            'https://example.com/img3.jpg',
            'https://example.com/img4.jpg',
            'https://example.com/img5.jpg'
        ],
        price: '',  // אתה יכול לשנות את הטווח בהתאם
        capacity: 8,
        description: 'Experience the beauty of the Swiss Alps with this luxury mountain chalet.',
        amenities: ['Wifi', 'Fireplace', 'Mountain view', 'Hot tub'],
        labels: ['Lake', 'Luxury', 'Mountain'],
        host: {
            _id: '', // יש למלא בעת יצירת המשתמש
            fullname: '',
            imgUrl: ''
        },
        location: {
            city: '',
            country: '',
            lat: 0,
            lng: 0
        },
        region: 'Switzerland',
        reviews: [],
        startDate: '2025-1-7',
        endDate: '2025-2-2'
    };
}

function getDefaultFilter() {
    return {
        price: 0,
        sortDir: 1,
        txt: ''
    }
}

const service = VITE_LOCAL === 'true' ? local : remote
export const stayService = { getEmptyStay, getDefaultFilter, ...service }

// Easy access to this service from the dev tools console
// when using script - dev / dev:local

if (DEV) window.stayService = stayService
