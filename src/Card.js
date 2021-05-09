import React from "react";

const Card = () => {
    return (
        <div className='bg-light-green dib br3 pa3 ma2'>
            <img src="https://robohash.org/test?200x200" alt="robots"></img>
            <div>
                <h2>Jane Doe</h2>
                <p>janedoe@email.com</p>
            </div>
        </div>
    )
}

export default Card;