export const addAll = articles => ({
    type: 'ADD',
    articles: [...articles]
});
export const clearAll = () =>({
    type: 'CLEAR'
});
