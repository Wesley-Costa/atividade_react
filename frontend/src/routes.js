import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import User from './pages/User';
import Profile from './pages/Profile';

export default function Routes (){
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={User}></Route>
                <Route path='/create' component={Profile}></Route>
                <Route path='/update/:id' component={Profile}></Route>
            </Switch>
        </BrowserRouter>
    );
}