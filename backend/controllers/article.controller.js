const db = require("../config/db.config");
class ArticleController {
  async createArticle(req, res) {
    try {
      const { title, content, date_creation, date_modification } = req.body;
      const newArticle = await db.query(
        `INSERT INTO articles (title, content, date_creation ,date_modification) VALUES ($1, $2, $3, $4) RETURNING *`,
        [title, content, date_creation, date_modification]
      );

      res.status(200).json(newArticle.rows[0]);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
  async getAllArticles(req, res) {
    try {
      const articles = await db.query(
        "SELECT id, title, content, date_creation, date_modification FROM articles"
      );

      res.status(200).json(articles.rows);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }
}
module.exports = new ArticleController();
