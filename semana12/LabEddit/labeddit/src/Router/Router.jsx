import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../Components/Home/Home'


export default function Router() {
    return (
        <>
            <Switch>
                <Route exact patch="/">
                    {/* Componente Home */}
                    <Home />
                </Route>
                {/* ------------------------------------------- */}
                <Route exact patch="/login">
                    {/* Component Login */}
                </Route>
                {/* ------------------------------------------- */}
                <Route exact patch="/signup">
                    {/* Component SignUp */}
                </Route>
                {/* ------------------------------------------- */}
                <Route exact patch="/loged/posts">
                    {/* Component Posts user */}
                </Route>
                {/* ------------------------------------------- */}
                <Route exact patch="notLoged/posts">
                    {/* Component Posts not user */}
                </Route>
                {/* ------------------------------------------- */}
                <Route>
                    {/* Component 404 */}
                </Route>
            </Switch>
        </>
    )
}