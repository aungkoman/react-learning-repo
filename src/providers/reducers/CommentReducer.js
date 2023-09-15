const articleReducer = (state = [], action) => {
    switch(action.type) {
        // ဒါက API ကနေ Select လုပ်လို့ရလာတဲ့ အခြေအနေ
        /* it's all about state and ui */
        /* အရှေ့က ထည့်မယ် */
        case 'PREPEND_COMMENTS':
            return [...action.comments, ...state];
        /*​ အနောက်က ထည့်မယ် */
        case 'APPEND_COMMENTS':
            return [...state, ...action.comments];
        /* အကုန် ရှင်းမယ် */
        case 'CLEAR':
            return [];
        /*​ အသစ် တစ်ခု ထည့်မယ် */
        case 'ADD_NEW_COMMENT':
            return [action.comment, ...state];
        /*​ ဖျတ်မယ် */
        case 'DELETE_COMMENT':
            return state.filter( comment => comment.id == action.comment_id );
        case 'UPDATE_COMMENT':
            let comments = state.map((comment) => {
                if (comment.id === action.comment_id) { // Example: Updating the object with id 2
                  return { ...comment, ...action.comment}; // Create a new object with updated properties
                }
                return comment; // Return the original object unchanged for other objects
            });
            return [...comments];
        default : return state;
    }
}
export default articleReducer;
