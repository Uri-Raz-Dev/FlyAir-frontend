const { DEV, VITE_LOCAL } = import.meta.env

import { hostService as local } from './host.service.remote'
import { hostService as remote } from './host.service.remote'

export const hostService = VITE_LOCAL === 'true' ? local : remote

// Easy access to this service from the dev tools console
// when using script - dev / dev:local

if (DEV) window.hostService = hostService
