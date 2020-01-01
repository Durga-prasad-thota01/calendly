import React,{useEffect, useState } from 'react'
import '../components/meeting.css';

import M from "materialize-css";
// import { M } from 'materialize-css/dist/js/materialize.min.js';
import {Link} from 'react-router-dom';
import axios from 'axios';

import Header from './Header';
import TodayMeeting from './TodayMeeting';
import ScheduleMeeting from './ScheduleMeeting';
export default function Home(props) {
  let[show,setShow]=useState(true);
  let [eventtype,setEventtype]=useState("");
  let [meetingname,setMeetingname]=useState("");
  
  useEffect(()=>{
    if (!localStorage.length) 
    {         
         props.history.push("./"); 
               }
    
    axios.get("https://sam-project.herokuapp.com/api/setavailability/")
        
    // { headers: {"Authorization" : `Bearer ${localStorage.getItem("access_token")}`}})
    .then(resp=>{
      console.log(resp.data,"user")
      // alert(resp.data)
      // alert(localStorage.getItem("user_id"))
      let available=resp.data.filter(i=>{
        
        return i.user_id==localStorage.getItem("user_id")
      })
      // alert(available.length)
      if(!available.length){
        props.history.push("/Availability")
      }
    })
    
              
    let tabs = document.querySelectorAll(".tabs");
    M.Tabs.init(tabs);

    let token=localStorage.getItem("access_token")
    axios.get("https://sam-project.herokuapp.com/api/Schedule/",
    { headers: {"Authorization" : `OAuth2.0 ${token}`} } 
    )
      .then(resp=>console.log(resp.data,"home"))
    

    // let meeting={  
    //     "id": "",  
    //    "Event_type": "30Min",   
    //     "Meeting_name": "meetingname"
    //   }
     
    // axios.get("https://sam-project.herokuapp.com/api/meetingtype/",
    // { headers: {"Authorization" : `OAuth2.0 ${token}`} } 
    // )
    //   .then(resp=>console.log(resp.data))
  },[])
    const todayHandler=()=>{
      setShow(true);
    }
    const scheduleHandler=()=>{
      setShow(false);
    }
    let redirectToPage=()=>{
        let email=localStorage.getItem("user_email");
        if(email){
          props.history.push(`/Meeting/${email}`)
        }
    }
  return (
    <div>
        <Header/>
       <div class="row">
          <div class="col s1 m1 l1 xl1 m0 lft-space"></div>
          <div class="col s11 m11 l11 xl11">
            <div class="card home-card p0">
              <div class="row pick-link ml">
                <div class="col s12 m12 l1 xl1"> 
                
                 <img src={localStorage.getItem("user_profile")} class="usr-profile" alt="avtar"/>
                 
                </div>
                <div class="col s12 m12 l11 xl11 ">
                   <div class="usr-nam">{localStorage.getItem("user_name")}</div>
                
                  <div class="usr-link">
                  <a onClick={redirectToPage}>
                  sam.com/Meeting/{localStorage.getItem("user_email")}
                  </a>
                  </div>
                
                </div>
              </div>


              <div class="row events-tabs m0">
                <div class="col s12 m6 l6 xl6">
                <ul class="tabs row">
                   <li class="tab col s6 m4 l4 xl4 p0 m0 tab-width">
                       <a class="active td-mtg" onClick={todayHandler}>Today Meetings</a>
                   </li>
                   <li class="tab col s6 m5 l5 xl5 p0 m0 tab-width2">
                   <a class=" td-mtg2 " onClick={scheduleHandler}>Scheduled Meetings</a>
                   </li>
              </ul>

                </div>
                <div class="col s3"></div>
                <div class="col s3"></div>
              </div>
              {/* <br/> */}
              <div class="home-divider">
              <div class="divider "></div>
              </div>
              {/* <hr class="hr-line"></hr> */}
                   { 
                      show ? 
                         <TodayMeeting/>:
                         <ScheduleMeeting/>
                    }
            </div>
          </div>
       </div>
    </div>
  )
}
