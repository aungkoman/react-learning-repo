const articleReducer = (state = [], action) => {
    switch(action.type) {
        // ဒါက API ကနေ Select လုပ်လို့ရလာတဲ့ အခြေအနေ
        case 'ADD':
            return [...state, ...action.articles];
        case 'CLEAR':
            return [];
        default : return state;
    }
}
export default articleReducer;
