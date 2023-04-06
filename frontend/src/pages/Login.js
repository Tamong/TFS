import './Login.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({onLogin}) => {

    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate();

    
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
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: data.username,
                password: data.password
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log('Login response:', data);
            onLogin(data);
            if(!data[0]) {
                setErrorMessage("Wrong username or password. Try Again!");
            } else{
                if(data[0].is_admin === 0){
                    navigate('/rewards');
                }
                if(data[0].is_admin === 1){
                    navigate('/admin');
                }
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
                            <input className="checkbox" type="checkbox" id="keep-status" name="keep-status" value="keep-status" />
                            <label className="keep-status">Keep me Signed In</label>
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