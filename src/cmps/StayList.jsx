import { Link } from 'react-router-dom'
import { userService } from '../services/user'
import { StayPreview } from './StayPreview'

export function StayList({ stays, onRemoveStay, onUpdateStay }) {
    console.log(stays);

    // function shouldShowActionBtns(stay) {
    //     const user = userService.getLoggedinUser()

    //     if (!user) return false
    //     if (user.isAdmin) return true
    //     return stay.owner?._id === user._id
    // }


    return (

        <div className="main-grid">
            {stays.map((stay) => (
                <div className="card" key={stay._id}>

                    <StayPreview stay={stay} />

                </div>
            ))}
        </div>
    )


    //  <section>
    // //     <ul className="list">
    // //         {stays.map(stay =>
    //             <li key={stay._id} >
    //                 <StayPreview stay={stay}  />
    //                  {/* <div className="actions">
    //                     <button onClick={() => onUpdateStay(stay)}>Edit</button>
    //                     <button onClick={() => onRemoveStay(stay._id)}>x</button>
    //                 </div> */}
    //             </li>)
    //         }
    //     </ul>
    // </section>
}