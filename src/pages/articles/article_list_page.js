import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { connect } from 'react-redux';
import {clearAll, addAll} from "../../providers/actions/ArticleAction";

const mapStateToProps = state => {
    return ({
        user: state.user,
        articles: state.articles
    })
}
const mapDispatchToProps = dispatch => {
    return {
        clearAll: item => dispatch(clearAll()),
        addAll: articles => dispatch(addAll(articles)),
    }
}

/* list of data */
const ArticleListPage = ({articles,user, clearAll, addAll}) => {
    /* Component တိုင်းမှာ State နဲ့ UI နှစ်ပိုင်းပါမယ်။ */
    
    useEffect(() => {
        console.log("home_page->useEffect");

        const token = "this is token"; //user.access_token;

        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        
        const bodyParameters = {
           key: "value"
        };

        axios.get("https://pandora.mmsoftware100.com/api/v1/articles", bodyParameters, config)
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
        <ul>
        {articles.map((article, index) => {
            return (
                <li key={article.id}>{article.title}</li>
            )
        })}
        </ul>

        <button onClick={()=>{ clearAll(); }}>Clear All</button>
    </>;
};


//export default ArticleListPage;
export default connect(mapStateToProps,mapDispatchToProps)(ArticleListPage);
