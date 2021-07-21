import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Pages
import Home from '../src/pages/Home'
import Index from '../src/pages/Index'
import Show from '../src/pages/Show'
import Edit from '../src/pages/Edit'
import New from '../src/pages/New'
import FourOFour from '../src/pages/FourOFour'

//Components 

import NavBar from '../src/components/NavBar'

const App = () => {
  return (
    <div>
      <Router>
        <NavBar />
        <main>
          <Switch>
            {/* <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/travelPackages">
              <Index />
            </Route>
            <Route path="/travelPackages/new">
              <New />
            </Route>
            <Route exact path="/travelPackages/:id">
              <Show />
            </Route>
            <Route path="/travelPackages/edit">
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
