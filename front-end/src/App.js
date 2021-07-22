import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css"
//Pages
import Home from '../src/pages/Home'
import FourOFour from '../src/pages/FourOFour'

//Components 

import NavBar from '../src/components/NavBar'
import PackagesList from "./components/PackagesList";

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
            {/* <Route path="/travelpackages/new">
              <New />
            </Route>
            <Route exact path="/travelpackages/:id">
              <Show />
            </Route>
            <Route path="/travelpackages/edit">
              <Edit />
            </Route>
            <Route exact path="*">
              <FourOFour />
            </Route> */}
          </Switch>
        </main>
      </Router>
    </div>
  );
};

export default App;
