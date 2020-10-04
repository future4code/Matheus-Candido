import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ErrorPage from '../Components/ErrorPage/ErrorPage'
import Login from '../Components/SignIn/Login/Login'
import SignUp from '../Components/SignIn/SignUp/SignUp'
import AllPosts from '../Components/Posts/OnlyPosts/AllPosts/AllPosts'
import AllComments from '../Components/Posts/OnlyComments/AllComments/AllComments'

export default function Router(props) {
    return (
        <>
            <Switch>
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
                    {/* Component All Posts */}
                    <AllPosts getAllPosts={props.getAllPosts} posts={props.posts} />
                </Route>
                {/* ------------------------------------------- */}
                <Route exact path="/posts/comments/:id">
                    {/* Component All Comments */}
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