const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  sale: {
    type: Number,
  },
  category: {
    type: String,
    required: true,
  },
  img: {
    type: String,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  deleted: {
    type: Boolean,
    default: false,
  },
},
{
  timestamps: true,
});

productSchema.methods.softDelete = function() {
  this.deleted = true;
  return this.save();
};

const Product = mongoose.model('Product', productSchema);

module.exports = Product;