import express from "express";
import path from "path";

const app = express();
const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, "dist")));

app.use((req, res) => {
    res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(80, "0.0.0.0", () => {});
