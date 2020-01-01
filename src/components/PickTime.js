import React,{useState,useEffect} from 'react'
import {
  
  Link,withRouter
  
} from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
import '../components/meeting.css';
import Meeting from './Meeting';
import PickCalendar from './PickCalendar';
 function PickTime( props) {
  
   let [show, setShow] = useState(-1);
  // let show.[null]=true
   let [data,setData]=useState([]);
   let[index,setIndex]=useState('');
   let [fd,setFd]=useState('');
   
  //  useEffect(()=>{
  //   if (!localStorage.length) 
  //   {         
  //        props.history.push("./"); 
  //              }
  //              let dt=localStorage.getItem("user_date")
  //             //  alert(dt.length)
  //              if(!dt.length){
  //                props.history.push(`./Meeting/${localStorage.getItem("user_email")}/`)
  //              }
  //             //  setDate(localStorage.getItem("user_date"))
              
  //             },[])

  let confirmClick=(time)=>{
    if(time){
      localStorage.setItem("time",time);
      props.history.push("/UserDetails")
    }
    
  }

   useEffect(()=>{

    // if (!localStorage.length) 
    // {
    //      props.history.push("./"); 
    //            }
            let id=localStorage.getItem("id");
          
            console.log(id)
               
              //  alert(dt.length)
              //  if(!dt.length){
              //    props.history.push(`./Meeting/${localStorage.getItem("user_email")}/`)
              //  }
    axios.get(`https://sam-project.herokuapp.com/api/setavailability/${id}/`)
    
  // { headers: {"Authorization" : `Bearer ${localStorage.getItem("access_token")}`}})
  .then(resp=>{
    console.log(resp.data)
    // alert(resp.data)
    // let available=resp.data.filter(i=>{
    //   // console.log(i.user_id,localStorage.getItem("user_id"))
    //   // alert(i.user_id==localStorage.getItem("user_id1"))
    //   return i.user_id==id
     
    // })
  //  alert(available[0].length)
  // console.log(available)
    // available.map(i=>{
     
    //  alert(i.from_time)
    //  alert(i.to_time)
    // let myStartDate = new Date(i.to_time);
    // alert(myStartDate)
    // let fdate=moment().format('LT');
    // let fdate=resp.data.from_time;
    let dt=localStorage.getItem("user_date");    
    let user_date=moment(dt).format('YYYY-MM-DD');
    let today_date=moment().format('YYYY-MM-DD');

      if(user_date==today_date){
        let fdat=moment().format('LT');
        setFd(fdat)
      }
      else{
        let fda=resp.data.from_time;
        setFd(fda)
      }
      if(fd){        
        let fdate=resp.data.from_time;            
        let tdate=resp.data.to_time;
        console.log(parseInt(fd),parseInt(tdate),"fd");
        const hours = [];
            for(let hour =parseInt(fd) ; hour < parseInt(tdate); hour++) {
      hours.push(moment({ hour }).format('h:mm A'));
      hours.push(
          moment({
              hour,
              minute: 30
          }).format('h:mm A')
      );
  }
     if(hours){
       console.log(hours,"timeslots")
       setData(hours)
       
     }
      }
      else{
        console.log(fd,"fd");
        let fdate=resp.data.from_time;            
        let tdate=resp.data.to_time;
        const hours = [];
            for(let hour =parseInt(fd) ; hour < parseInt(tdate); hour++) {
      hours.push(moment({ hour }).format('h:mm'));
      hours.push(
          moment({
              hour,
              minute: 30
          }).format('h:mm')
      );
  }
     if(hours){
       console.log(hours,"timeslots")
       setData(hours)
       
     }
      }
   


    console.log(user_date,today_date,"user_date")
    
  //  console.log(parseInt(fdate),moment({ fdate }).format('h:mm:ss'),parseInt(tdate),"change") 
 
  
  // })
    // console.log(available)
    // alert(available.length) 
    // if(available.length){
    //   props.history.push("/");
    // }
    // setAvailabilty(available)
  }
  )
  },[fd])
  //  let [date,setDate]=useState('');
   let date=localStorage.getItem("user_date")
console.log(date)
   var weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";
  // alert(weekday[date.getDay()])
  // let available = weekday[date.getDay()]
  var month = new Array();
  month[0] = "January";
  month[1] = "February";
  month[2] = "March";
  month[3] = "April";
  month[4] = "May";
  month[5] = "June";
  month[6] = "July";
  month[7] = "August";
  month[8] = "September";
  month[9] = "October";
  month[10] = "November";
  month[11] = "December";

   let showHandler=(i,index)=>{

     console.log("show hide hadhsd")
     if (show === index) {
      setShow(-1);
    } else {
      setShow(index);
    }
   }
   let submitButton=(e)=>{
    e.preventDefault();
    // alert("hgh")
   }
   console.log(data)    
   let redirectPage=()=>{     
    let email=localStorage.getItem('user_email');
    if(email){
       props.history.push(`/Meeting/${email}`)
    }
    

    }
    return (
        <div>           
             <div class="card pick-card">
              <div class="row">
                <div class="col s7 m7 l7 xl7 pick-time-card">
                   <div class="meet-card pickcard">
                     {/* <div class=""> */}

                      <a class="material-icons meet-icon" onClick={redirectPage}></a>
                          {/* <div class="meet-icon"></div>  */}
                     {/* </div> */}
                      <div class="event-title">{localStorage.getItem("user_name1")}</div>
                        <div class="meeting-time">30 minutes of meeting</div>
                         <div class="row time-row">
                           <div class="col s1 m1 l1 xl1  mins">
                             {/* <i class="material-icons">access_time</i> */}
                             <div class="min-clock"></div>
                             </div>
                           <div class="col s11 m11 l11 xl11 p0 ml5 "><span class="mins">30 mins</span></div>
                         </div>
                         <div class="select-time-pick">Select a Date and Time </div>
                       <div class="calendar-wdt">
                        <PickCalendar/>
                      </div>
                    </div>  

                </div>
                
                <div class="col s5 m5 l5 xl5 ">
                   <div class="day-text">
                   {date.substring(0,15)}
                   </div>
                   <div class="time-slot-main ">   
                   {
                     data.map((i,index)=>(                    
                    
                       <div key={i.id}>                
                       {show!==index ?
                        <a class=" btn time-btn" onClick={(e)=>showHandler(i,index)} >{i}</a>: 
                    (
                      <div class="row hide-btn mb0">
                        <div class="col s6 m6 l6 xl6 "><a class=" btn time-btn-hide" onClick={(e)=>showHandler(i,index)}>{i}</a></div> 
                        <div class="col s6 m6 l6 xl6 "><button class="btn confirm-btn-hide" onClick={e=>confirmClick(i)}>Confirm</button></div>
                      </div>
                    )}
                     </div>
                     ))
                   }                                                            
                   </div>
                </div>
              </div>
             </div>         
        </div>
    )
}
export default withRouter(PickTime)