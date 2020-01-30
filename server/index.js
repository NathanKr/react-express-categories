console.log("app is loading");
const express = require("express");
const app = express();
const morgan = require("morgan");
const PORT = process.env.PORT || 5000;

// --- add console.log for every request
app.use(morgan("combined"));

const db_helper = require("./db_helper");

app.get("/categories", (req, res) => db_helper.getCategories(req, res));

app.get("/products/:category", (req, res) =>
  db_helper.getProductsOfCategory(req, res)
);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
