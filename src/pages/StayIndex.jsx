import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import { loadStays, addStay, updateStay, removeStay, addStayMsg } from '../store/actions/stay.actions'

import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service'
import { stayService } from '../services/stay/'
import { userService } from '../services/user'

import { StayList } from '../cmps/StayList'
import { StayFilter } from '../cmps/StayFilter'
import { AppHeader } from '../cmps/AppHeader'

export function StayIndex() {

    const [filterBy, setFilterBy] = useState(stayService.getDefaultFilter())
    const stays = useSelector(storeState => storeState.stayModule.stays)

    useEffect(() => {
        loadStays(filterBy)
    }, [filterBy])

    async function onRemoveStay(stayId) {
        try {
            await removeStay(stayId)
            showSuccessMsg('Stay removed')
        } catch (err) {
            showErrorMsg('Cannot remove stay')
        }
    }

    async function onAddStay() {
        const stay = stayService.getEmptyStay()
        stay.type = prompt('Type?')
        try {
            const savedStay = await addStay(stay)
            showSuccessMsg(`Stay added (id: ${savedStay._id})`)
        } catch (err) {
            showErrorMsg('Cannot add stay')
        }
    }

    async function onUpdateStay(stay) {
        const price = +prompt('New price?', stay.price)
        if (price === 0 || price === stay.price) return

        const stayToSave = { ...stay, price }
        try {
            const savedStay = await updateStay(stayToSave)
            showSuccessMsg(`Stay updated, new price: ${savedStay.price}`)
        } catch (err) {
            showErrorMsg('Cannot update stay')
        }
    }

    function onSetFilter(filterBy) {
        setFilterBy(filterBy)
        // console.log('filterBy:', filterBy)
    }

    return (
        <>
            <AppHeader filterBy={filterBy} onSetFilter={onSetFilter} />

            <div className=" stays-page">
                <h2 className="main-title">Available Stays</h2>

                <StayList
                    stays={stays}
                    onRemoveStay={onRemoveStay}
                    onUpdateStay={onUpdateStay} />

            </div>
        </>
    )
}