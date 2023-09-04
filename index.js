import express from "express";
import route from "./src/routes";
import dotenv from "dotenv";
import cors from "cors";
import * as cron from "node-cron";
import { instanceBackEnd } from "./src/api/axios";

const env = dotenv.config().parsed;

const PORT = process.env.PORT || 9999;
const app = express();
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: "25mb" }));

route(app);

// app.listen(PORT, () => {
//   console.log("App is now running at port ", PORT);
//   console.log("Connection has been established successfully.");

// });

app.listen(PORT, async function () {
  try {
    console.log("App is now running at port ", PORT);
    console.log("Connection has been established successfully.");
    setTimeout(
      await function () {
        cron_filter();
      },
      500
    );
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
});

async function getRealtime() {
  console.log("masuk realtime");
}

// epnggunaan node cron :
//  # ┌────────────── second (optional)
//  # │ ┌──────────── minute
//  # │ │ ┌────────── hour
//  # │ │ │ ┌──────── day of month
//  # │ │ │ │ ┌────── month
//  # │ │ │ │ │ ┌──── day of week
//  # │ │ │ │ │ │
//  # │ │ │ │ │ │
//  # * * * * * *

async function cron_filter() {
  console.log("masuk cron filter");
  let date_ob = new Date();

  // prosesData();
  await cron.schedule("00 00 04,16 * * *", () => {
    console.log("running a task : " + date_ob);
    prosesData();
  });
}

async function prosesData() {
  console.log("masuk proses data");
  const res = await instanceBackEnd.get("startProses");
  // const mess = await res.message;
  console.log("mess : " + res);
}
