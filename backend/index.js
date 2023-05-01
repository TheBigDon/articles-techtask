const express = require("express");
const cors = require("cors");
const articleRouter = require("./routes/article.routes");
const commentRouter = require("./routes/comment.routes");
const analyticRouter = require("./routes/analytic.routes");

const PORT = 8080;

const app = express();

app.use(cors({ origin: "*", credentials: true, optionSuccessStatus: 200 }));
app.use(express.json());
app.use("", analyticRouter);
app.use("", articleRouter);
app.use("", commentRouter);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
