import React from "react";
import {Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import { authState } from "../../app/redux/auth";

import Home from "../../views/Home";
// import Calendar from "../../views/Calendar";
import NotFound from "../../views/NotFound";
// import Patreon from "../../views/Patreon";
import Login from "../../views/Login";
// import Spotify from "../../views/Spotify";
// import Videos from "../../views/Videos";
// import Courriel from "../../views/Courriel";
// import Store from "../../views/Store";
import Music from "../../views/Music";
import Dashboard from "../../views/DashBoard";
import SOCAN from "../../views/SOCAN";
import { useStyles } from "./styles";
import clsx from "clsx";

const Routes = (props) => {
  const { loggedIn } = useSelector(authState);
  const classes = useStyles();

  return (
    <div
      className={clsx(classes.content, {
        [classes.contentShift]: props.mobileOpen,
      })}
    >
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route path="/calendrier" component={Calendar} /> */}
        <Route path="/api/connect" component={Login} />
        {/* <Route path="/courriel" component={Courriel} /> */}
        {/* <Route path="/magasin" component={Store} /> */}
        <Route path="/musique" component={Music} />
        {/* <Route path="/patreon" component={Patreon} /> */}
        {/* <Route path="/spotify" component={Spotify} /> */}
        {/* <Route path="/videos" component={Videos} /> */}
        <Route path="/socan" component={SOCAN} />
        {loggedIn && <Route path="/tableau" component={Dashboard} />}
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

export default Routes;
