export const addAll = articles => ({
    type: 'ADD',
    articles: articles
});
export const addNewArticle = new_article =>({
    type: 'ADD_NEW',
    new_article: new_article
});
export const clearAll = () =>({
    type: 'CLEAR'
});
