const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/api/status", (req, res) => {
    res.json({
        status: "running",
        message: "Node.js server is healthy"
    });
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Cloud Deployment app running on port ${PORT}`);
});