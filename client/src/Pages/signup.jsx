import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import SignupBody from '../components/signup-body';

const API = 'http://localhost:5000';

function Signup(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRepassword] = useState('');

    const navigate = useNavigate();
    const isSignup = true;

    const signup = async() => {
        const res = await fetch(`${API}/signup`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({
                username, 
                password, 
                settings: { pomTime: 25, shortTime: 5, longTime: 15, longInterval: 2 }
             }),
        });

        if (res.ok) {
            alert('Signed up! Now login.');
            navigate('/login');
        }
    };

    return(
        <>
            <SignupBody 
            username = {username}
            setUsername = {setUsername}
            password = {password}
            setPassword = {setPassword}
            repassword = {repassword}
            setRepassword = {setRepassword}
            isSignup = {isSignup}
            signupFunc = {signup}/>

        </>
    )
}

export default Signup;