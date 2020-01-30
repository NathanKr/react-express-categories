const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/";
const dbName = "my_categories";
const collectionCategories = "categories";
const collectionProducts = "products";

// category : name , img
const getCategories = (req, res) => {
  {
    MongoClient.connect(url, { useUnifiedTopology: true }, function(err, db) {
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

// product : name , img , categoryName
const getProductsOfCategory = (req, res) => {
  const categoryName = req.params.categoryName;

  MongoClient.connect(url, { useUnifiedTopology: true }, function(err, db) {
    if (err) return res.sendStatus(500);

    const dbo = db.db(dbName);
    dbo
      .collection(collectionProducts)
      .find({ categoryName })
      .toArray(function(err, productsPerCategory) {
        if (err) return res.sendStatus(500);

        res.send(productsPerCategory);
      });
  });
};

module.exports = { getCategories, getProductsOfCategory };
