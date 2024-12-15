import { useEffect, useState } from "react";
import { fetchArticles, deleteArticle } from "./services/api";
import PropTypes from "prop-types";

const ArticlesTable = ({ onEdit }) => {
  ArticlesTable.propTypes = {
    onEdit: PropTypes.func.isRequired,
  };

  if (!onEdit) throw new Error("onEdit prop is required");

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadArticles = async () => {
    try {
      const { data } = await fetchArticles();
      setArticles(data);
    } catch (err) {
      console.error("Error loading articles:", err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteArticle(id);
      setArticles((prev) => prev.filter((article) => article._id !== id));
    } catch (err) {
      console.error("Error deleting article:", err.message);
    }
  };

  useEffect(() => {
    loadArticles();
  }, []);

  if (loading) return <p>Loading articles...</p>;

  return (
    <table className="table-auto w-full">
      <thead>
        <tr>
          <th>Başlık</th>
          <th>Görsel</th>
          <th>İçerik</th>
          <th>İşlemler</th>
        </tr>
      </thead>
      <tbody>
        {articles.map((article) => (
          <tr key={article._id}>
            <td>{article.title}</td>
            <td>
              <img src={article.image} alt={article.title} className="w-20 h-20" />
            </td>
            <td>{article.content}</td>
            <td>
              <button onClick={() => onEdit(article)} className="btn btn-primary">
                Düzenle
              </button>
              <button onClick={() => handleDelete(article._id)} className="btn btn-danger">
                Sil
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ArticlesTable;
