import React from 'react'
import './App.css';
import {
  Switch,
  Route,
  useLocation
}
from 'react-router-dom';
import NavBar from './components/Navbar';
import Events from './components/Events';
import Sports from './components/Sports';
import Homepage from './components/Homepage';
import SearchResults from './components/SearchResults';

function App() {
  const location = useLocation()
  return (
    <div className="App">
      <NavBar page={location.pathname} />
      <Switch>
        <Route exact path='/' children ={<Homepage/>}/>
        <Route path='/sports/:id' children={<Sports />}/>
        <Route path="/search" children={<SearchResults />} />
        {/* <Route path='/events/:id' children={<Events />} /> */}
      </Switch>
      
    </div>
  );
}

export default App;
