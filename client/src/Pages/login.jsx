import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SignupBody from '../components/signup-body';

const API = 'http://localhost:5000';

function Login(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const isSignup = false;

    const login = async() => {
        const res = await fetch(`${API}/login`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json' },
            body: JSON.stringify({username, password}),
        });
        
        const data = await res.json();
        if (res.ok) {
            localStorage.setItem('token', data.token);
            localStorage.setItem('settings', JSON.stringify(data.settings));
            navigate('/')
        } else {
            alert ('Login failed. Please check your credentials.')
        }
    };


    return (
        <>
            <SignupBody
            username = {username}
            setUsername = {setUsername}
            password = {password}
            setPassword = {setPassword}
            isSignup = {isSignup}
            signupFunc = {login}/>
        </>
    )
}

export default Login;