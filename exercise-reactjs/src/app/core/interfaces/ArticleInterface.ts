export interface IArticle {
  id: number;
  title: string;
  desc: string;
  author: string;
  createdAt: string;
  minsRead: string;
  category: string;
  image: string;
}

export type IArticleDetail = IArticle & {
  content: string;
}
