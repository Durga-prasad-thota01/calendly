import React,{useState} from 'react';
import {
  Link,
} from 'react-router-dom';
import '../components/meeting.css';
import MyCalendar from './MyCalendar';
import PickTime from './PickTime';

// import Calendar from '../calendar/Calendar';
export default function Meeting() {

  // let [show1,setShow1]=useState(true);
  return (
    <div>
     <div class="card meet-card">
      <div class="">
      <Link to="/Meeting/${email)}/" class="material-icons meet-icon"></Link>
         {/* <div class="meet-icon"></div>   */}
      </div>
      <div class="event-title">{localStorage.getItem("user_name1")}</div>
      <div class="meeting-time">30 minutes of meeting</div>
      <div class="row time-row">
       <div class="col s1 m1 l1 xl1  mins">
         {/* <i class="material-icons">access_time</i> */}
         <div class="min-clock"></div>
         </div>
       <div class="col s11 m11 l11 xl11 p0"><span class="mins">30 mins</span></div>
      </div>
      <div class="select-time">Select a Date and Time </div>
      <div class="calendar-cnt">
          <MyCalendar />
      </div>
     </div>
    </div>
  )
}