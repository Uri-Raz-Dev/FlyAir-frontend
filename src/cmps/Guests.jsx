export function Guests(){
    return(

        <div className="guests-container">

            <div className="guests-layout">

<div className="guests-card">
    <div>

    <h3>Adults</h3>
  <p>Ages 13 or above</p> 

    </div>

  <div className="guests-counter">

  <button>+</button>
  {/* <span>{adultsCount}</span> */}
  <span>{0}</span>
<button>-</button>

    </div> 

</div>

<div className="guests-card">

    <div>

    <h3>Children</h3>
  <p>Ages 2-12</p>  

    </div>

  <div className="guests-counter">

  <button>+</button>
  {/* <span>{childrenCount}</span> */}
  <span>{0}</span>
<button>-</button>

  </div>

</div>

<div className="guests-card">

    <div>
    <h3>Infants</h3>
  <p>Under 2 </p> 

    </div>

  <div className="guests-counter">
  <button>+</button>
  {/* <span>{infantsCount}</span> */}
  <span>{0}</span>
<button>-</button>

  </div>
</div>

<div className="guests-card">
    <div>
    <h3>Pets</h3>
  <p>Home pets</p>  
    </div>

  <div className="guests-counter">
  <button>+</button>
  {/* <span>{petsCount}</span> */}
  <span>{0}</span>
<button>-</button>

  </div>

</div>

            </div>

    </div>

)
}