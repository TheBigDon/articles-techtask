import axios from "../plugins/axios";

export async function createComment(commentData, articleId) {
  const res = await axios.post(`/article/${articleId}/comment/`, {
    content: commentData,
    articleId: articleId,
  });

  return res.data;
}

export async function getComments(articleId) {
  const res = await axios.get(`/article/${articleId}/comments/`);

  return res.data;
}

export async function deleteComment(articleId, commentId) {
  const res = await axios.delete(`/article/${articleId}/comment/${commentId}`);

  return res.data;
}
