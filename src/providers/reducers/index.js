import { combineReducers } from 'redux';
import userReducer from './UserReducer';
import articleReducer from './ArticleReducer';
import commentReducer from './CommentReducer';

export default combineReducers({
    user: userReducer,
    articles: articleReducer,
    comments: commentReducer
});
