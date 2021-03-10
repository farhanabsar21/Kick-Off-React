import React from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import LeagueDetails from "./Components/LeagueDetails/LeagueDetails";
import NotFound from "./Components/NotFound/NotFound";

function App() {
  return (
     <div className="App">
      <Router>
        <Switch>
          <Route path="/home"><Home></Home></Route>
          <Route path="/league/:leagueId"><LeagueDetails></LeagueDetails></Route>
          <Route exact path="/"><Home></Home></Route>
          <Route path="*"><NotFound></NotFound></Route>
        </Switch>
      </Router>
     </div>
  );
}

export default App;
