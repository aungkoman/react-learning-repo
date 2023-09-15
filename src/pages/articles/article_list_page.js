import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { connect } from 'react-redux';
import {clearAll, addAll, submitUpVote, submitUnVote, submitDownVote} from "../../providers/actions/ArticleAction";
import ArticleCard from '../../components/article_card';

const mapStateToProps = state => {
    return ({
        user: state.user,
        articles: state.articles
    })
}
const mapDispatchToProps = dispatch => {
    return {
        clearAll: () => dispatch(clearAll()),
        addAll: articles => dispatch(addAll(articles)),
        submitUpVote: (article_id, user) => dispatch(submitUpVote(article_id, user)),
        submitUnVote: (article_id, user) => dispatch(submitUnVote({article_id, user})),
        submitDownVote: (article_id, user) => dispatch(submitDownVote(article_id, user))
    }
}

/* list of data */
const ArticleListPage = ({articles,user, clearAll, addAll, submitUpVote, submitUnVote, submitDownVote}) => {
    /* Component တိုင်းမှာ State နဲ့ UI နှစ်ပိုင်းပါမယ်။ */
    
    useEffect(() => {
        console.log("home_page->useEffect");

        const token =  user.access_token;
        console.log("token is ", token);

        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };

        console.log(config);

        
        const bodyParameters = {
           key: "value"
        };

        const axiosInstance = axios.create({
            baseURL: "http://localhost/pandora/public/api/v1",
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json', // You can set other headers as needed
            },
          });


          // axios.get("http://localhost/pandora/public/api/v1/articles", config)
          // axios.get("http://localhost/pandora/public/api/v1/articles", config)
          axiosInstance.get('/articles')
          .then((response) => {
                console.log("article_list_page->useEffect response");
                console.log(response.data);
                // need to dispatch as action
                //dispatch(addAll(response.data.data));
                // အခုထိ အဆင်ပြေတယ်။
                // upVote ထည့်တဲ့အချိန် မအိုကေတာ။
                addAll(response.data.data)
            })
    }, []);

    // api for upvote, downvote
    const voteCreateApi = ({article_id, vote_type, access_token}) => {
        console.log("article_list_page->voteCreateApi");
        const axiosInstance = axios.create({
            baseURL: "http://localhost/pandora/public/api/v1",
            headers: {
              'Authorization': `Bearer ${access_token}`,
              'Content-Type': 'application/json', // You can set other headers as needed
            },
          });
          let body  = {article_id, vote_type};
          console.log(body);

          axiosInstance.post('/votes', body)
          .then((response) => {
                console.log("article_list_page->article_list_page response");
                console.log(response.data);
           }).catch(function(err) {
            console.log("article_list_page->article_list_page catch");
            console.log(err); // "oh, no!"
          });
    }

    // api for upvote, downvote
    const voteDeleteApi = ({article_id, access_token}) => {
        console.log("article_list_page->voteDeleteApi");
        console.log(access_token);
        const axiosInstance = axios.create({
            baseURL: "http://localhost/pandora/public/api/v1",
            headers: {
              'Authorization': `Bearer ${access_token}`,
              'Content-Type': 'application/json', // You can set other headers as needed
            },
          });

          axiosInstance.delete('/votes?article_id='+article_id)
          .then((response) => {
                console.log("article_list_page->voteDeleteApi response");
                console.log(response.data);
           }).catch(function(err) {
            console.log("article_list_page->voteDeleteApi catch");
            console.log(err); // "oh, no!"
          });
    }
    const upVote = article_id => {
        console.log("article_list_page->voteDeleteApi ${article_id}");
        console.log(article_id);
        console.log(user);
        submitUpVote(article_id, user);
        let vote_type = 1;
        let access_token = user.access_token;
        voteCreateApi({article_id, vote_type, access_token });
    }
    const unVote = article_id => {
        console.log("ArticleListPage->unVote ", article_id);
        submitUnVote(article_id, user);
        console.log("unVote -> ", user.access_token);
        let access_token = user.access_token;
        voteDeleteApi({article_id, access_token});
    }
    const downVote = article_id => {
        console.log("ArticleListPage->downVote ", article_id);
        submitDownVote(article_id, user);
        let vote_type = 0;
        let access_token = user.access_token;
        voteCreateApi({article_id, vote_type, access_token });
    }


    
    return <>
        <h1>Article List Page</h1>
        <p>{user.access_token}</p>
        <ul>
        {articles.map((article, index) => {
            // article card ဆိုပြီး component တစ်ခု ရှိသင့်တယ်။
            return (
                ArticleCard({article, upVote, unVote, downVote})
                // <li key={article.id}>{article.title}</li>
            )
        })}
        </ul>

        <button onClick={()=>{ clearAll(); }}>Clear All</button>
    </>;
};


//export default ArticleListPage;
export default connect(mapStateToProps,mapDispatchToProps)(ArticleListPage);
