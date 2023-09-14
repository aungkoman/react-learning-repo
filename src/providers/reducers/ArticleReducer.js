const articleReducer = (state = [], action) => {
    switch(action.type) {
        // ဒါက API ကနေ Select လုပ်လို့ရလာတဲ့ အခြေအနေ
        case 'ADD':
            return [...action.articles];
        case 'CLEAR':
            return [];
        case 'ADD_NEW':
            return [action.new_article, ...state];
        case 'UP_VOTE':
            // article_id, user
            const articles = state.map((article) => {
                if (article.id === action.article_id) { // Example: Updating the object with id 2
                  return { ...article, user_vote: 1, up_vote : article.up_vote+1 }; // Create a new object with updated properties
                }
                return article; // Return the original object unchanged for other objects
            });
            return [...articles];
        
        case 'DOWN_VOTE':
            // article_id, user
             const down_voted_articles = state.map((article) => {
                if (article.id === action.article_id) { // Example: Updating the object with id 2
                  return { ...article, user_vote: 0, down_vote : article.down_vote+1 }; // Create a new object with updated properties
                }
                return article; // Return the original object unchanged for other objects
            });
            return [...down_voted_articles];
        
        
        case 'UN_VOTE':
            // article_id, user
             const un_voted_articles = state.map((article) => {
                if (article.id === action.article_id) { // Example: Updating the object with id 2
                  return { 
                        ...article, 
                        down_vote :  article.user_vote == 0 ? article.down_vote - 1 : article.down_vote ,
                        up_vote :  article.user_vote == 1 ? article.up_vote - 1 : article.up_vote ,
                        user_vote: -1, 
                  }; // Create a new object with updated properties
                }
                return article; // Return the original object unchanged for other objects
            });
            return [...un_voted_articles];
        default : return state;
    }
}
export default articleReducer;
