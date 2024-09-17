import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service'
import { loadStay, addStayMsg } from '../store/actions/stay.actions'
import { SvgIcon } from '../cmps/Svgicon'
import { DetailsHeader } from '../cmps/DetailsHeader'
import { StayInfo } from '../cmps/StayInfo'
import { ReviewList } from '../cmps/ReviewList'
import { orderService } from '../services/order/order.service'
import { saveOrder } from '../store/actions/order.action'


export function StayDetails() {

  const { stayId } = useParams()
  const stay = useSelector(storeState => storeState.stayModule.stay)
  const [orderToEdit, setOrderToEdit] = useState(orderService.getEmptyOrder())






  useEffect(() => {
    loadStay(stayId)
  }, [stayId])

  async function onAddStayMsg(stayId) {
    try {
      await addStayMsg(stayId, 'bla bla ' + parseInt(Math.random() * 10))
      showSuccessMsg(`Stay msg added`)
    } catch (err) {
      showErrorMsg('Cannot add stay msg')
    }

  }

  function handleImageUpload(url) {
    setUploadedImageUrl(url)
    console.log('Image uploaded successfully:', url)
  }
  function handleChange({ target }) {
    const { name, value } = target


    if (['adults', 'kids', 'infants', 'pets'].includes(name)) {
      setOrderToEdit(prevOrder => ({
        ...prevOrder,
        guests: {
          ...prevOrder.guests,
          [name]: value,
        },
      }))
    } else {

      setOrderToEdit(prevOrder => ({
        ...prevOrder,
        [name]: value,
      }))
    }
  }




  return (
    <section className="stay-details">
      <DetailsHeader stay={stay}></DetailsHeader>
      {<StayInfo stay={stay} orderToEdit={orderToEdit} setOrderToEdit={setOrderToEdit} handleChange={handleChange}
      ></StayInfo>}
      {stay && <ReviewList stay={stay} />}
    </section>


  )


}