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

    // Get the logged-in user
    const loggedInUser = useSelector(storeState => storeState.userModule.user);

    function handleChange({ target }) {
        const { name, value } = target;
        setStayDetails(prevDetails => ({ ...prevDetails, [name]: value }));
    }

    const onAddStay = async (ev) => {
        ev.preventDefault()

        const stay = {
            ...stayDetails,
            type: stayDetails.type || 'Chalet', // Default value
            host: {
                _id: loggedInUser._id,
                fullname: loggedInUser.fullname,
                // imgUrl: loggedInUser.imgUrl
            },
            location: {
                city: stayDetails.city || 'Enter City', // Default value
                country: stayDetails.country || 'Enter Country' // Default value
            }
        }

        try {
            // Dispatch the action to add stay
            const savedStay = await addStay(stay); // Dispatch addStay
            showSuccessMsg(`Stay added (id: ${savedStay._id})`);
            navigate('/hosting/listings'); // Corrected route navigation
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
