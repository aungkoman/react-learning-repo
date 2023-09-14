export const addAll = articles => ({
    type: 'ADD',
    articles: articles
});
export const addNewArticle = new_article =>({
    type: 'ADD_NEW',
    new_article: new_article
});
export const submitUpVote = (article_id, user) =>({
    type: 'UP_VOTE',
    article_id: article_id,
    user: user
});
export const clearAll = () =>({
    type: 'CLEAR'
});
