import React,{ useState } from 'react'
import '../components/meeting.css';
export default function TodayMeeting() {
  let[show,setShow]=useState(true)
  let[acceptShow,setAccesptShow]=useState(false);
  let[declineShow,setDeclineShow]=useState(false);
  

  let acceptHandler=()=>{
      setAccesptShow(true);
      setDeclineShow(false);
      setShow(false);
  }
  let declineHandler=()=>{
    setAccesptShow(false);
    setDeclineShow(true);
    setShow(false);
}

  return (
    <div>
       <div class="row ml">
                <div class=" ntf-card">
                <div class=" col s12 m12 l6 xl6">
                   <div class="card usr-ntf">
                     <div class="row crd-cntt ">
                      <div class="col s3 s3 m3 l3 xl3 img-content">
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
                      <div class="col s3 s3 m3 l3 xl3 card-btn-ntf p0">
                      {/* <a class=" btn-small btn-ntf green accent-3" >Accept</a>
                      <a class=" btn-small btn-ntf red">Decline</a> */}
                      {
                        show?
                        ( <div>
                        <a class=" btn-small btn-ntf green accent-3"onClick={acceptHandler} >Accept</a>
                        <a class=" btn-small btn-ntf red"onClick={declineHandler}>Decline</a>
                        </div>
                        ):""
                      }
                      
                       { acceptShow?(
                        <div class="hide-btn-home">
                        <a class="btn-small btn-ntf green accent-3">Accepted</a>
                        </div>):""
                       }
                       {
                        declineShow?(
                        <div class="hide-btn-home">
                        <a class=" btn-small btn-ntf red">Declined</a>
                        </div>):""
                       }
                      </div>
                     </div>
                   </div>
                 </div>
                 <div class=" col s12 m12 l6 xl6">
                   <div class="card usr-ntf">
                     <div class="row crd-cntt ">
                      <div class="col s3 s3 m3 l3 xl3 img-content">
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
                      <div class="col s3 s3 m3 l3 xl3 card-btn-ntf p0">
                      <a class=" btn-small btn-ntf green accent-3" >Accept</a>
                      <a class=" btn-small btn-ntf red">Decline</a>
                      {/* {
                        show?
                        ( <div>
                        <a class=" btn-small btn-ntf green accent-3"onClick={acceptHandler} >Accept</a>
                        <a class=" btn-small btn-ntf red"onClick={declineHandler}>Decline</a>
                        </div>
                        ):""
                      }
                      
                       { acceptShow?(
                        <div class="hide-btn-home">
                        <a class="btn-small btn-ntf green accent-3">Accepted</a>
                        </div>):""
                       }
                       {
                        declineShow?(
                        <div class="hide-btn-home">
                        <a class=" btn-small btn-ntf red">Declined</a>
                        </div>):""
                       } */}
                      </div>
                     </div>
                   </div>
                 </div>
                 <div class=" col s12 m12 l6 xl6">
                   <div class="card usr-ntf">
                     <div class="row crd-cntt ">
                      <div class="col s3 s3 m3 l3 xl3 img-content">
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
                      <div class="col s3 s3 m3 l3 xl3 card-btn-ntf p0">
                      <a class=" btn-small btn-ntf green accent-3" >Accept</a>
                      <a class=" btn-small btn-ntf red">Decline</a>
                      {/* {
                        show?
                        ( <div>
                        <a class=" btn-small btn-ntf green accent-3"onClick={acceptHandler} >Accept</a>
                        <a class=" btn-small btn-ntf red"onClick={declineHandler}>Decline</a>
                        </div>
                        ):""
                      }
                      
                       { acceptShow?(
                        <div class="hide-btn-home">
                        <a class="btn-small btn-ntf green accent-3">Accepted</a>
                        </div>):""
                       }
                       {
                        declineShow?(
                        <div class="hide-btn-home">
                        <a class=" btn-small btn-ntf red">Declined</a>
                        </div>):""
                       } */}
                      </div>
                     </div>
                   </div>
                 </div>
                 <div class=" col s12 m12 l6 xl6">
                   <div class="card usr-ntf">
                     <div class="row crd-cntt ">
                      <div class="col s3 s3 m3 l3 xl3 img-content">
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
                      <div class="col s3 s3 m3 l3 xl3 card-btn-ntf p0">
                      <a class=" btn-small btn-ntf green accent-3" >Accept</a>
                      <a class=" btn-small btn-ntf red">Decline</a>
                      {/* {
                        show?
                        ( <div>
                        <a class=" btn-small btn-ntf green accent-3"onClick={acceptHandler} >Accept</a>
                        <a class=" btn-small btn-ntf red"onClick={declineHandler}>Decline</a>
                        </div>
                        ):""
                      }
                      
                       { acceptShow?(
                        <div class="hide-btn-home">
                        <a class="btn-small btn-ntf green accent-3">Accepted</a>
                        </div>):""
                       }
                       {
                        declineShow?(
                        <div class="hide-btn-home">
                        <a class=" btn-small btn-ntf red">Declined</a>
                        </div>):""
                       } */}
                      </div>
                     </div>
                   </div>
                 </div>
                 <div class=" col s12 m12 l6 xl6">
                   <div class="card usr-ntf">
                     <div class="row crd-cntt ">
                      <div class="col s3 s3 m3 l3 xl3 img-content">
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
                      <div class="col s3 s3 m3 l3 xl3 card-btn-ntf p0">
                      <a class=" btn-small btn-ntf green accent-3" >Accept</a>
                      <a class=" btn-small btn-ntf red">Decline</a>
                      {/* {
                        show?
                        ( <div>
                        <a class=" btn-small btn-ntf green accent-3"onClick={acceptHandler} >Accept</a>
                        <a class=" btn-small btn-ntf red"onClick={declineHandler}>Decline</a>
                        </div>
                        ):""
                      }
                      
                       { acceptShow?(
                        <div class="hide-btn-home">
                        <a class="btn-small btn-ntf green accent-3">Accepted</a>
                        </div>):""
                       }
                       {
                        declineShow?(
                        <div class="hide-btn-home">
                        <a class=" btn-small btn-ntf red">Declined</a>
                        </div>):""
                       } */}
                      </div>
                     </div>
                   </div>
                 </div>
                 <div class=" col s12 m12 l6 xl6">
                   <div class="card usr-ntf">
                     <div class="row crd-cntt ">
                      <div class="col s3 s3 m3 l3 xl3 img-content">
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
                      <div class="col s3 s3 m3 l3 xl3 card-btn-ntf p0">
                      <a class=" btn-small btn-ntf green accent-3" >Accept</a>
                      <a class=" btn-small btn-ntf red">Decline</a>
                      {/* {
                        show?
                        ( <div>
                        <a class=" btn-small btn-ntf green accent-3"onClick={acceptHandler} >Accept</a>
                        <a class=" btn-small btn-ntf red"onClick={declineHandler}>Decline</a>
                        </div>
                        ):""
                      }
                      
                       { acceptShow?(
                        <div class="hide-btn-home">
                        <a class="btn-small btn-ntf green accent-3">Accepted</a>
                        </div>):""
                       }
                       {
                        declineShow?(
                        <div class="hide-btn-home">
                        <a class=" btn-small btn-ntf red">Declined</a>
                        </div>):""
                       } */}
                      </div>
                     </div>
                   </div>
                 </div>
                 


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
    </div>
  
  )
}
