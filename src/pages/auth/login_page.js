import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {login} from "../../providers/actions/UserAction";

import { connect } from 'react-redux';

const LoginPage = ({dispatch}) => {
    // State
    // let history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // core
    const navigate = useNavigate();

    // State Managers
    const loginSubmit = (event) => {
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
                // ဒီမှာ Login User Action ကို Dispatch လုပ်လို့ရမယ်။ 
                // အခုတော့ Business Logic ကို UI ကလုပ်နေတယ်။
                // နောက်တော့ Action မှာပဲ​လုပ်ပြီး Reducer မှာ Local State Management လုပ်ရမလား?
                // နမူနာ တစ်ချက် ကြည့်ကြည့်မယ်။
                // အခုပုံစံအတိုင်းဆိုရင် Reducer မှာ လုပ်ရင်လည်း Side Effect တွေ ရှိလာဉီးမယ်။
                // Action မှာရော လုပ်လို့ရနိုင်လား တစ်ချက် ကြည့်။

                // တော်သေးပြီ၊​ View မှာပဲ API ခေါ်ပါတော့မယ်။

                dispatch(login(user));
                navigate('/profile');
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
            <input type="submit" onClick={loginSubmit} value="Login" />
        </form>
    </>
};
  
// export default LoginPage;
export default connect()(LoginPage);