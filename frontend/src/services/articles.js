import axios from "../plugins/axios";
import { SERVER_URL } from "../constants";

export async function getArtciles() {
  const response = await fetch(SERVER_URL + "articles");

  return response.json();
}

export async function createArticle(articleData) {
  return axios.post("article", {
    title: articleData.title,
    content: articleData.content,
  });
}
