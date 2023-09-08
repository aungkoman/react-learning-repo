import { combineReducers } from 'redux';
import userReducer from './UserReducer';
import articleReducer from './ArticleReducer';

export default combineReducers({
    user: userReducer,
    articles: articleReducer
});
