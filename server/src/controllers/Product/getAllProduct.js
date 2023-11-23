const Product = require('../../models/Product');

const getAllProducts = async () => {
  try {
    const products = await Product.find({});

    if (products.length === 0) {
      throw new Error("No products found.");
    };

    return products;
  } catch (error) {
    console.error('Error fetching products:', error.message);
    throw new Error('Unable to fetch products.');
  };
};

module.exports = getAllProducts;