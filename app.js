const express = require("express");
const productRoute = require("./routes/productRoute");
const userRoute = require("./routes/userRoute");
const sellerRoute = require("./routes/sellerRoute");
const orderRoute = require("./routes/orderRoure");
var cors = require("cors");
const morgan = require("morgan");

const app = express();

app.use(express.json());
app.use(morgan());

app.use(
  cors({
    origin: "*",
    methods: "GET POST PATCH DELETE",
  })
);

app.use("/products", productRoute);
app.use("/users", userRoute);
app.use("/sellers", sellerRoute);
app.use("/orders", orderRoute);

app.use((err, req, res, next) => {
  res.json({ status: "failed", message: err.message });
});

module.exports = app;
