const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const data = require("./data/data.json");

const cors = require('cors');

app.use(cors({
    origin: 'http://localhost:5173'
}));

app.get("/", (req, res) => {
    res.send(data);
});

app.listen(PORT, () => {
    console.warn(`App listening on http://localhost:${PORT}`);
});
