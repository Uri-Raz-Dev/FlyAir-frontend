import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addStay } from '../store/actions/stay.actions'
import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service'
import { stayService } from '../services/stay'
import { labels } from "../services/labels.service";
console.log('labels:', labels)


export function AddStay() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const loggedInUser = useSelector(storeState => storeState.userModule.user)
    const [stayDetails, setStayDetails] = useState(stayService.getEmptyStay())
    const [stepNum, setStepNum] = useState(1) // מתחיל בשלב 1
    console.log('stepNum:', stepNum)

    function handleChange({ target }) {
        const { name, value } = target
        setStayDetails(prevDetails => ({ ...prevDetails, [name]: value }))
    }

    async function onAddStay(ev) {
        ev.preventDefault()
        try {
            const savedStay = await dispatch(addStay(stayDetails))
            console.log('savedStay ADD STAY $$$$$$$:', savedStay)
            showSuccessMsg(`Stay added (id: ${savedStay._id})`)
            navigate('hosting/listings')
        } catch (err) {
            showErrorMsg('Cannot add stay')
        }
    }

    // שליטה בתצוגה על פי המספר של stepNum
    function renderStep() {
        switch (stepNum) {
            case 1:
                return aboutyourPlace()
            case 2:
                return placeTypes()
            case 3:
                return <h1>STEP 3</h1>
            case 4:
                return <h1>STEP 4</h1>
            case 5:
                return <h1>STEP 5</h1>
            case 6:
                return <h1>STEP 6</h1>
            default:
                return <h1>Unknown Step</h1>
        }
    }

    // עדכון סטייט בצורה נכונה
    function nextStep() {
        setStepNum(prev => prev + 1)
    }

    function prevStep() {
        setStepNum(prev => (prev > 1 ? prev - 1 : 1))
    }

    return (
        <div className='main-container-add-stay'>
            {renderStep()}

            <div className='footer-progress-add-stay'>
                <button onClick={prevStep}>Back</button>
                <button onClick={nextStep}>Next</button>
            </div>
        </div>
    )
}


// STEP 1 
function aboutyourPlace() {
    return <div className='step-1 about-your-place'>
        <div className='info-about-your-place'>
            <p className='p-step1'>Step 1</p>
            <h1>Tell us about your place</h1>
            <p>In this step, we'll ask you which type of property you have and
                if guests will book the entire place or just a room. Then let
                us know the location and how many guests can stay.
            </p>
        </div>
        <div className='video-player-container'>

            <video
                data-testid="video-player"
                className="video-player-about-your-place"
                autoPlay
                crossOrigin="anonymous"
                playsInline
                preload="auto"

            >
                <source src="/public/video/about-your-place-step-1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>

    </div>
}

// style={{ objectFit: 'cover' }}

//STEP2
function placeTypes() {

    return <div>
        <h1>STEP 2</h1>
       { Object.keys(labels).map((label, index) => (
           <p>{label}</p>

       ))}
    </div>

}