import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ErrorPage from '../Components/ErrorPage/ErrorPage'
import Home from '../Components/Home/Home'
import LoggedPosts from '../Components/Posts/LoggedPosts/LoggedPosts'
import NotLoggedPosts from '../Components/Posts/CreatePosts/CreatePosts'
import Login from '../Components/SignIn/Login/Login'
import SignUp from '../Components/SignIn/SignUp/SignUp'


export default function Router() {

    return (
        <>
            <BrowserRouter>

                <Switch>
                    <Route exact path="/">
                        {/* Componente Home */}
                        <Home />
                        {/* <Home /> */}
                    </Route>
                    {/* ------------------------------------------- */}
                    <Route exact path="/login">
                        {/* Component Login */}
                        <Login />
                    </Route>
                    {/* ------------------------------------------- */}
                    <Route exact path="/signup">
                        {/* Component SignUp */}
                        <SignUp />
                    </Route>
                    {/* ------------------------------------------- */}
                    <Route exact path="/loged/posts">
                        {/* Component Posts user */}
                        <LoggedPosts />
                    </Route>
                    {/* ------------------------------------------- */}
                    <Route exact path="notLoged/posts">
                        {/* Component Posts not user */}
                        <NotLoggedPosts />
                    </Route>
                    {/* ------------------------------------------- */}
                    <Route>
                        {/* Component 404 */}
                        <ErrorPage />
                    </Route>
                </Switch>
            </BrowserRouter>
        </>
    )
}