import { useState } from "react";

import "./Login.css"

function Signup() {


  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  function handleSubmit(event) {
        event.preventDefault();

        setStatus("Signing up...");

        const data = { username, password };
        fetch(`http://localhost:3000/api/user`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: data.username,
                password: data.password
            })
        })

        .then(response => response.json())
        .then(data => {
            setStatus("Successfully signed up!\nGo log in");


            // handle successful login
        })
        .catch(error => {
            console.error('Signup error:', error);
        
        });
    }

  return (
    <div className="Signup">
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={handleUsernameChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
      <div className="status">                                
            {status && <p>{status}</p>}
        </div>
        <div className="status">                                
            {status && <a href="/login">Go Log In</a>}
        </div>
        
    </div>
  );
}

export default Signup;
