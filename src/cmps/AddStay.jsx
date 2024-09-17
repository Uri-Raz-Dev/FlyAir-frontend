import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addStay, setStaytoEdit } from '../store/actions/stay.actions';
import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service';
import { stayService } from '../services/stay';

export function AddStay() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const stay = useSelector(storeState => storeState.stayModule.stayToEdit);
    // Get the logged-in user
    const loggedInUser = useSelector(storeState => storeState.userModule.user);

    console.log('stay:', stay)
    const { _id, fullname, imgurl } = loggedInUser
    console.log('loggedInUser:', fullname)

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
    );
}
