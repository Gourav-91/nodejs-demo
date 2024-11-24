const express = require("express");
const app = express();
app.get("/", (req, res, next) => {
    res.json(["Gourav","Sarkar","Persistent","Engineering Lead"]);
   });

app.get("/health", (req, res, next) => {
    const healthcheck = {
        uptime: process.uptime(),
        message: 'OK',
        timestamp: Date.now()
    };
    try {
        res.send(healthcheck);
    } catch (error) {
        healthcheck.message = error;
        res.status(503).send();
    }
});
app.listen(3003, () => {
    console.log("Server running on port 3003");
   });