const db = require("../models");
const Comment = db.comment;

class CommentController {
  async createComment(req, res) {
    try {
      const { content } = req.body;
      const id = req.params.id;
      const newComment = await Comment.create(
        {
          content: content,
          date_creation: new Date(),
          date_modification: new Date(),
          articleId: id,
        },
        {
          where: {
            articleId: id,
          },
        }
      );

      res.status(200).json(newComment);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
}

module.exports = new CommentController();
