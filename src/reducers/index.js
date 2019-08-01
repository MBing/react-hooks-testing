import { combineReducers } from 'redux';
import { commentsReducer } from './comments';

export const reducers = combineReducers({
    comments: commentsReducer
});
