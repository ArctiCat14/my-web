import express from "express";
import path from "path";

const app = express();
const CONTAINER_ROOT = "/app";
const DIST_DIR = path.join(CONTAINER_ROOT, "dist");
const RESOURCE_DIR = path.join(CONTAINER_ROOT, "resource");

app.use("/resource", express.static(RESOURCE_DIR));

app.use(express.static(DIST_DIR));

app.use((req, res) => {
    res.sendFile(path.join(DIST_DIR, "index.html"));
});

app.listen(80, "0.0.0.0", () => {});
