import React from 'react'
import { useHistory, useLocation } from 'react-router-dom';
import { Logo, Main } from './styles'
import icon from '../../../../imgs/icon-space.jpg'
import { useEffect } from 'react';


export default function Header() {
    const history = useHistory()
console.log(history)
    function usePageViews() {
        let location = useLocation()
        React.useEffect(() => {
            location.send(["pageview", location.pathname])
        }, [location])
        console.log(location)
    }
    let token = window.localStorage.getItem("token")

    const goToList = () => {
        history.push("/trips/list")
    }
    const logout = () => {
        token = window.localStorage.removeItem("token")
        history.push("/adm/signin")
    }
    const goToHome = () => {
        history.push("/adm/trips/create")
    }
    return (
        <Main>
            <Logo>
                <img src={icon} alt="" /> <h2>Future &#x2716;space</h2>
                {history.location.pathname === "/" ? <div></div>: <div></div>}
            </Logo>
        </Main>
    )
}