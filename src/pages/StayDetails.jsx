import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service'
import { loadStay, addStayMsg } from '../store/actions/stay.actions'
import { SvgIcon } from '../cmps/Svgicon'
import { DetailsHeader } from '../cmps/DetailsHeader'
import { StayInfo } from '../cmps/StayInfo'
import { ReviewList } from '../cmps/ReviewList'


export function StayDetails() {

  const { stayId } = useParams()
  const stay = useSelector(storeState => storeState.stayModule.stay)






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

  return (
    <section className="stay-details">
      <DetailsHeader stay={stay}></DetailsHeader>
      {<StayInfo stay={stay}></StayInfo>}
      {stay && <ReviewList stay={stay} />}
    </section>


  )


}