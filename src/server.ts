import express from "express"
import { router } from "./routes";

const app = express();

app.use(router)

app.listen(3333,() => console.log("\u{1F388} server is running"))