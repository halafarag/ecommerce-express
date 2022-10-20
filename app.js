const express = require("express");
const productRoute = require("./routes/productRoute");
var cors = require("cors");

const app = express();

app.use(express.json());
app.use("/*", (req, res, next) => {
  console.log(req.method, req.url);
  next();
});
app.use(
  cors({
    origin: "*",
    methods: "GET POST PATCH DELETE",
  })
);

app.use("/products", productRoute);

module.exports = app;
