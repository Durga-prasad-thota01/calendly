import React,{ useState } from 'react'
import '../components/meeting.css';
import axios from 'axios';
import moment from 'moment';
export default function TodayMeeting() {
  let[show,setShow]=useState(-1)
  let[todayaccept,setTodayaccept]=useState(false);
  let [data,setData]=useState([]);
  let[todaydecline,setTodaydecline]=useState(false);
  

  React.useEffect(()=>{
    let user_id=parseInt(localStorage.getItem("user_id"));
    console.log(user_id,"usersdhfdfh")
    axios.get("https://sam-project.herokuapp.com/api/todaymeeting/")
       .then(resp=>{
         console.log(resp.data,"main data")
         let today_date=moment().format('YYYY-MM-DD')
         console.log(today_date,"todaya")
         let filter=resp.data.filter(i=>{
           return i.start_date===today_date && i.user_id===user_id;
         })
         console.log(filter,"filter data")
         setData(filter)          
        });
  },[])

   let acceptHandler=(id,index)=>{
    if (show === index) {
      setShow(-1);
    } else {
      setShow(index);
    }
    
      //  if(show)
    let status=true;
    let user_id=parseInt(localStorage.getItem("user_id"));
    let schedule_id=id;
    console.log(status,user_id,schedule_id)

    axios.post("https://sam-project.herokuapp.com/api/notification/",{status,user_id,schedule_id})
    .then(resp=>{
      console.log(resp.data)
    })
     
     
    
      // setShow(false);
      setTodayaccept(true);
      setTodaydecline(false);
    }
    let declineHandler=(id,index,e)=>{
      e.preventDefault();
      console.log(id);
       let copy=Object.assign([],data);
       copy.splice(index,1);
       setData(copy);
       if(id){         
         axios.delete(`https://sam-project.herokuapp.com/api/todaymeeting/${id}/`)
         .then(resp=>{
           console.log(resp.data)        
         })
         .catch(error=>{
           console.log(error)
         })
       }
      setShow(false);
      setTodayaccept(false);
      setTodaydecline(true);
    }


//   let acceptHandler=()=>{
//     setTodayaccept(true);
//     setTodaydecline(false);
//       setShow(false);
//   }
//   let declineHandler=()=>{
//     setTodayaccept(false);
//     setTodaydecline(true);
//     setShow(false);
// }

  return (
    <div>
    
        
       <div class="row">
       {
        data.map((i,index)=>( 
          <React.Fragment>
                <div class=" col s6 m6 l6 ">
                   <div class="card usr-ntf">
                     <div class="row crd-cntt ">
                      <div class="col s3 s3 m3 l3 xl3 img-content">
                        <img src="./images/avatar4.png" class="usr-profile" alt="avtar"/>
                      </div>
                      <div class="col s6 m6 l6 xl6">
                      <div class="usr-card-lab">{i.name}</div>
                        <div class="row usr-card-time">
                          <div class="col s2">
                        <i class="material-icons acs-time">access_time</i>
                        </div>
                        <div class="col s10 p0">
                        <p class="home-time-slot">{moment(i.start_date_time).format('LT')}-{moment(i.start_date_time).add(30, 'minutes').format('LT')}</p></div>
                        </div>
                      </div>
                      <div class="col s3 s3 m3 l3 xl3 card-btn-ntf p0">
                      {/* <a class=" btn-small btn-ntf green accent-3" >Accept</a>
                      <a class=" btn-small btn-ntf red">Decline</a> */}
                      {
                        (show!==index)?
                        ( <div>
                          <form>
                        <button class=" btn-small btn-ntf green accent-3" onClick={e=>acceptHandler(i.id,index)} >Accept</button>
                        <button class=" btn-small btn-ntf red" onClick={e=>declineHandler(i.id,index)}>Decline</button>
                        </form>
                        </div>
                        ):                      
                        (
                        <div class="hide-btn-home">
                        <a class="btn-small btn-ntf green accent-3">Accepted</a>
                        </div>)
                       }                      
                      </div>
                     </div>
                   </div>
                  
                 </div>
                 </React.Fragment>
                   ))
                 }

                 {/* <div class=" col s12 m12 l6 xl6">
                   <div class="card usr-ntf">
                     <div class="row crd-cntt">
                      <div class="col s2 s2 m2 l2 xl2 img-content">
                        <img src="./images/avatar4.png" class="usr-profile" alt="avtar"/>
                      </div>
                      <div class="col s6 m6 l6 xl6">
                      <div class="usr-card-lab">Jhon Doe</div>
                        <div class="row usr-card-time">
                          <div class="col s2">
                        <i class="material-icons acs-time">access_time</i>
                        </div>
                        <div class="col s10 p0">
                        <p class="home-time-slot"> 11:00 AM-11:30 AM</p></div>
                        </div>
                      </div>
                      <div class="col s4 m4 l4 xl4 card-btn-ntf ">
                      <a class=" btn-small btn-ntf green accent-3">Accept</a>
                      <a class=" btn-small btn-ntf red">Decline</a>
                      </div>
                     </div>
                   </div>
                 </div> */}
                                
                </div>
             
             
    </div>
  
  )
}
