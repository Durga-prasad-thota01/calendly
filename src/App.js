import React from 'react';


import {
  Route,
  Link,
  BrowserRouter,
} from 'react-router-dom';

import Calendar from './calendar/Calendar';
import MyCalendar from './components/MyCalendar';
import Meeting from './components/Meeting';
import UserDetails from './components/UserDetails';
import PickTime from './components/PickTime';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Availability from './components/Availability';
import TimeSlot from './components/TimeSlot';

function App() {
  
  return (
    <BrowserRouter>
    <div className="App">
      {/* <Calendar/> */}
      {/* <MyCalendar/> */}
      {/* <Meeting /> */}
      {/* <UserDetails /> */}
      {/* <PickTime/> */}
      
      <Route exact path="/" component={Login}/>
      <Route path="/Availability" component={Availability}/>
      <Route path="/Meeting/:email/" component={Meeting}/>
      <Route path="/UserDetails" component={UserDetails}/>
      <Route path="/PickTime" component={PickTime}/>
      <Route path="/Header" component={Header}/>
      <Route path="/Home" component={Home}/>
      <Route path="/TimeSlot" component={TimeSlot}/>
    </div>
    </BrowserRouter>
  );
}

export default App;
