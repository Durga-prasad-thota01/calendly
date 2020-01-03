import React,{useState,useEffect} from 'react';
import {
  Link,
} from 'react-router-dom';
import axios from 'axios';
// Google
import { GoogleLogin } from 'react-google-login';


import './meeting.css';
export default function Login(props) {
   let[profile,setProfile]=useState('');
  let[name,setName]=useState(''); 
  let[givenname,setGivenname] =useState('');
  let[email,setEmail]=useState(''); 
  // let[gmail,setGmail]=useState('sridhar.boddu@purviewservices.com')

     // const[url,setUrl]=useState('');
     useEffect(()=>{
      localStorage.clear();  
    },[])
     
     const responseGoogle = (response) => {
           console.log(response.Zi.access_token);
    if(response.Zi.access_token){
       console.log(response)
  //   localStorage.setItem("access_token",response.Zi.access_token)  
  //   props.history.push("/Availability");
       let profile=response.profileObj.imageUrl
       localStorage.setItem("user_profile",profile)
       let email=response.profileObj.email
       localStorage.setItem("user_email",email)
       
       let userName=response.profileObj.givenName
       localStorage.setItem("user_name",userName)
  let grant_type="convert_token";
  let client_id="Qf36Zcnn0W4itIclk9xfbd5ZkYQJQhwAbrfUTolQ";
  let client_secret="Rt0tY1w8UkecBxNEgsbh4g72AXMKDKCP1apsVMRUG4y9ulIjGFgjzJs3wSRnjmDZyGpryaTjNftoPgURetQFggO579lPMqpFwwnBLZrsyI89s6z7BGdB5jFFwu5aDvXr";
  let backend="google-oauth2";
  let token=response.Zi.access_token;

  axios.post("https://sam-project.herokuapp.com/api/emailcheck/",{email})
 
  .then(response=>{

    // alert(response.data)
    axios.post("https://sam-project.herokuapp.com/auth/convert-token/",{grant_type,client_id,client_secret,backend,token})
  .then(resp=>{
     console.log(resp.data)
  
     if(resp.data){
      let key=resp.data.access_token;
      localStorage.setItem("access_token",key) 
        axios.get(`https://sam-project.herokuapp.com/api/users/`,
      { headers: {"Authorization" : `Bearer ${key}`}})
            .then(resp=>{
              let userDetails=resp.data.filter(i=>{
          return i.email==email
        })
        localStorage.setItem("user_id",userDetails[0].id)
        // alert(localStorage.getItem("user_id"))
        props.history.push("/Home");
            })
   }
})
  },
  err=>{
    // alert(err)
    axios.post("https://sam-project.herokuapp.com/auth/convert-token/",{grant_type,client_id,client_secret,backend,token})
  .then(resp=>{
     console.log(resp.data)
  
     if(resp.data){
      let key=resp.data.access_token;
      localStorage.setItem("access_token",key)  
        axios.get(`https://sam-project.herokuapp.com/api/users/`,
      { headers: {"Authorization" : `Bearer ${key}`}})
            .then(resp=>{
              let userDetails=resp.data.filter(i=>{
          return i.email==email
        })
        localStorage.setItem("user_id",userDetails[0].id)
        props.history.push("/Availability");
            })
   }
})

  }
  // axios.post("https://sam-project.herokuapp.com/auth/convert-token/",{grant_type,client_id,client_secret,backend,token})
  // .then(resp=>{
  //    console.log(resp.data)
  // if(response.data==true){
//   axios.post("https://sam-project.herokuapp.com/auth/convert-token/",{grant_type,client_id,client_secret,backend,token})
//   .then(resp=>{
//      console.log(resp.data)
  
//      if(resp.data){
//       let key=resp.data.access_token;
//       localStorage.setItem("access_token",key)  
//         axios.get(`https://sam-project.herokuapp.com/api/users/`,
//       { headers: {"Authorization" : `Bearer ${key}`}})
//             .then(resp=>{
//               let userDetails=resp.data.filter(i=>{
//           return i.email==email
//         })
//         localStorage.setItem("user_id",userDetails[0].id)
//             })
//    }
// })
// props.history.push("/Home");
// }else{
//   axios.post("https://sam-project.herokuapp.com/auth/convert-token/",{grant_type,client_id,client_secret,backend,token})
//   .then(resp=>{
//      console.log(resp.data)
  
//      if(resp.data){
//       let key=resp.data.access_token;
//       localStorage.setItem("access_token",key)  
//         axios.get(`https://sam-project.herokuapp.com/api/users/`,
//       { headers: {"Authorization" : `Bearer ${key}`}})
//             .then(resp=>{
//               let userDetails=resp.data.filter(i=>{
//           return i.email==email
//         })
//         localStorage.setItem("user_id",userDetails[0].id)
//             })
//    }
// })
// props.history.push("/Availability");
// }
// }
  )
  }  
     else{  
            alert("error");   
         }   
 }
   return ( 
    <div >
      <div class="backimg">
        <div class="row">
          <div class="col s4"></div>
           <div class="col s4  googlee">
            <p class="signwith">Sign in with Google to Continue</p>
            <div>
            <GoogleLogin class= "btn butngoogle"
                        clientId="69784952631-ntl47uqp2t0ti6r7k3tk04fjagiif4f4.apps.googleusercontent.com"
                      //   render={renderProps => (   
                      //  <button >
                      //    <img  src="./images/googlelogo.png "  class="left googicon"/>Sign in with Google </button                    
                      //   )}
                        buttonText="Sign in with Google"
                        className="google-btn"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                    />
                   
             </div>
            {/* <Link to="/Availability"> 
            <button class= "btn butngoogle"><img  src="./images/googlelogo.png "  class="left googicon"/>Sign in with Google </button>
            </Link> */}
           </div> 
         <div class="col s4"></div>
       </div>
      </div>
    </div>
  );
}
