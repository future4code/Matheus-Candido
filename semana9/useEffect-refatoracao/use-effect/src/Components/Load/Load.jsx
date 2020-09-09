import React, {useEffect, useState} from 'react'
import load from './Imgs/load.gif'
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
            <div className="App">
                <img src={load} alt=""/>
            </div>
        ): (<App/>)}
    </div>
)
}