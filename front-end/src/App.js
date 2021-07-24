import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css"
//Pages
import Home from '../src/pages/Home'
import FourOFour from '../src/pages/FourOFour'

//Components 

import NavBar from '../src/components/NavBar'
import PackagesList from "./components/PackagesList";
import PackagesNewForm from "./components/PackagesNewForm";
import PackagesEditForm from "./components/PackagesEditForm";
import PackageDetails from "./components/PackageDetails";

const App = () => {
  return (
    <div>
      <Router>
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/travelpackages">
              <PackagesList />
            </Route>
            <Route path="/travelpackages/new">
              <PackagesNewForm />
            </Route>
            <Route exact path="/travelpackages/:id">
              <PackageDetails />
            </Route>
            <Route exact path="/travelpackages/:id/edit">
              <PackagesEditForm />
            </Route>
            <Route path="*">
              <FourOFour />
            </Route> 
          </Switch>
        </main>
      </Router>
    </div>
  );
};

export default App;
