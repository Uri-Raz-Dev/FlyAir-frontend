import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addStay } from '../store/actions/stay.actions';
import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service';
import { stayService } from '../services/stay';

export function AddStay() {
    const [stayDetails, setStayDetails] = useState(stayService.getEmptyStay())
    console.log('stayDetails:', stayDetails)
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // מביא את המשתמש המחובר
    const loggedInUser = useSelector(storeState => storeState.userModule.user);

    function handleChange({ target }) {
        const { name, value } = target;
        setStayDetails(prevDetails => ({ ...prevDetails, [name]: value }));
    }

    const onAddStay = async (ev) => {
        ev.preventDefault();

        const stay = {
            ...stayDetails,
            type: 'Chalet', // ברירת מחדל
            host: {
                _id: loggedInUser._id, 
                fullname: loggedInUser.fullname,
                // imgUrl: loggedInUser.imgUrl
            },
            location: {
                city: 'Enter City', // ערך ברירת מחדל
                country: 'Enter Country' // ערך ברירת מחדל
            }
        }

        try {
            // const savedStay = await dispatch(addStay(stayDetails));
            const savedStay = await addStay(stayDetails)
            showSuccessMsg(`Stay added (id: ${savedStay._id})`);
            navigate('hosting/listings');
        } catch (err) {
            showErrorMsg('Cannot add stay');
        }

       
    };

    return (
        <div className="add-stay-container">
            <h1>Add New Stay</h1>
            <form onSubmit={onAddStay}>
                <div>
                    <label htmlFor="name">Stay Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={stayDetails.name}
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
                        value={stayDetails.price}
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
                        value={stayDetails.type}
                        onChange={handleChange}
                        required
                    />
                </div>

                <button type="submit">Add Stay</button>
            </form>
        </div>
    );
}
