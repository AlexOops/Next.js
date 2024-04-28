const express = require("express");
const api = require("./api");
const bodyParser = require("body-parser");
const port = 3005;
const cors = require('cors');

const app = express();

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

app.use(cors({
    origin: 'http://localhost:3000', // Разрешаем запросы для Next.js
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'],
    credentials: true
}));

app.use(bodyParser.json());

app.use("/api", api);

app.listen(port, "localhost", function (err) {
    if (err) {
        console.log(err);
        return;
    }

    console.log("Listening at http://localhost:" + port);
});
