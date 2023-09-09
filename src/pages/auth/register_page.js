import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {register} from "../../providers/actions/UserAction";
import { connect } from 'react-redux';


const RegisterPage = ({dispatch}) => {

    // Core
    const navigate = useNavigate();

    // State
    // let history = useHistory();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confrim_password, setConfirmPassword] = useState('');

    // State Managers
    const registerSubmit = (event) => {
        event. preventDefault();
        const body  = {
          name : name,
          email : email,
          password : password,
          confrim_password : confrim_password
        };
        axios.post(`http://localhost/pandora/public/api/v1/register`, body )
        .then((response) => {
            console.log("registerSubmit->response");
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
                dispatch(register(user));
                navigate('/profile');
            }
            else{
              // notify user -> error message 
              // alert?
            }
        })
        .catch((err) => {
            // notify user -> error message 
            console.log("registerSubmit->err");
            console.log(err);
            console.log(err.response.data);
        });
    }

    // return <h1>Register Page</h1>;
    // UI
    return <>
        <h2>Register Page</h2>
        <form>
            <input type="text" placeholder="enter name" onChange={(e) => setName(e.target.value)} required />
            <input type="email" placeholder="enter email" onChange={(e) => setEmail(e.target.value)} required />
            <input type="password" placeholder="enter password" onChange={(e) => setPassword(e.target.value)}  required />
            <input type="password" placeholder="confirm password" onChange={(e) => setConfirmPassword(e.target.value)}  required />
            <input type="submit" onClick={registerSubmit} value="Register" />
        </form>
    </>
  };
  
// export default RegisterPage;
export default connect()(RegisterPage);