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
        comments: state.comments,
        articles: state.articles
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
const CommentListPage = ({user, comments, articles, appendComments, addNewComment, deleteComment, clearComments}) => {
    /* Component တိုင်းမှာ State နဲ့ UI နှစ်ပိုင်းပါမယ်။ */
    const [queryParameters] = useSearchParams();

    let article_id   = queryParameters.get("article_id");

    /*
    console.log("articles is ");
    console.log(articles);

    let article_one = articles.find( (article_one) => article_one.id == article_id );
    console.log(article);
    */

    const [commentContent, setCommentContent] = useState('');
    const [article, setArticle] = useState(articles.find( (article_one) => article_one.id == article_id ));
    
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
    const commentCreateApi = ({article_id, content, access_token}) => {
        console.log("CommentListPage->commentCreateApi");
        const axiosInstance = axios.create({
            baseURL: "http://localhost/pandora/public/api/v1",
            headers: {
              'Authorization': `Bearer ${access_token}`,
              'Content-Type': 'application/json', // You can set other headers as needed
            },
          });
          let body  = {article_id, content};
          console.log(body);

          axiosInstance.post('/comments', body)
          .then((response) => {
                console.log("CommentListPage->commentCreateApi response");
                console.log(response.data);
                addNewComment(response.data.data);
                setCommentContent("");
           }).catch(function(err) {
            console.log("CommentListPage->commentCreateApi catch");
            console.log(err); // "oh, no!"
          });
    }

    const addCommentLocal = () => {
        let new_comment = {
            id : 0,
            article_id : article_id,
            user_id : user.id,
            content : commentContent,
            user: user,
            created_at : new Date().toLocaleDateString(),
            updated_at : new Date().toLocaleDateString()
        };
        
        commentCreateApi({...new_comment, access_token : user.access_token});
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
    


    
    return <>
        <h1>Comment List Page</h1>

        <h2>{ article != undefined ? article.title : "article.title" } </h2>
        <p>{article != undefined ? article.content : "article.content" }</p>
        <input type="text" value={ commentContent } onChange={(e) => setCommentContent(e.target.value)} />
        <button onClick={() => { addCommentLocal(); }}>Submit</button>
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
