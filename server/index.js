const express = require("express");
const { ParseServer } = require("parse-server");
const ParseDashboard = require("parse-dashboard");

const appId = "f1setup-api";
const masterKey = "LE_MASTER_KEY";
const serverURL = "http://localhost:3000/parse";

const parseServerConfig = {
  databaseURI: "mongodb://localhost:27017/f1setup-api-dev",
  appId,
  masterKey,
  serverURL
};

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
