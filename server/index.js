const express = require("express");
const { ParseServer } = require("parse-server");
const ParseDashboard = require("parse-dashboard");

const appId = "f1setup-api";
const serverURL = process.env.NOW_URL || "http://localhost:3000/parse";
const masterKey = process.env.MASTER_KEY || "LE_MASTER_KEY";
const databaseURI =
  process.env.DB_URL || "mongodb://localhost:27017/f1setup-api-dev";

const parseServerConfig = { databaseURI, appId, masterKey, serverURL };
const parseDashboardConfig = {
  apps: [
    {
      serverURL,
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

app.use("/dashboard", parseDashboard);
app.use("/parse", parseServer);

app.listen(3000);
