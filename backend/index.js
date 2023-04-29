const express = require("express");
const articleRouter = require("./routes/article.routes");
const commentRouter = require("./routes/comment.routes");

const PORT = 8080;

const app = express();

app.use(express.json());
app.use("/blog", articleRouter);
app.use("/blog", commentRouter);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
