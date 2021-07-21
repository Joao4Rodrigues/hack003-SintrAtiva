import React from './React'
import './App.css';
import {
  Switch,
  Route,
  useLocation
}
from 'react-router-dom';
import Homepage from './components/Homepage';


function App() {
  const location = useLocation()
  return (
    <div className="App">
      <Homepage pagina={location.pathname} />
      <Switch>
        <Route exact path='/' children={<Events />} />
        
        <Route path='/sports/:id' children={<Sports />} />
        <Route path='/events/:id' children={<Events />} />
      </Switch>
      
    </div>
  );
}

export default App;
