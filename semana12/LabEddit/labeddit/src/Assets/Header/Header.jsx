import React from 'react'
import { useHistory } from 'react-router-dom';
import logo from '../Imgs/logo.png'
import { Buttons, LogoTitle, Nav } from './style';

export default function Header() {
    const [visual, setVisual] = React.useState(false)
    const history = useHistory()

    const logout = () => {
        localStorage.removeItem("token")
        history.push('/login')
        setVisual(!visual)
    }
    const pathName = history.location.pathname

    const goToHome = () => {
        history.push('/')
    }

    React.useEffect(() => {
    }, [])

    return (
        <Nav>
            <LogoTitle>
                <img src={logo} alt="" onClick={goToHome} />
                <b onClick={goToHome}>Labbedit</b>
            </LogoTitle>
            <Buttons>
                {(pathName !== '/login' && pathName !== '/signup') && <button onClick={logout}>Logout</button>}
            </Buttons>
        </Nav>
    )
}