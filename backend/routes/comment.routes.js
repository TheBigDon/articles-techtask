const express = require("express");
const router = express.Router();
const commentController = require("../controllers/comment.controller");

router.post("/article/:id/comment/", commentController.createComment);
router.get("/article/:id/comment/:comment_id/", commentController.getComment);
// router.get("/article/:id/comments/", commentController.getAllComments);
// router.patch(
//   "/article/:id/comment/:comment_id/",
//   commentController.updateComment
// );
// router.delete(
//   "/article/:id/comment/:comment_id/",
//   commentController.deleteComment
// );

module.exports = router;
