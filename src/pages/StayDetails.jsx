import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service'
import { loadStay, addStayMsg } from '../store/actions/stay.actions'
import { SvgIcon } from '../cmps/Svgicon'


export function StayDetails() {

  const { stayId } = useParams()
  const stay = useSelector(storeState => storeState.stayModule.stay)
  console.log(stay);

  const { _id, name, summary, type, imgurls, price, capacity, amenities, labels } = stay || {}
  const { city, country, countryCode, address, lat, lag } = stay?.location || {}
  const { fullname, imgUrl } = stay?.host || {}

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

  return (
    <section className="stay-details">
      <header className="details-header">
        <h1>{name}</h1>
        <div className="add-to-favorites">
          <div className="icon-wrapper">
            <span><SvgIcon iconName={"share"}></SvgIcon></span>
            <span>Share</span>
          </div>
          <div className="icon-wrapper">
            <span><SvgIcon iconName={"save"}></SvgIcon></span>
            <span>Save</span>
          </div>
        </div>
      </header>


      <section className="details-image-list">

        <ul className="details-image-grid">

          {
            imgurls && imgurls.length > 0
              ? imgurls.map((img, index) => (
                <li key={index}><img src={img} alt="stay image" /></li>


              ))
              : null
          }

        </ul>

      </section>

      <section className='stay-info'>
        <header className="info-header">
          <h2>{summary}</h2>
          <ul>
            <li>{capacity} guests</li>
            <li><span> · </span>{Math.floor(capacity / 2)} bedroom </li>
            <li><span> · </span>{Math.floor(capacity / 2)} bed <span> · </span></li>
            <li>{Math.floor(capacity / 2)} bath</li>
          </ul>
          <div className="review-info">
            <div className="review-rating">
              <span><SvgIcon iconName={"reviewstar"}></SvgIcon>4.78</span>
            </div>
            <span> · </span>
            <Link to="review">1,025 reviews</Link>
          </div>
        </header>

        <section className='about-host'>
          <span>Hosted by {fullname}</span>

        </section>
      </section>
    </section>


  )


}