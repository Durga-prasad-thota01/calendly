import React,{useState,useEffect} from 'react';
import './meeting.css';
import{
   Link ,
   withRouter,
} from 'react-router-dom';
import axios from 'axios';
 function Availability(props){
  let [from_time,setFrom_time]=useState("");
  let [to_time,setTo_time]=useState("");
  let [data,setData]=useState("");
  let [info,setInfo]=useState([]);
  useEffect(()=>{
    if (!localStorage.length) 
    {
         props.history.push("./"); 
               }
              },[])
  let handlechange=(e,day,ind)=>{
    // alert(e+day+ind)
    if(e.target.checked===true){
      let date={"day":day};
      let data=[...info,date];
       setInfo(data);
       // console.log(info)
       }
   else if(e.target.checked===false){
     // alert(day+index+e)
     let data1=info.filter(i=>{
       // console.log(i)
       return(
       i.day!=day
       )
     })
   setInfo(data1)
   }
  }
  let submitHandler=(e)=>{
    e.preventDefault();
    console.log(from_time,to_time);
    if(info.length){
    let data={
      "user_id": localStorage.getItem("user_id"),
      "from_time": from_time,
      "to_time": to_time,
      "setday": info
    }
    console.log(data)
      //  let token=localStorage.getItem("access_token")
      axios.post("https://sam-project.herokuapp.com/api/setavailability/",data
        ,
      { headers: {"Authorization" : `Bearer ${localStorage.getItem("access_token")}`}})
      .then(resp=>{console.log(resp.data)
        if(resp.data){
          localStorage.setItem("id",resp.data.id)
          props.history.push("/Home") 
        }          
      }   )
      // .then(resp=>setData(resp.data))
  }else{
   document.getElementById("err_msg").innerHTML = "please select your availability days?";
  }
}
  return (
           <div>
             <div class="row wholee">
              <div class="col s6 picture">
               </div>
           <div class="col s6 mater">
             <form onSubmit={submitHandler}>
               <div class="setavailable">Set Your Availability</div>
                  <div class="workhrs" > Working hours</div>
                   <div class="row high">
                    <div class="col s6 from-to">
                     <div class="col s3 frda"><p class="frm">From</p></div>
                       <div class="col s6 slttime ">
                        <select class="browser-default  selbox" required
                         onChange={(e)=>setFrom_time(e.target.value)} 
                        >
                          <option value="" disabled selected>-- : --</option>
                          <option value="09:00 AM">09:00 AM</option>
                          <option value="09:30 AM">09:30 AM</option>
                          <option value="10:00 AM">10:00 AM</option>
                          <option value="10:30 AM">10:30 AM</option>
                          <option value="11:00 AM">11:00 AM</option>
                          <option value="11:30 AM">11:30 AM</option>
                          <option value="12:00 PM">12:00 PM</option>
                          <option value="12:30 PM">12:30 PM</option>
                          <option value="13:00 PM">01:00 PM</option>
                          <option value="13:30 PM">01:30 PM</option>
                          <option value="14:00 PM">02:00 PM</option>
                          <option value="14:30 PM">02:30 PM</option>
                          <option value="15:00 PM">03:00 PM</option>
                          <option value="15:30 PM">03:30 PM</option>
                          <option value="16:00 PM">04:00 PM</option>
                          <option value="16:30 PM">04:30 PM</option>
                          <option value="17:00 PM">05:00 PM</option>
                          <option value="17:30 PM">05:30 PM</option>
                          <option value="18:00 PM">06:00 PM</option>
                          <option value="18:30 PM">06:30 PM</option>
                          <option value="19:00 PM">07:00 PM</option>
                          <option value="19:30 PM">07:30 PM</option>
                          <option value="20:00 PM">08:00 PM</option>
                          <option value="20:30 PM">08:30 PM</option>
                          <option value="21:00 PM">09:00 PM</option>
                          <option value="21:30 PM">09:30 PM</option>
                          <option value="22:00 PM">10:00 PM</option>
                          <option value="22:30 PM">10:30 PM</option>
                          <option value="23:00 PM">11:00 PM</option>
                          <option value="23:30 PM">11:30 PM</option>
                          <option value="00:00 AM">12:00 AM</option>
                          <option value="00:30 AM">12:30 AM</option>
                          <option value="01:00 AM">01:00 AM</option>
                          <option value="01:30 AM">01:30 AM</option>
                          <option value="02:00 AM">02:00 AM</option>
                          <option value="02:30 AM">02:30 AM</option>
                          <option value="03:00 AM">03:00 AM</option>
                          <option value="03:30 AM">03:30 AM</option>
                          <option value="04:00 AM">04:00 AM</option>
                          <option value="04:30 AM">04:30 AM</option>
                          <option value="05:00 AM">05:00 AM</option>
                          <option value="05:30 AM">05:30 AM</option>
                          <option value="06:00 AM">06:00 AM</option>
                          <option value="06:30 AM">06:30 AM</option>
                          <option value="07:00 AM">07:00 AM</option>
                          <option value="07:30 AM">07:30 AM</option>
                          <option value="08:00 AM">08:00 AM</option>
                          <option value="08:30 AM">08:30 AM</option>
                         </select>
                   </div>
             </div>
      <div class="col s6 to-from">
            <div class="col s3 tda"><p class="toadj">To</p></div>
                  <div class="col s6 slottime"> 
                       <select class="browser-default  selbox" required
                        onChange={(e)=>setTo_time(e.target.value)}
                       >
                            <option value="">-- : --</option> 
                            <option value="17:00 PM">05:00 PM</option>
                            <option value="17:30 PM">05:30 PM</option>
                            <option value="18:00 PM">06:00 PM</option>
                            <option value="18:30 PM">06:30 PM</option>
                            <option value="19:00 PM">07:00 PM</option>
                            <option value="19:30 PM">07:30 PM</option>
                            <option value="20:00 PM">08:00 PM</option>
                            <option value="20:30 PM">08:30 PM</option>
                           <option value="21:00 PM">09:00 PM</option>
                           <option value="21:30 PM">09:30 PM</option>
                          <option value="22:00 PM">10:00 PM</option>
                            <option value="22:30 PM">10:30 PM</option>
                            <option value="23:00 PM">11:00 PM</option>
                            <option value="23:30 PM">11:30 PM</option>
                            <option value="00:00 AM">12:00 AM</option>
                            <option value="00:30 AM">12:30 AM</option>                      
                            <option value="01:00 AM">01:00 AM</option>
                          <option value="01:30 AM">01:30 AM</option>
                          <option value="02:00 AM">02:00 AM</option>
                          <option value="02:30 AM">02:30 AM</option>
                          <option value="03:00 AM">03:00 AM</option>
                          <option value="03:30 AM">03:30 AM</option>
                          <option value="04:00 AM">04:00 AM</option>
                          <option value="04:30 AM">04:30 AM</option>
                          <option value="05:00 AM">05:00 AM</option>
                          <option value="05:30 AM">05:30 AM</option>
                          <option value="06:00 AM">06:00 AM</option>
                          <option value="06:30 AM">06:30 AM</option>
                          <option value="07:00 AM">07:00 AM</option>
                          <option value="07:30 AM">07:30 AM</option>
                          <option value="08:00 AM">08:00 AM</option>
                          <option value="08:30 AM">08:30 AM</option>
                          <option value="09:00 AM">09:00 AM</option>
                          <option value="09:30 AM">09:30 AM</option>
                          <option value="10:00 AM">10:00 AM</option>
                          <option value="10:30 AM">10:30 AM</option>
                          <option value="11:00 AM">11:00 AM</option>
                          <option value="11:30 AM">11:30 AM</option>
                          <option value="12:00 PM">12:00 PM</option>
                          <option value="12:30 PM">12:30 PM</option>
                          <option value="13:00 PM">01:00 PM</option>
                          <option value="13:30 PM">01:30 PM</option>
                          <option value="14:00 PM">02:00 PM</option>
                          <option value="14:30 PM">02:30 PM</option>
                          <option value="15:00 PM">03:00 PM</option>
                          <option value="15:30 PM">03:30 PM</option>
                          <option value="16:00 PM">04:00 PM</option>
                          <option value="16:30 PM">04:30 PM</option>
                           </select>
                         </div>
                     </div>
               </div>
       <div class="workdays">Working Days</div>
       <p id="err_msg" class="error_message"></p>
          <div class="row weeks">
             {/* <div class="col s1 "></div> */}
                 <div class="col s1 boxbdr">
                     <label class="cont">
                       <input type="checkbox"  id="checkbox" 
                         onChange={(e)=>handlechange(e,"sun",1)}
                      
                       /><br/>
                         <p class="sun-label ">Sun</p>
                          <span class="checkmark">
                          </span>
                    </label>
                 </div>
           <div class="col s1 boxbdr  ">
                   <label class="cont">
                     <input type="checkbox"  id="checkbox"
                      onChange={(e)=>handlechange(e,"mon",2)}
                      value="monday"
                     /><br/>
                        <p class=" sun-label" >Mon</p>
                         <span class="checkmark">
                          </span>
                   </label>
          </div>
             <div class="col s1 boxbdr ">
                    <label class="cont">
                      <input type="checkbox"  id="checkbox"
                     onChange={(e)=>handlechange(e,"tue",3)}
                      /><br/>
                        <p class=" sun-label" >Tue</p>
                          <span class="checkmark">
                           </span>
                     </label>
             </div>
                 <div class="col s1 boxbdr ">
                     <label class="cont">
                       <input type="checkbox"  id="checkbox" 
                       onChange={(e)=>handlechange(e,"wed",4)}
                       
                       /><br/>
                          <p class=" sun-label" >Wed</p>
                            <span class="checkmark">
                           </span>
                     </label>
                 </div>
                   <div class="col s1 boxbdr ">  
                       <label class="cont">
                         <input type="checkbox"  id="checkbox"
                          onChange={(e)=>handlechange(e,"thu",5)}
                        
                         /><br/>
                          <p class=" sun-label" >Thu</p>
                            <span class="checkmark">
                            </span>
                        </label>
                   </div>
                     <div class="col s1 boxbdr "> 
                        <label class="cont">
                          <input type="checkbox"  id="checkbox"
                          onChange={(e)=>handlechange(e,"fri",6)}
                         
                          /><br/>
                          <p class=" sun-label" >Fri</p>
                              <span class="checkmark">

                              </span>
                          </label>
                     </div>
                   <div class="col s1 boxbdr " > 
                        <label class="cont">
                          <input type="checkbox"  id="checkbox"
                          onChange={(e)=>handlechange(e,"sat",7)}
                          
                          /><br/>
                            <p class=" sun-label ">Sat</p>
                               <span class="checkmark">

                               </span>
                            </label>
                      </div>
          </div>
        <div class="nextb">
            {/* <Link to="/Home"> */}
               <button class="nxt-btn"
            //  onClick={handleClick}
            >Next</button>
            {/* </Link> */}

        </div>
        </form>
      </div>
      
     </div> 
    </div>      
  );
}
export default withRouter(Availability)
