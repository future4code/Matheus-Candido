import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import NotFound from '../Pages/NotFound/NotFound'
import SignIn from '../Pages/Login/SignIn'
import SignUp from '../Pages/Login/SignUp'
import ListTripsPage from '../Pages/ListTripsPage/ListTripsPage'
import TripDetailsPage from '../Pages/TripDetailsPage/TripDetailsPage'
import CreateTripPage from '../Pages/CreateTripPage/CreateTripPage'
import ApplicationForm from '../Pages/ApplicationForm/ApplicationForm'
import Header from '../Pages/PagesFixeds/Header/Header'

export default function Router() {
    return (
            <div>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/adm/signin">
                        <SignIn />
                    </Route>
                    <Route exact path="/adm/signup">
                        <SignUp />
                    </Route>
                    <Route exact path="/adm/trips/create">
                        <CreateTripPage />
                    </Route>
                    <Route exact path="/trips/list">
                        <ListTripsPage />
                    </Route>
                    <Route exact path="/trips/details/:id">
                        <TripDetailsPage />
                    </Route>
                    <Route exact path="/application-form/:id">
                        <ApplicationForm />
                    </Route>
                    <Route >
                        <NotFound />
                    </Route>
                </Switch>
            </div>
    )
}