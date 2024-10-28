import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';


const users = [
    { email: 'user1@example.com', password: 'password1' },
    { email: 'user2@example.com', password: 'password2' },
    { email: 'sai@gmail.com', password: 'ias' },
];

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();


        const user = users.find(user => user.email === email);
        if (!user) {
            setMessage('Email not found. Please sign up.');
            alert("user not found")
            return;
        }
        if (user.password === password) {  
            navigate('/HomePage');
            
            setMessage('Login successful!');
            console.log('Logged in:', email);

        } else {
            setMessage('Incorrect password. Please try again.');
        }
    }

    const handleSignup = () => {
        navigate('/signup');
    };
    const homePageNavigation = () =>{
        console.log("it is in home page naviagtion")
        navigate('/')
    }

    return (
        <div className="login-container">
            <form onSubmit={handleLogin} className="login-form">
                <h2>Login</h2>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit" onClick={() => homePageNavigation()}>Login</button>
                {message && <p className="message">{message}</p>}
                <p>
                    Don't have an account?{' '}
                    <button className="signup-link" onClick={handleSignup}>
                        Signup
                    </button>
                </p>
            </form>
        </div>
    );
};

export default Login;