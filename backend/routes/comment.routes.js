const express = require("express");

const comment = require("../controllers/comment.controller");

const router = express.Router();

router.post("/article/#ID#/comment/", comment.createComment);
router.get("/article/#ID#/comment/#COMMENT_ID#/", comment.getCommentById);
router.get("/article/#ID#/comments/", comment.getAllComments);
router.patch("/article/#ID#/comment/#COMMENT_ID#/", comment.updateComment);
router.delete("/article/#ID#/comment/#COMMENT_ID#/", comment.deleteComment);

module.exports = router;
