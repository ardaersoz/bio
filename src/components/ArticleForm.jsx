import { useState } from "react";
import { createArticle, updateArticle } from "./services/api";
import PropTypes from "prop-types";

const ArticleForm = ({ article, onSuccess }) => {
  const [formData, setFormData] = useState({
    title: article?.title || "",
    content: article?.content || "",
    image: article?.image || "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (article) {
        await updateArticle(article._id, formData);
      } else {
        await createArticle(formData);
      }
      onSuccess();
    } catch (err) {
      console.error("Error saving article:", err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Başlık:</label>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
      </div>
      <div>
        <label>İçerik:</label>
        <textarea
          value={formData.content}
          onChange={(e) => setFormData({ ...formData, content: e.target.value })}
        ></textarea>
      </div>
      <div>
        <label>Görsel URL:</label>
        <input
          type="text"
          value={formData.image}
          onChange={(e) => setFormData({ ...formData, image: e.target.value })}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Kaydet
      </button>
    </form>
  );
};

ArticleForm.propTypes = {
  article: PropTypes.shape({
    _id: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
    image: PropTypes.string,
  }),
  onSuccess: PropTypes.func.isRequired,
};

export default ArticleForm;
