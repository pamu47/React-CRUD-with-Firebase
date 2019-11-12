import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './customStyles/custom.css';

import NavBar from './components/layout/NavBar'
import HomePage from './components/homeComponent';
import SignIn from './components/authentication/SignIn';
import SignUp from './components/authentication/SignUp';
import CreateEvent from './components/crud/CreateEvent';
import ViewEvents from './components/crud/ViewEvents'
import EventDetails from './components/crud/EventDetails';

function App() {
  return (
    <BrowserRouter>
      
      <NavBar />

      <Route exact path='/' component={HomePage} />
      <Route path='/signin' component={SignIn} />
      <Route path='/signup' component={SignUp} />
      <Route path='/create' component={CreateEvent} />
      <Route path='/event/:id' component={EventDetails} />
      <Route path='/eventlist' component={ViewEvents}/>
    </BrowserRouter>
  );
}

export default App;
