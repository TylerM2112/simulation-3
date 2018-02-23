import React, { Fragment }from 'react';
import { Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';

export default <Fragment>
    <Route exact path="/" component={Login} />
    <Route path="/dashboard" component={Dashboard} />
   </Fragment>