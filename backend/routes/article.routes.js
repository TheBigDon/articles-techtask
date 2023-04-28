const express = require("express");
const router = express.Router();

const articleController = require("../controllers/article.controller");

router.post("/article/", articleController.createArticle);
router.get("/article/:id/", articleController.getArticle);
router.get("/articles/", articleController.getAllArticles);
router.patch("/article/:id/", articleController.updateArticle);
router.delete("/article/:id/", articleController.deleteArticle);

module.exports = router;
