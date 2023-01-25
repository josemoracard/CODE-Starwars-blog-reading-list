import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import injectContext from "./store/appContext";

import { Home } from "./views/Home.js";
import { CharacterDetail } from "./views/CharacterDetail";
import { PlanetDetail } from "./views/PlanetDetail";
import { VehicleDetail } from "./views/VehicleDetail";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/characters/:id">
              <CharacterDetail />
            </Route>
            <Route path="/planets/:id">
              <PlanetDetail />
            </Route>
            <Route path="/vehicles/:id">
              <VehicleDetail />
            </Route>
          </Switch>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
