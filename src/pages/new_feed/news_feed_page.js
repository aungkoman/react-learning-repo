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
const NewsFeedPage = ({articles,user, clearAll, addAll, submitUpVote, submitUnVote, submitDownVote}) => {
    /* Component တိုင်းမှာ State နဲ့ UI နှစ်ပိုင်းပါမယ်။ */
    useEffect(() => {
        console.log("NewsFeedPage->useEffect");
        const token =  user.access_token;
        const axiosInstance = axios.create({
            baseURL: "http://localhost/pandora/public/api/v1",
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json', // You can set other headers as needed
            },
          });
          axiosInstance.get('/articles')
          .then((response) => {
                console.log("NewsFeedPage->useEffect response");
                console.log(response.data);
                addAll(response.data.data)
            })
    }, []);

    // api for upvote, downvote
    const voteCreateApi = ({article_id, vote_type, access_token}) => {
        console.log("NewsFeedPage->voteCreateApi");
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
                console.log("NewsFeedPage->article_list_page response");
                console.log(response.data);
           }).catch(function(err) {
            console.log("NewsFeedPage->article_list_page catch");
            console.log(err); // "oh, no!"
          });
    }

    // api for upvote, downvote
    const voteDeleteApi = ({article_id, access_token}) => {
        console.log("NewsFeedPage->voteDeleteApi");
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
                console.log("NewsFeedPage->voteDeleteApi response");
                console.log(response.data);
           }).catch(function(err) {
            console.log("NewsFeedPage->voteDeleteApi catch");
            console.log(err); // "oh, no!"
          });
    }
    const upVote = article_id => {
        console.log("NewsFeedPage->voteDeleteApi ${article_id}");
        console.log(article_id);
        console.log(user);
        submitUpVote(article_id, user);
        let vote_type = 1;
        let access_token = user.access_token;
        voteCreateApi({article_id, vote_type, access_token });
    }
    const unVote = article_id => {
        console.log("NewsFeedPage->unVote ", article_id);
        submitUnVote(article_id, user);
        console.log("unVote -> ", user.access_token);
        let access_token = user.access_token;
        voteDeleteApi({article_id, access_token});
    }
    const downVote = article_id => {
        console.log("NewsFeedPage->downVote ", article_id);
        submitDownVote(article_id, user);
        let vote_type = 0;
        let access_token = user.access_token;
        voteCreateApi({article_id, vote_type, access_token });
    }


    
    return <>
        <h1>News Feed</h1>
        <ul>
        {articles.map((article, index) => {
            // article card ဆိုပြီး component တစ်ခု ရှိသင့်တယ်။
            return (
                ArticleCard({article, upVote, unVote, downVote})
                // <li key={article.id}>{article.title}</li>
            )
        })}
        </ul>
    </>;
};


//export default ArticleListPage;
export default connect(mapStateToProps,mapDispatchToProps)(NewsFeedPage);
