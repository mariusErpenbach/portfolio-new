import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Welcome from "./components/Welcome"
import Blog from "./components/Blog"
import Aboutme from "./components/Aboutme"
import NavBar from "./components/NavBar"
import BackgroundBalls from "./components/backgrounds/Background-balls"
import QuickNavi from './components/navigationBar/QuickNavi';
function App() {

  return (

    <React.Fragment>
      <BackgroundBalls/>
      
      <Router>
      <QuickNavi/>
      <div>  
      <NavBar/>
     {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
          <Route path="/aboutme">
            <Aboutme />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/">
            <Welcome />
          </Route>
        </Switch>
      </div>
    </Router>
    </React.Fragment>
  );
}

export default App;
