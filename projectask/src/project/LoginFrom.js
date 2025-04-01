import React, {useState} from 'react';
import axios from 'axios';

const Login =() =>{
    const [email,setEmail] =useState('');
    const [password,setPassword] =useState('');

    const handleLogin = async (e) => {
        e.handleDefault();
        try{
            const response = await axios.post('/api/login', {email, password});
        } catch (error){
            console.error('Login failed', error);
        }
    
}

    return(
        <form onSubmit ={handleLogin}>
        <input type ="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
        <input type ="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required/>
        <button type ="submit">Login</button>
        </form>
    );
};
 
export default Login;