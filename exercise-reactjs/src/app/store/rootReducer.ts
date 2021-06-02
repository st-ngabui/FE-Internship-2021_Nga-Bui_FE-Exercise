import { combineReducers } from 'redux';
import ArticlesReducer from './articles/reducer';

const rootReducer = combineReducers({
  articles: ArticlesReducer,
})

export default rootReducer;
