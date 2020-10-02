import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ErrorPage from '../Components/ErrorPage/ErrorPage'
import Home from '../Components/Home/Home'
import Login from '../Components/SignIn/Login/Login'
import SignUp from '../Components/SignIn/SignUp/SignUp'
import AllPosts from '../Components/Posts/OnlyPosts/AllPosts/AllPosts'
import AllComments from '../Components/Posts/OnlyComments/AllComments/AllComments'
import { useAxios } from '../CustomHooks/AxiosConfigs/useAxios'


export default function Router() {
    const { getAllPosts, posts } = useAxios()
    return (
        <>
            <Switch>
                {/* <Route exact path="/posts">
                        {/* Componente Home */}
                {/* <Home /> */}
                {/* <Home /> */}
                {/* </Route>  */}
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
                <Route exact path="/">
                    {/* Component Posts user */}
                    <AllPosts getAllPosts={getAllPosts} posts={posts} />
                </Route>
                {/* ------------------------------------------- */}
                <Route exact path="/posts/comments/:id">
                    {/* Component Posts not user */}
                    <AllComments />
                </Route>
                {/* ------------------------------------------- */}
                <Route>
                    {/* Component 404 */}
                    <ErrorPage />
                </Route>
            </Switch>
        </>
    )
}