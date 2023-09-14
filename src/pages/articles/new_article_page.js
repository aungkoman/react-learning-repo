import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { connect } from 'react-redux';
import {addNewArticle} from "../../providers/actions/ArticleAction";


/* ဒီမှာ ဘာတွေ လိုမလဲ? */
/*
    access token , i means user info တစ်ခုပဲ​လိုမယ်။
    // listen လုပ်တာလဲ ဖြစ်ကောင်းဖြစ်မယ်
    API ခေါ်တဲ့အခါမှ သုံးတာလဲ​ဖြစ်မယ်။
*/

/*
    @required state / reducer
    - user

    @required action
    - addNewArticle
*/


const mapStateToProps = state => {
    return ({
        // ဒီ​ component က လိုနေတဲ့ user ဆိုတဲ့ state က Combined Reducer မှာ user လို့ ကြေညာထားတဲ့ Reducer မှာ သိမ်းထားတဲ့ State ကိုပြောတာ။
        user: state.user
    })
}
const mapDispatchToProps = dispatch => {
    return {
        addNewArticle: (new_article) => dispatch(addNewArticle(new_article)),
    }
}

const NewArticlePage = ({user, addNewArticle}) => {
    // State
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    // core
    const navigate = useNavigate();

    // State Managers
    const submitArticle = (event) => {
        console.log("NewArticlePage->submitArticle");
        event.preventDefault();

        let body  = {
            title : title,
            content : content
        };
        // TODO: ဒီကောင်ကလည်း Reducer တစ်ခုခုမှာ သတ်မှတ်ထားတာတောင် ပိုကောင်းမယ်။
        // သုံးမယ့် Endpoint တွေ အကုန်လုံး။
        // add auth headers
        const token =  user.access_token;
        console.log("token is ", token);
        const axiosInstance = axios.create({
            baseURL: "http://localhost/pandora/public/api/v1",
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json', // You can set other headers as needed
            },
        });
        axiosInstance.post(`/articles`, body )
        .then((response) => {
            console.log("NewArticlePage->submitArticle->response");
            console.log(response);
            console.log(response.data);
            // navigate('/home');
            // history.push('/home')
            // how to set user info to state management
            let response_data = response.data;
            if(response_data.status === true){
                let new_article = response_data.data;
                console.log("new_article is ");
                console.log(new_article);
                // new article တစ်ခု article list မှာ ထည့်။
                // ဆိုတော့ dispatch လုပ်ပေ့ါ။
                // မဟုတ်လည်း Action Function တစ်ခု ခေါ်လည်း ရတယ်။
                addNewArticle(new_article);
                // go to article list
                navigate('/articles');
            }
        })
        .catch((err) => {
            console.log("NewArticlePage->submitArticle->err");
            console.log(err);
            console.log(err.response.data);
        });
    }

    // UI
    return <>
        <h2>Create New Article Page</h2>
        <form>
            <input type="text" placeholder="enter title" onChange={(e) => setTitle(e.target.value)} required />
            <input type="text" placeholder="enter content" onChange={(e) => setContent(e.target.value)} required />
            {/* text area */}
            <input type="submit" onClick={submitArticle} value="Submit" />
        </form>
    </>
};
  
// export default LoginPage;
// export default connect()(NewArticlePage);
export default connect(mapStateToProps,mapDispatchToProps)(NewArticlePage);