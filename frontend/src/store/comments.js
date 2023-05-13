import {
  createComment,
  deleteComment,
  getComments,
} from "../services/comments";
import {
  ADD_COMMENT,
  CREATE_COMMENT,
  DELETE_COMMENT,
  DELETE_COMMENT_LOCALLY,
  GET_COMMENTS,
  SET_COMMENTS,
} from "./actions/comments";

export default {
  state: {
    comments: [],
  },
  actions: {
    [CREATE_COMMENT]: async ({ commit }, data) => {
      const comment = await createComment(data.content, data.articleId);

      commit(ADD_COMMENT, comment);
    },
    [GET_COMMENTS]: async ({ commit }, data) => {
      const comments = await getComments(data.articleId);

      commit(SET_COMMENTS, comments);
    },
    [DELETE_COMMENT]: async ({ commit }, data) => {
      const comment = await deleteComment(data.articleId, data.id);

      commit(DELETE_COMMENT_LOCALLY, comment);
    },
  },
  mutations: {
    [ADD_COMMENT]: (state, comment) => {
      state.comments.push(comment);
    },
    [SET_COMMENTS]: (state, comments) => {
      state.comments = comments;
    },
    [DELETE_COMMENT_LOCALLY]: (state, comment) => {
      const index = state.comments.findIndex((item) => item.id === comment.id);
      state.comments.splice(index, 1);
    },
  },
};
