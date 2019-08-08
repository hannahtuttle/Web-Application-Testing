import React, {useState} from 'react'
import Display from './display.js'


const Dashboard = () => {
    const [strike, setStrike] = useState(0)
    const [balls, setBalls] = useState(0)

    const handleStrikeClick = () => {
       if(strike <= 2){ 
           setStrike(strike + 1)
        }else{
            setStrike(0);
            setBalls(0)
        }
        }

    const handleBallClick = () => {
        if(balls <= 3){
        setBalls(balls +1)
    }else{
        setStrike(0);
        setBalls(0)
    }
    }

    const handleHitClick = () => {setStrike(0); setBalls(0)}

    const handleFouls = () => {
        if(strike <= 1){
            setStrike(strike + 1)
        }
    }

    return(
        <div>
            <Display strikes={strike} balls={balls}/>
           <button onClick={handleStrikeClick}>Strike</button>
           <button onClick={handleBallClick}>ball</button>
           <button onClick={handleFouls}>foul</button>
           <button onClick={handleHitClick}>hit</button>
        </div>
    )
}

export default Dashboard;