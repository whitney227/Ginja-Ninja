import React from 'react';
import './App.css';

import Home from './pages/Home';
import Packages from './pages/Packages';
import TrophyRoom from './pages/TrophyRoom';
import Error from './pages/Error';

import {Route, Switch} from 'react-router-dom'

import Navbar from './components/Navbar';


function App() {
  return (
  <>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/packages" component={Packages}/>
      <Route exact path="/trophy-room" component={TrophyRoom}/>
      <Route component={Error} />
    </Switch>
  </>  
  );
}

export default App;
