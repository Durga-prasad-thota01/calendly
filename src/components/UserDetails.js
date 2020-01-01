import React, {useEffect, useState } from 'react';
import M from "materialize-css";
import moment from 'moment';

import { 
  Link,withRouter,Redirect
  
} from 'react-router-dom';
import axios from 'axios';
import ReactChip from 'react-chip';
import Chips from 'react-email-chips';  
import './meeting.css';
import { string } from 'prop-types';

 function UserDetails(props) {
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
  let[id,setId]=useState([]);
  let[start_time_date,setStart_time_date] =useState("");
  let [usr_id,setUsr_id]=useState('');
  let [start_dat,setState_dat]=useState('');
  
  // let [addguest,setAddGuest]=useState("");

    useEffect(()=>{     
      let u_time=localStorage.getItem("time"); 
      let date=localStorage.getItem("user_date");
      let odate=moment(date).format('YYYY-MM-DD');
      const dateTime = moment(`${odate} ${u_time}`, 'YYYY-MM-DD HH:mm:ss').format();  
       let u_id=localStorage.getItem("user_id1")
      console.log(moment(dateTime).format(),u_id,"localtime")
      setStart_time_date(dateTime);
      setState_dat(odate)
      setId(u_id)
      console.log(moment(date + ' ' + u_time, "YYYY-MM-DD HH:mm"),"utime")        
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
        let date=localStorage.getItem("user_date") 
         console.log(date,hours[0],"both")
        let a = moment()
      let b = moment().add(30, 'minute')
          console.log(a,b.format,"a&b")
        let dateTime = moment(date + ' ' + hours[0], 'DD/MM/YYYY HH:mm');  
       console.log(dateTime.format(),"format")
        let odate= moment(date + " " + hours[0]).format()
        // let odate=moment(date,hours[0]).format();
        console.log(odate,"odate")
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

 let formdata={   
  "user_id":localStorage.getItem("user_id1"),  
  "Setavailability_id": 1,  
  "name":name,
  "email":email,
  "start_date_time":start_time_date.toString(),
  "start_date": start_dat,
  "description": description,
  "guest_name":guestemails
}
 
    axios.post("https://sam-project.herokuapp.com/api/schedule/",
     formdata,
    )   
  .then(resp=>{
    console.log(resp.data)
    let email=localStorage.getItem("user_email");
    console.log(email,"userdetails EMail")
    if(resp.data){       
      props.history.push(`/Meeting/${email}`)

    }
  })
  .catch(error=>{
   alert(Error);
  })
  
  }
  const pattern = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    return (
        <div>
            <div class="card user-card">
         <div class="">
      <Link to="PickTime" class="material-icons meet-icon"></Link>
         {/* <div class="meet-icon"></div>   */}
      </div>
      <div class="event-title">{localStorage.getItem("user_name")}</div>
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
export default withRouter(UserDetails) ;