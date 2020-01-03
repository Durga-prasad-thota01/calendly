import React,{useState,Children, useEffect} from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import axios from 'axios';
import {
  
  withRouter,
  
} from 'react-router-dom';

import 'react-big-calendar/lib/css/react-big-calendar.css';
// import BigCalendar from 'react-big-calendar';
// import moment from 'moment';
const localizer = momentLocalizer(moment);
// const CURRENT_DATE = moment().toDate();
// let testHandler=(e)=>
// {
//   alert(e)
// }
// const ColoredDateCellWrapper = ({children, value}) =>
// alert(value) 
  // React.cloneElement(Children.only(children), {

    // style: {
    //  ...children.style,
    // value: value < CURRENT_DATE ? "disabled ": "",
      
    // },
    // alert(value)
  // });

const MyCalendar =( props) => {
  let [availability,setAvailabilty]=useState("");
  useEffect(()=>{
    
    axios.get(`https://sam-project.herokuapp.com/api/users/`)
           .then(resp=>{
      // alert(resp.data.id)
      // alert(props.match.params.email)
      let userDetails=resp.data.filter(i=>{
        // alert(i.id)
        return i.email==props.match.params.email

      })
      // alert(userDetails)
      if(userDetails.length) {        
       
        localStorage.setItem("user_name1",userDetails[0].first_name)
        localStorage.setItem("user_id1",userDetails[0].id)
      
        if(localStorage.getItem("user_id1")){
        axios.get("https://sam-project.herokuapp.com/api/setavailability/")
      .then(resp=>{       
            console.log(resp.data,"respsps")
        let available=resp.data.filter(i=>{
          // alert(i.user_id,localStorage.getItem("user_id1"))
   
          return i.user_id==localStorage.getItem("user_id1")
        })
        // console.log(available)
        // alert(available.length)
        
        if(available){
          console.log(available,"available")
          localStorage.setItem("id",available[0].id)
        }

        if(!available.length){
          props.history.push("/");
          
        }
        setAvailabilty(available)
      }
      )
    }
    }else{
      
      props.history.push("/");
      // alert("It is invalid link")
    
  }
    })
//  alert(localStorage.getItem("user_id1"))


  },[])
  
  console.log(availability)
    let testHandler=(date)=>{
     
// var test=date.substring(1,3);
  // alert(test)
      let today=new Date()
      var dd = String(today.getDate()).padStart(2, '0');
      var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
      var yyyy = today.getFullYear();
      var hours=today.getHours(); // => 9var min=today.getMinutes();
      today= yyyy + '-' + mm + '-' + dd;
      // var d = new Date();
      var weekday = new Array(7);
      weekday[0] = "sun";
      weekday[1] = "mon";
      weekday[2] = "tue";
      weekday[3] = "wed";
      weekday[4] = "thu";
      weekday[5] = "fri";
      weekday[6] = "sat";
    
      var dd1 = String(date.getDate()).padStart(2, '0');
      var mm1 = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
      var yyyy1 = date.getFullYear();
      var hours=date.getHours(); // => 9var min=today.getMinutes();
     var today1= yyyy1 + '-' + mm1 + '-' + dd1;
     
    
    //  alert(availability[0].setday)
      if(today1>=today){
        let available = weekday[date.getDay()];
        if(availability){
          let day= availability[0].setday.filter(i=>{
            //  alert(i.day+available)
              return i.day==available
            })
            // alert(day.length)
            // console.log(day)
            if(day.length){
              localStorage.setItem("user_date",date)
              props.history.push("/PickTime");
            }
            else{
              alert("this days user was unavailable")
            }
        }
       
      }
      else{
        alert("Please Add Valid Date")
        window.location.reload();
        props.history.push("/Meeting");
        
       
      }
      // alert(date);
    
    }
    
    
    
 const DateCell = ({
 value,
 children,
}) => {

 const now = new Date();
 now.setHours(0,0,0,0);
 
console.log(availability)
 return (
  <div  class= { value< now ? "date-in-past" : "" } >
   {
    children
   }
  </div>
 )
 
}

 return(
     <div>
 <div style={{height: 300,marginLeft:"64px",marginRight:"64px",}} >
    <Calendar
      
      localizer={localizer}
      events={[]}
      startAccessor="start"
      endAccessor="end"
      drilldownView="date"
     
      
      
      // views={['month', 'agenda']}
      // onNavigate={(events)=>testHandler(events.end)}
        onNavigate={(date, view) =>{
          console.log(date) 
          testHandler(date)
       
        }}
      // }
      // onSelectEvent={event => alert(event.title)}
      // onSelectSlot={(slotInfo) => alert(
      //   `selected slot: \n\nstart ${slotInfo.start.toLocaleString()} ` +
      //   `\nend: ${slotInfo.end.toLocaleString()}` +
      //   `\naction: ${slotInfo.action}`
      //   )}
      components={{
        dateCellWrapper: DateCell,
        
       }}
      //     onNavigate={date => {
      //       testHandler({ selectedDate: date });
      // }}
      // onSelecting={testHandler}
      // onSelectSlot={testHandler}
      // onDoubleClickEvent={testHandler}
      // style={{height: 300}}
    />
    
     

  </div>
  </div>
);
}
export default withRouter(MyCalendar) ;
