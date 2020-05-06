import React from 'react';
import {BrowserRouter as Router,Route} from "react-router-dom";
import Saved from './Pages/SavedPage';
import Search from './Pages/SearchPage';

function App() {
  return (
   
      <Router>
          <Route path="/" exact component={Search} />
          <Route path="/search" exact component={Search} />
          <Route path='/saved' exact component={Saved}/>
      </Router>
   

  );
}

export default App;
