import Koa from "koa";
import Router from "koa-router";
const app = new Koa();
const router = new Router();
const users = require("./routes/api/users");
router.use("/api/users", users.routes());

app.use(router.routes()).use(router.allowedMethods());

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server running on ${port}`);
});
