import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5001/api", // Backend'inizin adresi
});

// Makale Listeleme
export const fetchArticles = async () => API.get("/articles");

// Yeni Makale Ekleme
export const createArticle = async (articleData) => API.post("/articles", articleData);

// Makale Güncelleme
export const updateArticle = async (id, articleData) => API.put(`/articles/${id}`, articleData);

// Makale Silme
export const deleteArticle = async (id) => API.delete(`/articles/${id}`);
