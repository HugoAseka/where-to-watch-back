import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
import "express-async-errors";
import router from "./routers/indexRouter";

const app = express();

dotenv.config();

app.use(cors());
app.use(json());
app.use(router);

app.listen(process.env.PORT, () => {
  console.log(`SERVER RUNNING ON ${process.env.PORT}`);
});
