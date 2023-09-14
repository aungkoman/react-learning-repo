export const addAll = articles => ({
    type: 'ADD',
    articles: articles
});
export const addNewArticle = () =>({
    type: 'ADD_NEW'
});
export const clearAll = () =>({
    type: 'CLEAR'
});
