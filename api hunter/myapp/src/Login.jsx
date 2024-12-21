import axios from 'axios';
import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token,setToken]=useState("")


  const handleSubmit = (e) => {
    e.preventDefault();
    const userData ={
      email,
      password
    }
    axios.post("https://reqres.in/api/login",userData)
    .then((response)=>{
      let token = response.data.token
      setToken(token)
      alert("login sucsessfully")
      localStorage.setItem("token",token)
    
     })
     };
    
     return ( 
    <div>

      <h1 style={{textAlign:"center"}}>Login Page</h1>
      <form onSubmit={handleSubmit} style={{width:"15%",margin:"auto"}}>
        <div>
          <label type="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">Login</button>


          <h3 style={{margin:"50px"}}>TOKEN : {token}</h3>
        </div>
      </form>
    </div>
  );
};

export default Login;