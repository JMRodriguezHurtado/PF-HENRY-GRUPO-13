const { Schema, model } = require('mongoose');

const reviewsSchema = new Schema(
  {
    comment: {
      type: String,
      unique: false,
      require: true,
    },
    userId: [{
      type: Schema.Types.ObjectId,
      ref: 'User',
      require: false,
      unique: false
    }],
    productId: [{
      type: Schema.Types.ObjectId,
      ref: 'Products',
      require: false,
      unique: false
    }]
  },
  {
    timestamps: false,
    versionKey: false
  }
);

module.exports = model("Reviews", reviewsSchema);