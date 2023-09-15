import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { connect } from 'react-redux';
import {clearAll, addAll, submitUpVote, submitUnVote, submitDownVote} from "../../providers/actions/ArticleAction";
import ArticleCard from '../../components/article_card';
import CommentCard from '../../components/comment_card';
import { useSearchParams } from "react-router-dom";
import {appendComments, addNewComment, deleteComment, clearComments} from "../../providers/actions/CommentAction";

const mapStateToProps = state => {
    return ({
        user: state.user,
        comments: state.comments
    })
}
const mapDispatchToProps = dispatch => {
    return {
        appendComments: comments => dispatch(appendComments(comments)),
        addNewComment: comment => dispatch(addNewComment(comment)),
        deleteComment: comment_id => dispatch(deleteComment(comment_id)),
        clearComments: () => dispatch(clearComments())
    }
}

/* list of data */
const CommentListPage = ({user, comments, appendComments, addNewComment, deleteComment, clearComments}) => {
    /* Component တိုင်းမှာ State နဲ့ UI နှစ်ပိုင်းပါမယ်။ */
    const [queryParameters] = useSearchParams();

    let article_id   = queryParameters.get("article_id");
    
    // select comment for this article 
    useEffect(() => {
        console.log("CommentListPage->useEffect");
        clearComments();
        console.log(`article id is ${article_id}`);
        const token =  user.access_token;
        console.log("token is ", token);
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
          axiosInstance.get('/comments?article_id='+article_id)
          .then((response) => {
                console.log("CommentListPage->useEffect response");
                console.log(response.data);
                appendComments(response.data.data)
          }).catch((err) => {
                console.log("CommentListPage->useEffect catch");
                console.error(err.message); // "oh, no!"
          });
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
        <h1>Comment List Page</h1>
        <ul>
        {comments.map((comment, index) => {
            return (
                CommentCard({comment, deleteComment})
            )
        })}
        </ul>

        <button onClick={()=>{ clearAll(); }}>Clear All</button>
    </>;
};


//export default ArticleListPage;
export default connect(mapStateToProps,mapDispatchToProps)(CommentListPage);
