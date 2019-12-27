import React, {useEffect, useState } from 'react';
import M from "materialize-css";
import moment from 'moment';

import { 
  Link,
  
} from 'react-router-dom';
import axios from 'axios';
import ReactChip from 'react-chip';
import Chips from 'react-email-chips';  
import './meeting.css';
import { string } from 'prop-types';

 function UserDetails() {
  let [addguestshow,setAddguestshow]=useState(false);
  let [efullname,setEfullname]=useState('');
  let [name,setName]=useState("");
  let [email,setEmail]=useState("");
  let [gmail,setGmail]=useState('');
  // let [guestemail,setGuestEmail]=useState("");
  let[guestemails,setGuestEmails]=useState([])
  let [description,setDescription]=useState("");
  let [data,setData]=useState([]);
  let [time,setTime]=useState([]);
  let [time1,setTime1]=useState([]);

  
  // let [addguest,setAddGuest]=useState("");

    useEffect(()=>{
      let u_time=localStorage.getItem("time");          
      const hours = [];
      let hour = parseFloat(u_time);          
      hours.push(moment({ hour }).format('h:mm A'));
      hours.push(
          moment({
              hour,
              minute: 30
          }).format('h:mm A')
      );
      if(hours){
        // console.log(hours)
        setTime(hours[0])
        setTime1(hours[1])

        console.log(hours[0],hours[1],"clicked")
      }
  
      
    },[])
    let date=localStorage.getItem("user_date")

  
  let addguestHandler=()=>{
    setAddguestshow(true); 
  }  

  let handleChange=(data)=>{

       let details=data.map(i=>{         
        return  {"Guest_email":i.email}
       })
       console.log(details);       
       setGuestEmails(details);
  }

  let usersubmitHandler=(e)=>{
    e.preventDefault(e);  

    console.log(guestemails);


  //  alert(name+email+description+guestemail)
  let formdata={
    name:name,
    email:email,
    start_date_time: "2019-11-17T00:00:00Z",
    desciption: description,  
    guest_name:guestemails
  }
    axios.post("https://purview-sam-app.herokuapp.com/api/schedule/",
     formdata,
    )
   
    .then(resp=>console.log(resp.data));
  }
  const pattern = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    return (
        <div>
            <div class="card user-card">
         <div class="">
      <Link to="PickTime" class="material-icons meet-icon"></Link>
         {/* <div class="meet-icon"></div>   */}
      </div>
      <div class="event-title">John Doe</div>
      <div class="meeting-time ">30 minutes of meeting</div>
      <div class="row time-row mb0">
       <div class="col s1 m1 l1 xl1  mins">
         {/* <i class="material-icons">access_time</i> */}
         <div class="access-time"></div>
         </div>
       <div class="col s11 m11 l11 xl11 ml5 p0"><span class="mins">30 mins</span></div>
      </div>
      <div class="row calendar-row mb0">
       <div class="col s1 m1 l1 xl1  calendar-mins">
         {/* <i class="material-icons">date_range</i> */}
         <div class="calendar-icon"></div>
         </div>
       <div class="col s11 m11 l11 xl11 ml5 p0">
        <span class="calendar-mins">{time}-{time1}, {date.substring(0,15)}</span>
        </div>
      </div>
      <div class="enter-details">Enter Details </div> 
      <form onSubmit={usersubmitHandler}>
          <div class="form-field">
      <div class="input-field mb0 ">
          <label class="frm-label">Name<sup>*</sup></label>
          <input placeholder=" " id="first_name" type="text" class="validate user-input"
           onChange={(e)=>setName(e.target.value)}
          />
          
        </div>
        <div class="input-field mb0">
        <label class="frm-label">Email<sup>*</sup></label>
          <input placeholder=" " type="email" class="validate user-input"
          onChange={(e)=>setEmail(e.target.value)}
          />
          
        </div>
        {
          addguestshow?(
            <div class="input-field mb0 ">
             <label class="frm-label">Add Guest Email</label> 
          {/* <input placeholder=" " type="email"
           class="validate user-input chips "
          onChange={(e)=>setGuestEmail(e.target.value)}
          /> */}
         <div class="emailchips">
          <Chips
          className="userchips"
          chips={[]} 
          save={data =>{handleChange(data)}}
          pattern={pattern}
          required={false}
          title='Email Chips:'
          limit='10'
          limitNotification={data => console.log('limit notification', data)}
       
      ></Chips>
      </div>
         <div class="errorTxt16"></div> 
      
          <p>Notify up to 10 additional guests of the scheduled event.</p>
        </div>
          ):<a class=" btn add-btn" onClick={addguestHandler} >Add Guests</a>
        }
        
       
        <div class="input-field mb0">
          <label class="frm-label-area">Description about your meeting</label>
          <textarea placeholder=" " type="text" class="validate user-input-area"
          onChange={(e)=>setDescription(e.target.value)}
         />
          {/* <textarea></textarea> */}
          
          </div>

          {/* <div class="chips chips-placeholder input-field user-input">
         <input id="efullname" name="efullname" data-error=".errorTxt16" class="input " autocomplete="off"/>
         <div class="errorTxt16"></div> 
         </div>   */}
        
         
       <div class="add-schedule-btn">
        <button  class=" btn add-btn-meeting ">Schedule Meeting</button>
        </div>
        </div>
      </form>
        </div>
        </div>
    )
}
export default UserDetails;