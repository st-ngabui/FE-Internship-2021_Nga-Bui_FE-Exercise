import { IAction } from '../interface';
import * as types from './types';

const initialState = {
  data: [],
};

const ArticlesReducer = (state = initialState, action: IAction) => {
  switch(action.type) {
    case types.GET_ARTICLE:
      return {
        ...state,
        data: action.payload,
      }
      
    default:
      return state;
  }
}

export default ArticlesReducer;
