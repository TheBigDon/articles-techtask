import { createComment, getComments } from "../services/comments";
import {
  ADD_COMMENT,
  CREATE_COMMENT,
  GET_COMMENTS,
  SET_COMMENTS,
} from "./actions/comments";

export default {
  state: {
    comments: [],
  },
  actions: {
    [CREATE_COMMENT]: async ({ commit }, data) => {
      const comment = await createComment(data.articleId, data.content);

      commit(ADD_COMMENT, comment);
    },
    [GET_COMMENTS]: async ({ commit }, data) => {
      const comments = await getComments(data.articleId);

      commit(SET_COMMENTS, comments);
    },
  },
  mutations: {
    [ADD_COMMENT]: (state, comment) => {
      state.comments.push(comment);
    },
    [SET_COMMENTS]: (state, comments) => {
      state.comments = comments;
    },
  },
};
