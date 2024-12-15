// eslint-disable-next-line no-undef
const express = require('express');
// eslint-disable-next-line no-undef
const mongoose = require('mongoose');
// eslint-disable-next-line no-undef
const cors = require('cors');
// eslint-disable-next-line no-undef
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

// eslint-disable-next-line no-undef
const mongoURI = process.env.MONGO_URI;
mongoose.connect(mongoURI, { 
  useNewUrlParser: true, 
  serverSelectionTimeoutMS: 50000 })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error(err));

// Articles Route
// eslint-disable-next-line no-undef
const articlesRouter = require('./routes/articleRoutes');
app.use('/api/articles', articlesRouter);

app.listen(5001, () => {
  console.log('Server running on port 5001');
});
