const express = require("express");
const router = express.Router();

const articleController = require("../controllers/article.controller");

router.post("/article", articleController.createArticle);
// router.get("/article/#ID#/", article.getArticle);
// router.get("/articles/", article.getAllArticles);
// router.patch("/article/#ID#/", article.updateArticle);
// router.delete("/article/#ID#/", article.deleteArticle);

module.exports = router;
