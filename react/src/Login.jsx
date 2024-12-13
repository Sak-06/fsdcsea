import React ,{useState}from 'react'
import 'bootstrap/dist/css/bootstrap.css';
const Login = ({logindata}) => {
    const[email,setEmail]=useState();
    const[password,setPassword]=useState();
    function verify(){
        if(logindata.email==email){
            alert("Valid user");
        }
        else{
            alert("Invalid user");
        }
    }
  return (
    <div >
        <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" onChange={(e)=>setEmail(e.target.value)}class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password"onChange={(e)=>setPassword(e.target.value)} class="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" onClick={verify} class="btn btn-primary">Login</button>
</form>
    </div>
  )
}

export default Login