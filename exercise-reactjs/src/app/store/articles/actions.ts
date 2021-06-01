import * as types from './types';
import axios from 'axios';
import { IAction } from '../interface';

export const getArticles = () => async (dispatch: (arg0: IAction) => void) => {
  const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/articles`);

  dispatch({
    type: types.GET_ARTICLE,
    payload: response.data,
  })
}
