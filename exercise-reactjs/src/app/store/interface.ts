import { IArticle } from "../pages/article/containers/ArticleList";

export interface IAction {
  type: string;
  payload: any;
}

export interface IState {
  articles: {
    data: IArticle[];
  }
}
