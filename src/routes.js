import React, { Fragment }from 'react';
import { Route } from 'react-router-dom';
import Login from './components/Login/Login';
import AccountContainer from './components/AccountContainer/AccountContainer';

export default <Fragment>
    <Route exact path="/" component={Login} />
    <Route path="/account" component={AccountContainer} />
   </Fragment>