// eslint-disable-next-line no-undef
const express = require('express');
const router = express.Router();
// eslint-disable-next-line no-undef
const Article = require('../models/Article');

// Makale Listeleme
router.get('/', async (req, res) => {
  try {
    const articles = await Article.find();
    res.json(articles);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Yeni Makale Ekleme
router.post('/', async (req, res) => {
  const article = new Article({
    title: req.body.title,
    content: req.body.content,
    image: req.body.image,
  });

  try {
    const newArticle = await article.save();
    res.status(201).json(newArticle);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Makale Güncelleme
router.patch('/:id', async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    if (!article) return res.status(404).json({ message: 'Article not found' });

    if (req.body.title != null) {
      article.title = req.body.title;
    }
    if (req.body.content != null) {
      article.content = req.body.content;
    }
    if (req.body.image != null) {
      article.image = req.body.image;
    }

    const updatedArticle = await article.save();
    res.json(updatedArticle);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Makale Silme
router.delete('/:id', async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    if (!article) return res.status(404).json({ message: 'Article not found' });

    await article.deleteOne();
    res.json({ message: 'Article deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// eslint-disable-next-line no-undef
module.exports = router;
