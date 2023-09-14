const articleReducer = (state = [], action) => {
    switch(action.type) {
        // ဒါက API ကနေ Select လုပ်လို့ရလာတဲ့ အခြေအနေ
        case 'ADD':
            return [...action.articles];
        case 'CLEAR':
            return [];
        case 'ADD_NEW':
            return [action.new_article, ...state];
        default : return state;
    }
}
export default articleReducer;
