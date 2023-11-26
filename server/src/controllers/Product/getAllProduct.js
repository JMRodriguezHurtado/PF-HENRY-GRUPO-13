const Product = require("../../models/Product"); 

const getAllProducts = async (req, res, next) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const startIndex = (page - 1) * limit;
  const results = {};

  const { name, brand, sale, price, category, quantity } = req.query;
  const whereConditions = {};

  if (category) {
    whereConditions.category = new RegExp(category, 'i');
  }

  if (sale === "sale") {
    whereConditions.sale = {
      $gt: 0,
    };
  }

  if (sale === "no-sale") {
    whereConditions.sale = 0;
  }

  try {
    const sort = {};
    if (price === "highest") {
      sort.price = -1;
    } else if (price === "lowest") {
      sort.price = 1;
    }

    const count = await Product.countDocuments(whereConditions);
    results.info = {
      page: page,
      limit: limit,
      total: count,
    };

    const products = await Product.find(whereConditions)
      .sort(sort)
      .limit(limit)
      .skip(startIndex);

    results.results = products;
    res.paginatedResults = results;
    next();
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

module.exports = getAllProducts;