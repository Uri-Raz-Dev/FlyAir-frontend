
import { store } from '../store'
import {
  ADD_ORDER,
  REMOVE_ORDER,
  SET_ORDER,
  SET_ORDERS,
  UPDATE_ORDER,
} from '../reducers/order.reducer.js'
import { orderService } from '../../services/order/order.service.js'

// Action Creators
export function getActionRemoveOrder(orderId) {
  return { type: REMOVE_ORDER, orderId }
}
export function getActionAddOrder(order) {
  return { type: ADD_ORDER, order }
}


export async function loadOrders(filterBy = {}) {
  try {
    const orders = await orderService.query(filterBy)
    store.dispatch({ type: SET_ORDERS, orders })
  } catch (err) {
    console.log('OrderActions: error in loadOrders', err)
    throw err
  }
}

export async function loadOrder(orderId) {
  try {
    const order = await orderService.getById(orderId)
    store.dispatch({ type: SET_ORDER, order })
  } catch (err) {
    console.log('Cannot load order', err)
    throw err
  }
}

export async function saveOrder(order) {
  try {
    const addedOrder = await orderService.save(order)
    store.dispatch(getActionAddOrder(addedOrder))
  } catch (err) {
    console.log('OrderActions: error in addOrder', err)
    throw err
  }
}

export async function updateOrder(order) {
  try {
    const updatedOrder = await orderService.save(order)
    store.dispatch({ type: UPDATE_ORDER, order: updatedOrder })
  } catch (err) {
    console.log('OrderActions: error in updateOrder', err)
    throw err
  }
}

export async function removeOrder(orderId) {
  try {
    await orderService.remove(orderId)
    store.dispatch(getActionRemoveOrder(orderId))
  } catch (err) {
    console.log('OrderActions: err in removeOrder', err)
    throw err
  }
}
