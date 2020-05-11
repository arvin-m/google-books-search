import React from 'react';
import {BrowserRouter as Router,Route} from "react-router-dom";
import Saved from './Pages/SavedPage';
import Search from './Pages/SearchPage';
import Nav from './components/Navbar/Navbar';

function App() {
  return (
   
    <Router>
      <div>
        <Nav />
          <Switch>
            <Route path="/" exact component={Search} />
           <Route path="/search" exact component={Search} />
           <Route path='/saved' exact component={Saved}/>
          </Switch>
      </div>
    </Router>
   

  );
}

export default App;
