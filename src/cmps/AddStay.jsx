import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service';
import { stayService } from '../services/stay';
import { addStay, setStaytoEdit } from '../store/actions/stay.actions';
import { labels } from "../services/labels.service";


export function AddStay() {
    const stay = useSelector(storeState => storeState.stayModule.stayToEdit);
    const [stepNum, setStepNum] = useState(1)

    console.log('stayDetails:', stayDetails)
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // מביא את המשתמש המחובר
    const loggedInUser = useSelector(storeState => storeState.userModule.user);
    const { _id, fullname, imgurl } = loggedInUser

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
        setStaytoEdit({ ...stay, [field]: value })
    }


    async function onAddStay(ev) {
        ev.preventDefault();
        try {
            const stayToSave = {
                ...stay,
                host: {
                    _id,
                    fullname,
                },
            };

            await addStay(stayToSave)
            showSuccessMsg('Stay saved successfully')
            navigate('/hosting/listings')
        } catch (err) {
            console.error(err.message)
            showErrorMsg('Failed to save stay')
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

<div className="add-stay-container">
            <h1>Add New Stay</h1>
            <form onSubmit={onAddStay}>
                <div>
                    <label htmlFor="name">Stay Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={stay.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="description">Stay description:</label>
                    <input
                        type="text"
                        id="description"
                        name="description"
                        value={stay.description}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="price">Price per Night:</label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        value={stay.price}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* <div>
                    <label htmlFor="imgUrl">Image URL:</label>
                    <input
                        type="text"
                        id="imgUrl"
                        name="imgUrl"
                        value={stayDetails.imgUrl}
                        onChange={handleChange}
                        required
                    />
                </div> */}

                <div>
                    <label htmlFor="street">type:</label>
                    <input
                        type="text"
                        id="type"
                        name="type"
                        value={stay.type}
                        onChange={handleChange}
                        required
                    />
                </div>

                <button type="submit">Add Stay</button>
            </form>
        </div>
    </div>

}