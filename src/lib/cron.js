import cron from "cron";
import https from "https";

const job = new cron.CronJob("*/14 * * * *", function () {
  https
    .get(process.env.API_URL, (res) => {
      if (res.statusCode === 200) {
        console.log("API is up and running");
      } else {
        console.log("GET request failed", res.statusCode);
      }
    })
    .on("error", (err) => {
      console.log("Error while making GET request", err);
    });
});

export default job;

// CRON JOBS ARE SCHEDULED TASKS THAT RUN PERIODICALLY AT FIXED INTERVALS
