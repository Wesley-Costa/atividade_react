import react from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import User from './pages/'

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path = "/" component={User}>
            </Switch>
        </BrowserRouter>
    );
}