const db = require("../models");
const Article = db.article;

class ArticleController {
  async createArticle(req, res) {
    try {
      const { title, content, date_creation, date_modification } = req.body;
      const newArticle = await Article.create({
        title: title,
        content: content,
        date_creation: date_creation,
        date_modification: date_modification,
      });

      res.status(200).json(newArticle);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
  async getAllArticles(req, res) {
    try {
      const articles = await Article.findAll();
      res.status(200).json(articles);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }
  async getArticle(req, res) {
    try {
      const id = req.params.id;
      const article = await Article.findOne({
        where: {
          id: id,
        },
      });

      res.status(200).json(article);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }
  async deleteArticle(req, res) {
    try {
      const id = req.params.id;
      const article = await Article.destroy({
        where: {
          id: id,
        },
      });

      res.status(200).json(article);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }
  async updateArticle(req, res) {
    try {
      const id = req.params.id;
      const { title, content } = req.body;
      const article = await Article.update(
        {
          title: title,
          content: content,
          date_modification: new Date(),
        },
        {
          where: {
            id: id,
          },
        }
      );

      res.status(200).json(article);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }
}
module.exports = new ArticleController();
