import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import BruiloftenMenu from './Pages/BruiloftenMenu';
import ZaalHuurServices from './Pages/ZaalHuurServices';
import Login from './Pages/Login';

class Router extends React.Component{
    
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Dashboard}/>
                    <Route exact path="/bruiloften" component={BruiloftenMenu}/>
                    <Route exact path="/zaalhuur" component={ZaalHuurServices}/>
                    <Route exact path="/login" component={Login}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Router;