import React, { useState } from 'react'
import '../components/meeting.css';
import axios from 'axios';
import moment from 'moment';

export default function ScheduleMeeting() {
  let [show,setShow]=useState(true);
  let [accept, setAccept]=useState(false);
  let [data,setData]=useState([]);
  let [decline,setDecline]=useState(false);
   let scheduleAcceptHandler=()=>{
      setShow(false);
      setAccept(true);
      setDecline(false);
    }
    let scheduleDeclineHandler=()=>{
      setShow(false);
      setAccept(false);
      setDecline(true);
    }
    React.useEffect(()=>{
      axios.get("https://purview-sam-app.herokuapp.com/api/schedule/")
         .then(resp=>{
           console.log(resp.data)
           setData(resp.data)          
          });
    },[])
    

  return (
    <div>


       {
         data.map(i=>(
           <React.Fragment>
           <div class="row ml">
           <div class="ntf-card">
            <div class=" col s6 m6 l6 xl6 ">
              <div class="card usr-ntf">
                <div class="row crd-cntt">
                 <div class="col s3 m3 l3 xl3 img-content">
                   <img src="./images/avatar4.png" class="usr-profile" alt="avtar"/>
                  
                 </div>
                 <div class="col s6 m6 l6 xl6 usr-shd">
                   <div class="usr-card-lab-shd">{i.name}</div>
                   <div class="usr-card-shd">
                   <i class="material-icons acs-time-shd">access_time</i>
                   {moment(i.start_date_time).format('LT')}
                   </div>
                   <div class="usr-card-shd">
                   <i class="material-icons acs-time-shd">date_range</i>
                   {moment(i.start_date_time).format('LL')}
                   </div>
                 </div>
                 <div class="col s3 m3 l3 xl3 card-btn-ntf p0">
                 {/* <a class=" btn-small btn-ntf green accent-3">Accept</a>
                 <a class=" btn-small btn-ntf red">Decline</a> */}
                 {
                   show?(
                     <div>
                       <a class=" btn-small btn-ntf green accent-3" onClick={scheduleAcceptHandler}>Accept</a>
                       <a class=" btn-small btn-ntf red"onClick={scheduleDeclineHandler}>Decline</a>
                     </div>
                   ):""
                 }
                 {
                   accept?(
                     <div class="hide-btn-home">
                       <a class=" btn-small btn-ntf green accent-3">Accepted</a>
                     </div>
                   ):""
                 }
                 {
                   decline?(
                     <div class="hide-btn-home">
                       <a class=" btn-small btn-ntf red">Declined</a>
                     </div>
                   ):""
                 }
                 </div>
                </div>
              </div>
            </div>
          
               
           
               
          
           </div>
         </div>
           </React.Fragment>
         ))
       }
       
    </div>
  )
}
