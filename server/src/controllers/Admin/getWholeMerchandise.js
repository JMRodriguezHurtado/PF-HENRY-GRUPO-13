const Product = require('../../models/Product');

const getWholeMerchandise = async () => {
  try {
    const merchandise = await Product.findAll();
    return merchandise;
  } catch (error) {
    console.error('Error fetching merchandise:', error.message);
    throw error
  }
};

module.exports = getWholeMerchandise;
