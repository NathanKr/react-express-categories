const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/";
const dbName = "my_categories";
const collectionCategories = "categories";
const collectionProducts = "products";

const getCategories = (req, res) => {
  {
    MongoClient.connect(url, function(err, db) {
      if (err) return res.sendStatus(500);

      const dbo = db.db(dbName);
      dbo
        .collection(collectionCategories)
        .find({})
        .toArray(function(err, categories) {
          if (err) return res.sendStatus(500);

          res.send(categories);
        });
    });
  }
};

const getProductsOfCategory = (req, res) => {
  const category = req.params.category;

  MongoClient.connect(url, function(err, db) {
    if (err) return res.sendStatus(500);

    const dbo = db.db(dbName);
    dbo
      .collection(collectionProducts)
      .find({ category: category })
      .toArray(function(err, productsPerCategory) {
        if (err) return res.sendStatus(500);

        res.send(productsPerCategory);
      });
  });
};

module.exports = { getCategories, getProductsOfCategory };
