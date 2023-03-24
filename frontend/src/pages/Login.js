import './Login.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate();

    
    function handleUsernameChange(event) {
        setEmail(event.target.value);
        setErrorMessage('');
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value);
        setErrorMessage('');
    }
    
    function handleSubmit(event) {
        event.preventDefault();

        const data = { email, password };

        fetch('localhost:4000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Login response:', data);

            // handle successful login
            navigate('/rewards');
        })
        .catch(error => {
            console.error('Login error:', error);
            // handle login error 

            if(email === "admin" && password === "admin"){
                navigate('/rewards');
            }

            setErrorMessage("Wrong email or password. Try Again!");
        
        });
    }



    return (
        <div>
            
            <div className="Login">
                <h1>Login</h1>
                <div id="login">
                    <form className="form" onSubmit={handleSubmit}>
                        <label>
                            Email:
                            <input type="text" value={email} onChange={handleUsernameChange} placeholder="employee@toyota.com"/>
                        </label>
                        <br />
                        <label>
                            Password:
                            <input type="password" value={password} onChange={handlePasswordChange} placeholder="Enter Password" />
                        </label>
                        <br />
                        <div>
                            <input className="checkbox" type="checkbox" id="keep-status" name="keep-status" value="keep-status" />
                            <label className="keep-status"for="keep-status">Keep me Signed In</label>
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