import {
  CREATE_ARTICLE,
  ADD_ARTICLE,
  GET_FULL_ARTICLE,
  UPDATE_ARTICLE,
  UPDATE_ARTICLE_LOCALLY,
  GET_ARTICLES,
  SET_ARTICLES,
} from "./actions/articles";
import {
  createArticle,
  getArticle,
  updateArticle,
  getArticles,
} from "../services/articles";

export default {
  state: {
    articles: [],
  },
  actions: {
    [CREATE_ARTICLE]: async ({ commit }, data) => {
      const article = await createArticle(data);

      commit(ADD_ARTICLE, article);
    },
    [GET_FULL_ARTICLE]: async (context, id) => {
      const article = await getArticle(id);

      return article;
    },
    [GET_ARTICLES]: async ({ commit }) => {
      const articles = await getArticles();

      commit(SET_ARTICLES, articles);
    },
    [UPDATE_ARTICLE]: async ({ commit }, data) => {
      const article = await updateArticle(data.id, {
        title: data.title,
        content: data.content,
      });

      commit(UPDATE_ARTICLE_LOCALLY, article);
    },
  },
  mutations: {
    [ADD_ARTICLE]: (state, article) => {
      state.articles.push(article);
    },
    [UPDATE_ARTICLE_LOCALLY]: (state, article) => {
      const index = state.articles.findIndex((item) => item.id === article.id);
      state.articles[index] = article;
    },
    [SET_ARTICLES]: (state, articles) => {
      state.articles = articles;
    },
  },
};
