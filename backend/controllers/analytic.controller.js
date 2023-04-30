const { Sequelize } = require("sequelize");
const db = require("../models");
const Article = db.article;
const Comments = db.comment;
const Op = Sequelize.Op;

class AnalyticController {
  async getCommentsByPeriod(req, res) {
    try {
      const { dateFrom, dateTo } = req.query;

      const articleWithComments = await Article.findAll({
        include: {
          model: Comments,
          where: {
            date_creation: {
              [Op.between]: [dateFrom, dateTo],
            },
          },
        },
      });

      res.status(200).json(articleWithComments);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }
}

module.exports = new AnalyticController();
