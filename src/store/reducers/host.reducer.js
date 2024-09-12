export const SET_USER_STAYS = 'SET_USER_STAYS'


const initialState = {
    userStays: [],
}

export function hostReducer(state = initialState, action) {
    var newState = state
    var userStays
    switch (action.type) {
        case SET_USER_STAYS:
            newState = { ...state, userStays: action.userStays }
            break
        default:
    }
    return newState
}