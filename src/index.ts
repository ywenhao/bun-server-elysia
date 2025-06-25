import { Elysia } from "elysia";
import { router } from "./router";
import { ip } from "./ip";

const app = new Elysia()
.use(router)
.use(ip)
.onRequest((e) => {
  console.log(e)
})
.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
