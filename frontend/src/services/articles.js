import axios from "../plugins/axios";

export async function createArticle(articleData) {
  const res = await axios.post("article", {
    title: articleData.title,
    content: articleData.content,
  });

  return res.data;
}

export async function getArticle(articleId) {
  const res = await axios.get(`article/${articleId}`);

  return res.data;
}

export async function updateArticle(articleId, articleData) {
  const res = await axios.patch(`article/${articleId}`, {
    title: articleData.title,
    content: articleData.content,
  });

  return res.data;
}

export async function getArticles() {
  const res = await axios.get("/articles");

  return res.data;
}

export async function deleteArticle(articleId) {
  const res = await axios.delete(`article/${articleId}`);

  return res.data;
}
