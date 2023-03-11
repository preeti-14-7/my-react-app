import React, { useState } from "react";
import './Log.css';
const hardcodedEmail = "user@example.com";
const hardcodedPassword = "password123";

function Log() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email === hardcodedEmail && password === hardcodedPassword) {
      const token = generateToken();
      localStorage.setItem("token", token);
      window.location.href = "/dashboard"; // Redirect to the dashboard panel
    } else {
      setErrorMessage("Invalid email or password");
    }
  };

  const generateToken = () => {
    const token = Math.random().toString(36).substring(2, 15)
      + Math.random().toString(36).substring(2, 15);
    return token;
  };

  return (
    <div class="container d-flex flex-column">
    <div class="row justify-content-center align-items-center ">
      <div class="col-md-6">
 
    <form  className = "form" onSubmit={handleSubmit}>
      <div className="form-outline mb-4">
        <input
          type="email"
          class="form-control"
          placeholder="Email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        
      </div>
      <div className="form-outline mb-4">
        <input
          type="password"
          id="password"
          placeholder="Password"
          class="form-control"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
       
      </div>
      <div>
      {errorMessage && <div>{errorMessage}</div>}
      <p className="line-text">Don't have an account? <a href = "/sign-up">Signup instead</a></p>
      <button className="btn btn-dark btn-block mb-4 col-lg-12" type="submit">submit</button>
      <p className="text-center"> OR</p>
      <button  className = "btn btn-danger btn-lg col-lg-12" type="click">Login with Google</button>
      </div>
    </form>
  
    </div>
    </div>
    </div>
  );
}

export default Log;
