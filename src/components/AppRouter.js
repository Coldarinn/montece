import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import {routes} from "../router/router"
import {NEWS_ROUTE} from "../router/routes";

const AppRouter = () => {
    return (
        <Switch>
            {routes.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exact/>
            )}
            <Redirect to={NEWS_ROUTE}/>
        </Switch>
    );
};

export default AppRouter;