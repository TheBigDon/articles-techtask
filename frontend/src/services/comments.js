import axios from "../plugins/axios";

export async function createComment(articleId, commentData) {
  const res = await axios.post(`/article/${articleId}/comment/`, {
    content: commentData.content,
    articleId: articleId,
  });

  return res.data;
}

export async function getComments(articleId) {
  const res = await axios.get(`/article/${articleId}/comments/`);

  return res.data;
}
