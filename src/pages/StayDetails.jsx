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
  const loggedInUser = useSelector(storeState => storeState.userModule.user);

  console.log(orderToEdit)





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
    setUploadedImageUrl(url);
    console.log('Image uploaded successfully:', url);
  }
  function handleChange({ target }) {
    const field = target.name
    let value = target.value
    switch (target.type) {
      case 'number':
      case 'range':
        value = +value
        break

      case 'checkbox': value = target.checked
        break

      default: break
    }

    setOrderToEdit({ ...orderToEdit, [field]: value })
  }

  function onAddOrder(ev) {
    ev.preventDefault();
    try {
      const orderToSave = {
        ...orderToEdit,
        stayId,
        buyerId: loggedInUser._id,
        hostId: stay.host._id,
      }
      saveOrder(orderToSave)
    } catch (err) {
      console.error(err.message)
      showErrorMsg('Failed to save order')

    }
  }


  return (
    <section className="stay-details">
      <DetailsHeader stay={stay}></DetailsHeader>
      {<StayInfo stay={stay} orderToEdit={orderToEdit} setOrderToEdit={setOrderToEdit} handleChange={handleChange}
        onAddOrder={onAddOrder} loggedInUser={loggedInUser} ></StayInfo>}
      {stay && <ReviewList stay={stay} />}
    </section>


  )


}