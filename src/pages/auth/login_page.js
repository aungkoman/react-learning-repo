import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const LoginPage = () => {
    // State
    // let history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // core
    const navigate = useNavigate();

    // State Managers
    const login = (event) => {
        event. preventDefault();

        let body  = {
            email : email,
            password : password
        };
        axios.post(`http://localhost/qrmenu/public/api/v1/login`, body )
        .then((response) => {
            console.log("login->response");
            console.log(response);
            console.log(response.data);
            // navigate('/home');
            // history.push('/home')
            // how to set user info to state management
            let response_data = response.data;
            if(response_data.status == true){
                let user = response_data.data;
                console.log("user is ");
                console.log(user);
                navigate('/shops');
            }
        })
        .catch((err) => {
            console.log("login->err");
            console.log(err);
            console.log(err.response.data);
        });
    }

    // UI
    return <>
        <h2>Login Page</h2>
        <form>
            <input type="email" placeholder="enter email" onChange={(e) => setEmail(e.target.value)} required />
            <input type="password" placeholder="enter password" onChange={(e) => setPassword(e.target.value)}  required />
            <input type="submit" onClick={login} value="Login" />
        </form>
    </>
  };
  
export default LoginPage;