import { IArticle } from './ArticleInterface';

export interface IAction {
  type: string;
  payload: any;
}

export interface IState {
  articles: {
    data: IArticle[];
  }
}
