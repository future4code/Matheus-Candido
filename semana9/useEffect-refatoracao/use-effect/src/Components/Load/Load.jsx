import React, {useEffect, useState} from 'react'
import load2 from './Imgs/load2.gif'
import App from '../../App'

// const Div = styled.div``;


export default function Load() {
    const [done, setDone] = useState(undefined)

    useEffect(()=> {
        setTimeout(()=> {
            setDone(true)
        }, 2000)
    })
    return (
    <div>
        {!done ? (
            <div className="App-header">
                <img src={load2} alt="" className="Load"/>
            </div>
        ): (<App/>)}
    </div>
)
}