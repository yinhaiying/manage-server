import Router from "koa-router";
const router = new Router();
router.get("/register", async (ctx) => {
  ctx.body = "hello,users";
});

module.exports = router;
