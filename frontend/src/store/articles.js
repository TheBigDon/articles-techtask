import {
  CREATE_ARTICLE,
  ADD_ARTICLE,
  GET_FULL_ARTICLE,
  UPDATE_ARTICLE,
  UPDATE_ARTICLE_LOCALLY,
} from "./actions/articles";
import { createArticle, getArtcile, updateArticle } from "../services/articles";

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
      const article = await getArtcile(id);

      return article;
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
  },
};
