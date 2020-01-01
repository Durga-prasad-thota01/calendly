import React, { useState } from 'react'
import '../components/meeting.css';
import axios from 'axios';
import moment from 'moment';

export default function ScheduleMeeting() {
  let [show,setShow]=useState(-1);
  let [accept, setAccept]=useState(false);
  let [data,setData]=useState([]);
  let [decline,setDecline]=useState(false);
  let [notification_data,setNotification_data]=useState([]);
 

  React.useEffect(()=>{
    let user_id=parseInt(localStorage.getItem("user_id"));
    console.log(user_id,"usersdhfdfh")
    axios.get("https://sam-project.herokuapp.com/api/schedule/")
       .then(resp=>{
         console.log(resp.data,"main data")
        //  let s_data=resp.data;
         let filter=resp.data.filter(i=>{
           return i.user_id===user_id
         })
         console.log(filter,"filter data")
           let main=filter.map(i=>{
             return {"id":i.id, "user_id":i.user_id,"Setavailability_id":i.Setavailability_id, "name":i.name, "email":i.email,"start_date_time":i.start_date_time,"status":false}
           })
           console.log(main,"main")
         let s_data=main;
         setData(main)         
         // Notification API 
        axios.get("https://sam-project.herokuapp.com/api/notification/")
        .then(resp=>{
          console.log(resp.data,"notification")
          setNotification_data(resp.data);         
            console.log(s_data,"console")
          
                                    
         
        })
         
        });
        
  },[]) 

   let scheduleAcceptHandler=(id,index)=>{

     if(show===index){
       setShow(-1)
     }
     else{
       setShow(index)
     }
    
    let status=true;
    let user_id=parseInt(localStorage.getItem("user_id"));
    let schedule_id=id;
    console.log(status,user_id,schedule_id)

    axios.post("https://sam-project.herokuapp.com/api/notification/",{status,user_id,schedule_id})
    .then(resp=>{
      console.log(resp.data)
    })
     
     
    
      // setShow(false);
      setAccept(true);
      setDecline(false);
    }
    let scheduleDeclineHandler=(id)=>{
      console.log(id);
       if(id){         
         axios.delete(`https://sam-project.herokuapp.com/api/schedule/${id}/`)
         .then(resp=>{
           console.log(resp.data)
           window.location.reload(false);
         })
         .catch(error=>{
           console.log(error)
         })
       }
      setShow(false);
      setAccept(false);
      setDecline(true);
    }
    
    
    

  return (
    <div>

           <div class="row ml">      
       {
        data.map((i,index)=>(
          <React.Fragment>
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
                   {moment(i.start_date_time).format('LT')}-{moment(i.start_date_time).add(30, 'minutes').format('LT')}
                   </div>
                   <div class="usr-card-shd">
                   <i class="material-icons acs-time-shd">date_range</i>
                   {moment(i.start_date_time).format('D MMMM YYYY')}
                   </div>
                 </div>
                 <div class="col s3 m3 l3 xl3 card-btn-ntf p0">
                 {/* <a class=" btn-small btn-ntf green accent-3">Accept</a>
                 <a class=" btn-small btn-ntf red">Decline</a> */}
                 {
                    (show!==index) ?                   
                     <div>
                       <a class=" btn-small btn-ntf green accent-3" onClick={e=>scheduleAcceptHandler(i.id,index)}>Accept</a>
                       <a class=" btn-small btn-ntf red"onClick={e=>scheduleDeclineHandler(i.id)}>Decline</a>
                     </div> :

                     (
                      <div class="hide-btn-home">
                      <a class="btn-small btn-ntf green accent-3">Accepted</a>
                      </div>)
              
                                      
                   
                  //  accept?(
                          
                  //    <div class="hide-btn-home">
                  //      <a class=" btn-small btn-ntf green accent-3">Accepted</a>
                  //    </div>
                  //  ):""
                  // (
                  //   <div class="hide-btn-home">
                  //   <a class="btn-small btn-ntf green accent-3">Accepted</a>
                  //   </div>)


                 }
                 {
                  //  decline?(
                  //    <div class="hide-btn-home">
                  //      <a class=" btn-small btn-ntf red">Declined</a>
                  //    </div>
                  //  ):""
                 }
                 </div>
                </div>
              </div>
            </div>
          
               
           
               
          
           </div>
           </React.Fragment>
           ))
         }
         
         </div>
      
    </div>
  )
}
