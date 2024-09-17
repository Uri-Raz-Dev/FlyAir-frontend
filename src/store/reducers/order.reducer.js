
export const SET_ORDERS = 'SET_ORDERS'
export const SET_ORDER = 'SET_ORDER'
export const ADD_ORDER = 'ADD_ORDER'
export const REMOVE_ORDER = 'REMOVE_ORDER'
export const UPDATE_ORDER = 'UPDATE_ORDER'

const initialState = {
  orders: [],

}

export function orderReducer(state = initialState, action = {}) {
  let orders = []
  switch (action.type) {
    case SET_ORDERS:
      return { ...state, orders: action.orders }
    case SET_ORDER:
      return { ...state, order: action.order }
    case ADD_ORDER:
      return { ...state, orders: [...state.orders, action.order] }
    case REMOVE_ORDER:
      return { ...state, orders: state.orders.filter(order => order._id !== action.orderId) }
    case UPDATE_ORDER:
      orders = state.orders.map(order => order._id === action.order._id ? action.order : order)
      return { ...state, orders }
    default:
      return state
  }
}
