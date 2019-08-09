import React from 'react'

const Innings = ({outs, inning, runs}) => {

    return (
        <div>
            <h2>Outs in Inning {inning}</h2>
            <p>Outs: {outs}</p>
            <h2>Total Runs:</h2>
            <p>{runs}</p>
        </div>
    )
}
export default Innings