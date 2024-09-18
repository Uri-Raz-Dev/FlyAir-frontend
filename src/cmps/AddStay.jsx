// components/AddStay.jsx

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service';
import { addStay, setStaytoEdit } from '../store/actions/stay.actions';

import { PlaceTypes } from './addStaySteps/PlaceTypes';
import { AboutYourPlace } from './addStaySteps/AboutYourPlace';
import { ConfirmInfo } from './addStaySteps/ConfirmInfo';
import { PropertyType } from './addStaySteps/PropertyType';
import { EndStepAddStay } from './addStaySteps/EndStepAddStay';

// ייבוא הקומפוננטות החדשות
// import { AboutYourPlace } from './addStaySteps/AboutYourPlace';
// import { PlaceTypes } from './addStaySteps/PlaceTypes';
// import { PropertyType } from './addStaySteps/PropertyType';
// import { ConfirmInfo } from './addStaySteps/ConfirmInfo';

export function AddStay() {
    const stay = useSelector(storeState => storeState.stayModule.stayToEdit);
    const [stepNum, setStepNum] = useState(1);
    console.log('stay:', stay)

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const loggedInUser = useSelector(storeState => storeState.userModule.user);
    const { _id, fullname } = loggedInUser;

    const [selectedType, setSelectedType] = useState('');

    const handleSelect = (event) => {
        const label = event.target.value;

        const updatedLabels = stay.labels.includes(label)
            ? stay.labels.filter(item => item !== label) // אם קיימת - מסיר
            : [...stay.labels, label];
        // אם לא קיימת - מוסיף

        setStaytoEdit({ ...stay, labels: updatedLabels });
        setSelectedType(label);
    };

    // function handleChange({ target }) {
    //     const field = target.name;
    //     let value = target.value;
    //     switch (target.type) {
    //         case 'number':
    //             value = +value;
    //             break;
    //         case 'checkbox':
    //             value = target.checked;
    //             break;
    //         default:
    //             break;
    //     }
    //     setStaytoEdit({ ...stay, [field]: value });
    //     console.log('stay:', stay)

    // }
    function handleChange({ target }) {
        const field = target.name;
        let value = target.value;

        // בדיקה לסוגי שדות מסוימים כמו number ו-checkbox
        switch (target.type) {
            case 'number':
                value = +value;
                break;
            case 'checkbox':
                value = target.checked;
                break;
            default:
                break;
        }

        // אם השדה הוא בתוך אובייקט מקונן כמו location
        if (field.includes('.')) {
            const [parentField, subField] = field.split('.');

            setStaytoEdit({
                ...stay,
                [parentField]: {
                    ...stay[parentField],
                    [subField]: value, // עדכון תת השדה (כמו location.address)
                }
            });
        } else {
            // עדכון שדה רגיל
            setStaytoEdit({ ...stay, [field]: value });
        }

        console.log('stay:', stay);
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

            await addStay(stayToSave);
            showSuccessMsg('Stay saved successfully');
            navigate('/hosting/listings');
        } catch (err) {
            console.error(err.message);
            showErrorMsg('Failed to save stay');
        }
    }

    function renderStep() {
        switch (stepNum) {
            case 1:
                return <AboutYourPlace />;
            case 2:
                return (
                    <PlaceTypes
                        onAddStay={onAddStay}
                        stay={stay}
                        handleChange={handleChange}
                        selectedType={selectedType}
                        handleSelect={handleSelect}
                    />
                );
            case 3:
                return (
                    <PropertyType
                        selectedType={selectedType}
                        handleSelect={handleSelect}
                    />
                );
            case 4:
                return <ConfirmInfo stay={stay} handleChange={handleChange} />;
            case 5:
                return <EndStepAddStay />
            case 6:
                return <h1>STEP 6</h1>;
            default:
                return <h1>Unknown Step</h1>;
        }
    }

    function nextStep() {
        setStepNum(prev => prev + 1);
    }

    function prevStep(ev) {
        ev.preventDefault()
        setStepNum(prev => (prev > 1 ? prev - 1 : 1));
    }


    return (
        <div className='main-container-add-stay'>
            <div className='header-add-stay'>
                <div className='logo-add-stay'>
                    <img src="/public/img/airbnb-logo-add-stay-header.png" alt="Airbnb logo" />
                </div>
                <div className='header-add-stay-btn'>
                    <button onClick={() => navigate('/hosting')}>Save & exit</button>
                </div>
            </div>
            <form onSubmit={stepNum === 4 ? onAddStay : (e) => e.preventDefault()}>
                {renderStep()}

                <div className='footer-progress-add-stay'>
                    <button type="button" onClick={prevStep}>Back</button>
                    {stepNum !== 4 && <button type="button" onClick={nextStep}>Next</button>}
                    {stepNum === 4 && <button type="submit">Submit</button>}
                </div>
            </form>

        </div>
    );
}







// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service';
// import { stayService } from '../services/stay';
// import { addStay, setStaytoEdit } from '../store/actions/stay.actions';
// import { labels } from "../services/labels.service";


// export function AddStay() {
//     const stay = useSelector(storeState => storeState.stayModule.stayToEdit);
//     const [stepNum, setStepNum] = useState(1)

//     // STEP 2


//     const navigate = useNavigate();
//     const dispatch = useDispatch();

//     // מביא את המשתמש המחובר
//     const loggedInUser = useSelector(storeState => storeState.userModule.user);
//     const { _id, fullname, imgurl } = loggedInUser

//     const [selectedType, setSelectedType] = useState('') // סטייט לבחירה יחידה

//     const handleSelect = (event) => {
//         setSelectedType(event.target.value) // עדכון הסטייט בהתאם לכפתור שנבחר
//         console.log('event.target.value:', event.target.value)
//     }

//     function handleChange({ target }) {
//         const field = target.name
//         let value = target.value
//         switch (target.type) {
//             case 'number':
//             case 'range':
//                 value = +value
//                 break

//             case 'checkbox': value = target.checked
//                 break

//             default: break
//         }
//         setStaytoEdit({ ...stay, [field]: value })
//     }


//     async function onAddStay(ev) {
//         ev.preventDefault();
//         try {
//             const stayToSave = {
//                 ...stay,
//                 host: {
//                     _id,
//                     fullname,
//                 },
//             };

//             await addStay(stayToSave)
//             showSuccessMsg('Stay saved successfully')
//             navigate('/hosting/listings')
//         } catch (err) {
//             console.error(err.message)
//             showErrorMsg('Failed to save stay')
//         }
//     }


//     // שליטה בתצוגה על פי המספר של stepNum
//     function renderStep() {
//         switch (stepNum) {
//             case 1:
//                 return aboutyourPlace()
//             case 2:
//                 return placeTypes(onAddStay, stay, handleChange, selectedType, handleSelect)
//             case 3:
//                 return PropertyType(selectedType, handleSelect)
//             case 4:
//                 return confirmInfo(stay, handleChange)
//             case 5:
//                 return <h1>STEP 5</h1>
//             case 6:
//                 return <h1>STEP 6</h1>
//             default:
//                 return <h1>Unknown Step</h1>
//         }
//     }

//     function nextStep() {
//         setStepNum(prev => prev + 1)
//     }

//     function prevStep() {
//         setStepNum(prev => (prev > 1 ? prev - 1 : 1))
//     }

//     return (
//         <div className='main-container-add-stay'>
//             <div className='header-add-stay'>
//                 <div className='logo-add-stay'><img src="/public/img/airbnb-logo-add-stay-header.png" alt="" /></div>
//                 <div className='header-add-stay-btn'>

//                     {/* <button>Questions?</button> */}
//                     <button onClick={() => navigate('/hosting')}>Save & exit</button>

//                 </div>
//             </div>
//             {renderStep()}

//             <div className='footer-progress-add-stay'>
//                 <button onClick={prevStep}>Back</button>
//                 <button onClick={nextStep}>Next</button>
//             </div>
//         </div>
//     )
// }


// // STEP 1
// function aboutyourPlace() {
//     return <div className='step-1 about-your-place'>
//         <div className='info-about-your-place'>
//             <p className='p-step1'>Step 1</p>
//             <h1>Tell us about your place</h1>
//             <p>In this step, we'll ask you which type of property you have and
//                 if guests will book the entire place or just a room. Then let
//                 us know the location and how many guests can stay.
//             </p>
//         </div>
//         <div className='video-player-container'>

//             <video
//                 data-testid="video-player"
//                 className="video-player-about-your-place"
//                 autoPlay
//                 crossOrigin="anonymous"
//                 playsInline
//                 preload="auto"

//             >
//                 <source src="/public/video/about-your-place-step-1.mp4" type="video/mp4" />
//                 Your browser does not support the video tag.
//             </video>
//         </div>

//     </div>
// }

// // style={{ objectFit: 'cover' }}

// //STEP2
// function placeTypes(func, stay, handleChange, selectedType, handleSelect) {
//     return (
//         <div className='step-2-container'>
//             <h1>Which of these best describes your place?</h1>
//             <div className='types-container' >
//                 {Object.keys(labels).map((label, index) => (
//                     <div className={`type-box ${selectedType === label ? 'selected' : ''}`} key={index}>
//                         <label key={index}>
//                             <input
//                                 type="radio"
//                                 value={label}
//                                 checked={selectedType === label} // בדיקה אם זה הכפתור שנבחר
//                                 onChange={handleSelect} // עדכון הבחירה
//                             />
//                             <div className="stay-labal-item">
//                                 <img width={24} height={24} src={labels[label]} alt={label} />
//                                 <span className="label-name">{label}</span>
//                             </div>
//                             {/* <span>{label}</span> */}
//                         </label>
//                     </div>
//                 ))}
//             </div>



//             <div className="add-stay-container">
//                 <h1>Add New Stay</h1>
//                 <form onSubmit={func}>
//                     <div>
//                         <label htmlFor="name">Stay Name:</label>
//                         <input
//                             type="text"
//                             id="name"
//                             name="name"
//                             value={stay.name}
//                             onChange={handleChange}
//                             required
//                         />
//                     </div>

//                     <div>
//                         <label htmlFor="description">Stay description:</label>
//                         <input
//                             type="text"
//                             id="description"
//                             name="description"
//                             value={stay.description}
//                             onChange={handleChange}
//                             required
//                         />
//                     </div>

//                     <div>
//                         <label htmlFor="price">Price per Night:</label>
//                         <input
//                             type="number"
//                             id="price"
//                             name="price"
//                             value={stay.price}
//                             onChange={handleChange}
//                             required
//                         />
//                     </div>

//                     <div>
//                         <label htmlFor="type">Type:</label>
//                         <input
//                             type="text"
//                             id="type"
//                             name="type"
//                             value={stay.type}
//                             onChange={handleChange}
//                             required
//                         />
//                     </div>

//                     <button type="submit">Add Stay</button>
//                 </form>
//             </div>
//         </div>
//     )
// }

// // STEP 3
// function PropertyType(selectedType, handleSelect) {

//     console.log('selectedType:', selectedType)

//     return (
//         <div className='step-3-container'>
//             <h1>What type of place will guests have?</h1>

//             <div className='select-property-type'>

//                 {/* סוג מקום: כל המקום לרשות האורחים */}
//                 <label key={'an-entire-place'} className={`btn an-entire-place ${selectedType === 'An entire place' ? 'selected' : ''}`}>
//                     <input
//                         type="radio"
//                         value="An entire place"
//                         checked={selectedType === 'An entire place'} // **בדיקה אם נבחר "An entire place"**
//                         onChange={handleSelect} // **עדכון הסטייט כאשר יש שינוי**
//                     />

//                     <div className="stay-labal-item">
//                         <h2>An entire place</h2>
//                         <span className="label-name">Guests have the whole place to themselves.</span>
//                     </div>
//                 </label>

//                 {/* סוג מקום: חדר פרטי */}
//                 <label key={'a-room'} className={`btn a-room ${selectedType === 'A room' ? 'selected' : ''}`}>
//                     <input
//                         type="radio"
//                         value="A room"
//                         checked={selectedType === 'A room'} // **בדיקה אם נבחר "A room"**
//                         onChange={handleSelect} // **עדכון הסטייט כאשר יש שינוי**
//                     />

//                     <div className="stay-labal-item">
//                         <h2>A room</h2>
//                         <span className="label-name">Guests have their own room in a home, plus access to shared spaces.</span>
//                     </div>
//                 </label>

//                 {/* סוג מקום: חדר משותף */}
//                 <label key={'a-shared-room'} className={`btn a-shared-room ${selectedType === 'A shared room' ? 'selected' : ''}`}>
//                     <input
//                         type="radio"
//                         value="A shared room"
//                         checked={selectedType === 'A shared room'} // **בדיקה אם נבחר "A shared room"**
//                         onChange={handleSelect} // **עדכון הסטייט כאשר יש שינוי**
//                     />

//                     <div className="stay-labal-item">
//                         <h2>A shared room</h2>
//                         <span className="label-name">Guests sleep in a room or common area that may be shared with you or others.</span>
//                     </div>
//                 </label>

//             </div>
//         </div>
//     )
// }

// // STEP 4

// function confirmInfo(stay, handleChange) {
//     return (
//         <div className="step-4-container">
//             <h1>Confirm your address</h1>
//             <p>Your address is only shared with guests after they've made a reservation.</p>

//             <form className="address-form">
//                 <div className="input-container">
//                     <label htmlFor="propertyName">Property name</label>
//                     <input
//                         type="text"
//                         id="propertyName"
//                         name="propertyName"
//                         value={stay.propertyName}
//                         onChange={handleChange}
//                         placeholder="Property name"
//                         required
//                     />
//                 </div>

//                 <div className="input-container">
//                     <label htmlFor="price">Price per night</label>
//                     <input
//                         type="number"
//                         id="price"
//                         name="price"
//                         value={stay.price}
//                         onChange={handleChange}
//                         placeholder="Price per night"
//                         required
//                     />
//                 </div>

//                 <div className="input-container">
//                     <label htmlFor="description">Property description</label>
//                     <textarea
//                         id="description"
//                         name="description"
//                         value={stay.description}
//                         onChange={handleChange}
//                         placeholder="Describe your property"
//                         rows="4"
//                         required
//                     />
//                 </div>

//                 <div className="input-container">
//                     <label htmlFor="country">Country/region</label>
//                     <select id="country" name="country" value={stay.country} onChange={handleChange}>
//                         <option value="">Select Country</option>
//                         <option value="Israel">Israel - IL</option>
//                         <option value="USA">USA - US</option>
//                         {/* אפשר להוסיף עוד אופציות לפי הצורך */}
//                     </select>
//                 </div>

//                 <div className="input-container">
//                     <label htmlFor="address">Street address</label>
//                     <input
//                         type="text"
//                         id="address"
//                         name="address"
//                         value={stay.address}
//                         onChange={handleChange}
//                         placeholder="Street address"
//                         required
//                     />
//                 </div>

//                 <div className="input-container">
//                     <label htmlFor="city">City / town</label>
//                     <input
//                         type="text"
//                         id="city"
//                         name="city"
//                         value={stay.city}
//                         onChange={handleChange}
//                         placeholder="City / town"
//                         required
//                     />
//                 </div>
//             </form>
//         </div>
//     )
// }

