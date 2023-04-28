const express = require("express");
const articleRouter = require("./routes/article.routes");

const PORT = 8080;

const app = express();

app.use(express.json());
app.use("/blog", articleRouter);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
