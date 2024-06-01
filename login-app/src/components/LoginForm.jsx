import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';
import account from '../assets/account.png';
import padlock from '../assets/padlock.png';
import user from '../assets/user.png';


const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/login', { email, password });
            localStorage.setItem('user', JSON.stringify(response.data));
            navigate('/dashboard');
        } catch (error) {
            console.error('Error logging in', error);
        }
    };

    return (
        <div className='login-screen'>
            <div className='login-container'>
                <div className='signin-text'>
                    <p>SIGN IN</p>
                </div>
                <img src={account} alt="account" />
                <form onSubmit={handleLogin}>
                    <div className='input-row'>
                        <img src={user} alt="user-icon" />
                        <input type="email" placeholder='username' value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className='input-row'>
                        <img src={padlock} alt="padlock" />
                        <input type="password" placeholder='password' value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className='remember-me'>
                        <label for=""><input type="checkbox" />Remember Me</label>
                        <p>Forgot Password?</p>
                    </div>
                    <div className="register">
                        <p>Don't have an account?</p>
                        <p><a href="/register">Register here.</a></p>
                    </div>
                    <button className='login-btn' type="submit">Login</button>
                </form>
            </div>
        </div>

    );
};

export default LoginForm;
