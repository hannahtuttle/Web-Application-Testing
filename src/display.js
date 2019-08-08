import React from 'react'

const Display = ({strikes, balls}) => {

    return(
        <div>
            <p> Strikes: {strikes}</p>
            <p> Balls: {balls}</p>
        </div>
    )
}

export default Display;