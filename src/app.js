const express = require("express");
const pino = require("pino-http")();
const cors = require("cors");

const pizzaRoutes = require("./routes/pizzaRoutes");
const orderRoutes = require("./routes/orderRoutes");

const app = express();

app.use(pino);
app.use(express.json());

app.use(
    cors({
        origin: "*",
    }),
);

app.use("/api", pizzaRoutes);
app.use("/api", orderRoutes);

module.exports = app;
