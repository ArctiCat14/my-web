import express from "express";
import path from "path";
import config from "./config/config.js";

const app = express();
const CONTAINER_ROOT = "/app";
const DIST_DIR = path.join(CONTAINER_ROOT, "dist");

app.use("/resource", (req, res) => {
    const cdnDomain = config.cdnDomain;
    const filePath = req.path;
    if (!cdnDomain) {
        return res.status(400);
    }

    res.redirect(`${cdnDomain}${filePath}`);
});

app.use(express.static(DIST_DIR));
app.use((req, res) => {
    res.sendFile(path.join(DIST_DIR, "index.html"));
});

app.listen(80, "0.0.0.0", () => {});
