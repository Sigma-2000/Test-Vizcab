const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const data = require("./data/data.json");


app.get("/", (req, res) => {
    res.send(data);
});

app.listen(PORT, () => {
    console.warn(`App listening on http://localhost:${PORT}`);
});
