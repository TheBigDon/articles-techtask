import axios from "../plugins/axios";
import { SERVER_URL } from "../constants";

export async function getArtciles() {
  const response = await fetch(SERVER_URL + "articles");

  return response.json();
}

export async function createArticle(articleData) {
  const res = await axios.post("article", {
    title: articleData.title,
    content: articleData.content,
  });

  return res.data;
}

export async function getArtcile(articleId) {
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
