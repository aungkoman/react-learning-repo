import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { connect } from 'react-redux';
import {clearAll, addAll} from "../../providers/actions/ArticleAction";
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
    }
}

/* list of data */
const ArticleListPage = ({articles,user, clearAll, addAll}) => {
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
                // dispatch(addAll(response.data.data));
                addAll(response.data.data)
            })
    }, []);
    
    return <>
        <h1>Article List Page</h1>
        <p>{user.access_token}</p>
        <ul>
        {articles.map((article, index) => {
            // article card ဆိုပြီး component တစ်ခု ရှိသင့်တယ်။
            return (
                ArticleCard({article})
                // <li key={article.id}>{article.title}</li>
            )
        })}
        </ul>

        <button onClick={()=>{ clearAll(); }}>Clear All</button>
    </>;
};


//export default ArticleListPage;
export default connect(mapStateToProps,mapDispatchToProps)(ArticleListPage);
