import React, {useState} from 'react'
import Display from './display.js'
import Innings from './innings.js'


const Dashboard = () => {
    const [strike, setStrike] = useState(0)
    const [balls, setBalls] = useState(0)
    const [outs, setOuts] = useState(0)
    const [inning, setInning] = useState(1)
    const [hits, setHits] = useState(0)
    const [runs, setRuns] = useState(0)

    const handleStrikeClick = () => {
       if(strike <= 1){ 
           setStrike(strike + 1)
        }else{
            setStrike(0);
            setBalls(0)
            if(outs <=1){
                setOuts(outs + 1)
            }else{
                setOuts(0)
                if(inning <=8){
                    setInning(inning +1)
                }else{
                    setInning('game over')
                }
            };

        }
        }

    const handleBallClick = () => {
        if(balls <= 2){
        setBalls(balls +1)
    }else{
        setStrike(0);
        setBalls(0)
        setHits(hits + 1)
        if(hits === 3){
            setHits(0)
            setRuns(runs + 1)
        }
    }
    }

    const handleHitClick = () => {
        setStrike(0); 
        setBalls(0)
        setHits(hits +1)
        if(hits === 3){
            setHits(0)
            setRuns(runs + 1)
        }
    }

    const handleFouls = () => {
        if(strike <= 1){
            setStrike(strike + 1)
        }
    }

    const handleBaseOuts = () => {
        if(outs <=1){
            setOuts(outs + 1)
        }else{
            setOuts(0)
            if(inning <=8){
                setInning(inning +1)
            }else{
                setInning('game over')
            }
        };
    }

    console.log(hits)
    return(
        <div>
            <h1>Home Team</h1>
            <Display strikes={strike} balls={balls}/>
           <button onClick={handleStrikeClick}>Strike</button>
           <button onClick={handleBallClick}>ball</button>
           <button onClick={handleFouls}>foul</button>
           <button onClick={handleHitClick}>hit</button>
           <button onClick={handleBaseOuts}> Got Out on base</button>
            <Innings inning={inning} outs={outs} runs={runs}/>
        </div>
    )
}

export default Dashboard;