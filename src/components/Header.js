import React,{useEffect} from 'react'
import M from "materialize-css";
import '../components/meeting.css';
import {BrowserRouter,Route,Link,withRouter} from 'react-router-dom';
function Header(props) {

  useEffect(()=>{
    
      let dropdown = document.querySelectorAll('.dropdown-trigger');
       M.Dropdown.init(dropdown);
    
  });
  let LogoutHandler=(e)=>{  
       if(window.confirm("are you sure you want to logout!"))
           {      localStorage.clear();  
                props.history.push("./");    
                }        
                  }
  return (
    <div>
      <nav>
       <div className="nav-wrapper black-text white">
     {/* <a href="#" class="brand-logo center">Logo</a> */}
     <ul id="nav-mobile" className="left hide-on-med-and-down">
       <li> <i className="material-icons menu" >menu</i></li>
       <li>
           <form>
       <div className="input-field inp" >
         
         <i className="material-icons prefix searchicon">search</i>
         <input id="search" type="text" placeholder="Search" class="search-header" required/>
         <a className=" btn header-search-btn">Search</a>
       </div>
     </form>
    </li>
     </ul>
     <ul id="nav-mobile" className="right hide-on-med-and-down">
    <li><b class="namcnr" >{localStorage.getItem("user_name")}</b></li>
    <li className=" collection-item dispic dropdown-trigger" href='#' data-target='dropdown1'> 
    <img src={localStorage.getItem("user_profile")} width="45px" height="45px" className="topimg circle"/>
    
    <ul id='dropdown1' class='dropdown-content '>
    <li><a href="#!">My profile</a></li>
    <li><a onClick={LogoutHandler}>Log out</a></li>
    {/* <li class="divider" tabindex="-1"></li>
    <li><a href="#!">three</a></li>
    <li><a href="#!"><i class="material-icons">view_module</i>four</a></li>
    <li><a href="#!"><i class="material-icons">cloud</i>five</a></li> */}
  </ul>
  </li>
     </ul>
   </div>
  </nav>
     
    {/* <div class="row">
    <div class="col s1 m0 ">khhh  </div>
    <div class="col s11">
    bjhbh
    </div>
    </div> */}
    </div>
  )
}
export default withRouter(Header);
