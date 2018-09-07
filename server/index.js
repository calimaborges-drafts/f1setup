const express = require("express");
const { ParseServer } = require("parse-server");
const ParseDashboard = require("parse-dashboard");
const { version } = require("./package.json");

const appId = "f1setup-api";

const { NODE_ENV, NOW_URL, MASTER_KEY, DB_URL } = process.env;

const environment = NODE_ENV || "development";
const serverURL = NOW_URL || "http://localhost:3000/parse";
const masterKey = MASTER_KEY || "LE_MASTER_KEY";
const databaseURI = DB_URL || "mongodb://localhost:27017/f1setup-api";

const parseServerConfig = { databaseURI, appId, masterKey, serverURL };
const parseDashboardConfig = {
  apps: [
    {
      serverURL: "https://f1setup-api.now.sh/parse",
      appId,
      masterKey,
      supportedPushLocales: ["en"],
      appName: appId
    }
  ]
};

const parseServer = new ParseServer(parseServerConfig);
const parseDashboard = new ParseDashboard(parseDashboardConfig, true);

const app = express();
app.get("/", (_, res) => res.send(JSON.stringify({ version, environment })));

if (environment !== "production") {
  app.use("/dashboard", parseDashboard);
}
app.use("/parse", parseServer);
app.listen(3000);
