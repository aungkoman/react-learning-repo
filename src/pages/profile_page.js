
import React, { useEffect, useState } from 'react';

import { connect } from 'react-redux';
import { logout } from '../providers/actions/UserAction';

const mapStateToProps = state => {
  /* ဒီနေရာ စာရွက်မှာ မြှားထိုးပြီး နားလည်အောင် ုလုပ်ရမယ် */
  /*
    ဘယ်ဘက်က Properties
    ညာဘက်က state , ဘယ် State လဲ 
    combineReducers မှာ ကြေညာခဲ့တဲ့ key နဲ့ တွဲထားတဲ့ Reducer မှာ သိမ်းထားတဲ့ state 
    ဒါဆို အမှန်ကတော့ ဒါက user reducer ကြီးပဲ။​ function ချည်းမဟုတ်တော့ပဲ
    state / အသားတွေချည်း ရမှာမျိုး နေမှာပေါ့။

    Page တစ်ခုက State နှစ်ခု သုံးခုလိုနေရင်တော့ တစ်မျိုး ပြန်စဉ်းစားရမယ်။
    အခုက Reducer က ထိမ်းထားတဲ့ state တွေ အကုန်ပေးလိုက်သလိုဖြစ်နေတယ်။

  */
  return ({
      user: state.user
  })
}


const mapDispatchToProps = dispatch => {
  // လောလောဆယ် Dispatch လုပ်စရာ Logout ပဲ ရှိတယ်။
  return {
      logout: user_id => dispatch(logout(user_id))
  }
}

const ProfilePage = ({user, logout}) => {
  console.log("ProfilePage");
  console.log(user);
  useEffect(() => {
    console.log("profile_page->useEffect");
  }, []);

    return <>
      <h1>ProfilePage</h1>
      <h2>Name</h2>
      <p>Name : { user.name }</p>
      <p>Email : { user.email }</p>
      <p>Created At : { user.created_at }</p>
      <p>Update At : { user.updated_at }</p>
      <p>Access Token : { user.access_token }</p>
      <p>Role Name : { user.role != null ? user.role.name : "role" }</p>

      <button onClick={()=>{ console.log("Logout Clicked"); logout(user.id) }}>Logout</button>
    </>;
  };
  
  // export default ProfilePage;

export default connect(mapStateToProps,mapDispatchToProps)(ProfilePage);