import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { connect } from 'react-redux';
import {clearAll, addAll} from "../../providers/actions/ArticleAction";

const mapStateToProps = state => {
    return ({
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
const ArticleListPage = ({articles, clearAll, addAll}) => {
    /* Component တိုင်းမှာ State နဲ့ UI နှစ်ပိုင်းပါမယ်။ */
    
    useEffect(() => {
        console.log("home_page->useEffect");
        axios.get("https://pandora.mmsoftware100.com/api/v1/articles")
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