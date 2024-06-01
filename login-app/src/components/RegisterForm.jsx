import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './RegisterForm.css'
import account from '../assets/account.png';
import padlock from '../assets/padlock.png';
import user from '../assets/user.png';

const RegisterForm = () => {
    const [name, setName] = useState('');
    const [dob, setDob] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/register', { name, dob, email, password });
            localStorage.setItem('user', JSON.stringify(response.data));
            navigate('/dashboard');
        } catch (error) {
            console.error('Error registering', error);
        }
    };

    return (
        <div className='register-screen'>
            <div className='register-container'>
                <div className='register-text'>
                    <p>REGISTER</p>
                </div>
                <img src={account} alt="account" />
                <form onSubmit={handleRegister}>
                    <div className='input-row'>
                        <img src={user} alt="user-icon" />
                        <input type="text" placeholder='name' value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className='input-row dob-input'>
                        <input type="date" placeholder='date of birth' value={dob} onChange={(e) => setDob(e.target.value)} />
                    </div>
                    <div className='input-row'>
                        <img src={user} alt="user-icon" />
                        <input type="email" placeholder='username' value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className='input-row'>
                        <img src={padlock} alt="padlock" />
                        <input type="password" placeholder='password' value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button className='login-btn' type="submit" onClick={handleRegister}>Register</button>
                </form>
            </div>
        </div>
    );
};

export default RegisterForm;
