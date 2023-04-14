import './Login.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

const Login = ({onLogin}) => {

    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [keepSignedIn, setKeepSignedIn] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
    const token = localStorage.getItem('tfstoken');
    if (token) {
      try {
        const decodedToken = jwt_decode(token);
        const currentTime = Date.now() / 1000;

        if (decodedToken.exp < currentTime) {
          localStorage.removeItem('tfstoken');
        } else {
          if (decodedToken.userInfo[0].is_admin === 1) {
            navigate('/admin');
          } else if (decodedToken.userInfo[0].is_admin === 0) {
            navigate('/rewards');
          }
        }
      } catch (err) {
        console.error('Error decoding JWT:', err);
      }
    }
  }, [navigate]);

    function handleUsernameChange(event) {
        setUsername(event.target.value);
        setErrorMessage('');
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value);
        setErrorMessage('');
    }
    

    function handleSubmit(event) {
        event.preventDefault();

        const data = { username, password };
        fetch(`http://ec2-3-137-214-39.us-east-2.compute.amazonaws.com:3000/api/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('tfstoken')
            },
            body: JSON.stringify({
                username: data.username,
                password: data.password
            })
        })

        .then(response => response.json())
        .then(data => {
            console.log('Login response:', data);
            if(data.token){
                if(keepSignedIn){
                    localStorage.setItem('tfstoken', data.token);
                }else{
                    localStorage.removeItem('tfstoken');
                }
                onLogin(data.token);
                const decodedInfo = jwt_decode(data.token).userInfo[0];
                if(decodedInfo.is_admin === 1){
                    navigate('/admin');
                }else if(decodedInfo.is_admin === 0){
                    navigate('/rewards');
                }
            }
            else {
                setErrorMessage("Wrong username or password. Try Again!");
            }
            // handle successful login
        })
        .catch(error => {
            console.error('Login error:', error);
            // handle login error 
        
        });
    }



    return (
        <div>
            
            <div className="Login">
                <h1>Login</h1>
                <div id="login">
                    <form className="form" onSubmit={handleSubmit}>
                        <label>
                            Username: 
                            <input type="text" value={username} onChange={handleUsernameChange} placeholder="Enter Username"/>
                        </label>
                        <br />
                        <label>
                            Password: 
                            <input type="password" value={password} onChange={handlePasswordChange} placeholder="Enter Password" />
                        </label>
                        <br />
                        <div>
                            <label className="keep-status">
                                <input
                                    type="checkbox"
                                    checked={keepSignedIn}
                                    onChange={() => setKeepSignedIn(!keepSignedIn)}
                                />
                                Keep me signed in
                            </label>
                        </div>
                        <br />
                        
                        <input  className="submit" type="submit" />
                        <div className="error">                                
                            {errorMessage && <p>{errorMessage}</p>}
                        </div>
                        
                        <br />
                        <div className="assists">
                            <div className="assists create">
                                Create Account
                            </div>
                            
                            <div className="assists forgot">
                                Forgot Password
                            </div>
                        </div>
                    </form>
                    
                    
                </div>

                
                
            </div>
        </div>
        
    );
}

export default Login;