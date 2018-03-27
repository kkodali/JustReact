import React from "react";
import {Route, Switch} from "react-router-dom";
import Home from "./containers/home/Home";
import Login from "./containers/login/Login";
import Bungie from "./containers/bungie/Bungie";
import EA from "./containers/bungie/ea";
import NotFound from "./containers/errorPage/NotFound";
import Signup from "./containers/signup/Signup";
import AppliedRoute from "./components/AppliedRoute";

export default({childProps}) => <Switch>
  <AppliedRoute path="/" exact component={Home} props={childProps}/>
  <AppliedRoute path="/login" exact component={Login} props={childProps}/>
  <AppliedRoute path="/bungie" exact component={Bungie} props={childProps}/>
  <AppliedRoute path="/ea" exact component={EA} props={childProps}/>
  <AppliedRoute path="/signup" exact component={Signup} props={childProps}/>
  <Route component={NotFound}/>
</Switch>;