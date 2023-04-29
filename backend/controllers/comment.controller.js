const db = require("../models");
const Comment = db.comment;

class CommentController {
  async createComment(req, res) {
    try {
      const { content } = req.body;
      const idArtcile = req.params.id;

      const newComment = await Comment.create(
        {
          content: content,
          date_creation: new Date(),
          date_modification: new Date(),
          articleId: idArtcile,
        },
        {
          where: {
            articleId: idArtcile,
          },
        }
      );

      res.status(200).json(newComment);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  async getComment(req, res) {
    try {
      const idArticle = req.params.id;
      const idComment = req.params.comment_id;

      const comment = await Comment.findOne({
        where: {
          id: idComment,
          articleId: idArticle,
        },
      });

      res.status(200).json(comment);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }

  async getAllComments(req, res) {
    try {
      const articleId = req.params.id;

      const comments = await Comment.findAll({
        where: {
          articleId: articleId,
        },
      });

      res.status(200).json(comments);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }

  async updateComment(req, res) {
    try {
      const idArticle = req.params.id;
      const idComment = req.params.comment_id;
      const { content } = req.body;

      const comment = await Comment.update(
        {
          content: content,
          date_modification: new Date(),
        },
        {
          where: {
            id: idComment,
            articleId: idArticle,
          },
        }
      );

      res.status(200).json(comment);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }

  async deleteComment(req, res) {
    try {
      const idArticle = req.params.id;
      const idComment = req.params.comment_id;

      const comment = await Comment.destroy({
        where: {
          id: idComment,
          articleId: idArticle,
        },
      });

      res.status(200).json(comment);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }
}

module.exports = new CommentController();
