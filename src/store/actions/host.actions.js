import { hostService } from "../../services/host"
import { SET_USER_STAYS } from "../reducers/host.reducer"
import { store } from "../store"

export async function getUserStays() {
    try {
        const stays = await hostService.getUserStays()
        store.dispatch({ type: SET_USER_STAYS, userStays: stays })
    } catch (err) {
        console.log('Cannot load stays', err)
        throw err
    }
}