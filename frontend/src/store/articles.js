import { createStore } from "vuex";
import { CREATE_ARTICLE, ADD_ARTICLE } from "./actions/articles";
import { createArticle } from "../services/articles";

export default {
  state: {
    articles: [],
  },
  actions: {
    [CREATE_ARTICLE]: async ({ commit }, data) => {
      const article = await createArticle(data);

      commit(ADD_ARTICLE, article);
    },
  },
  mutations: {
    [ADD_ARTICLE]: (state, article) => {
      state.articles.push(article);
    },
  },
};
