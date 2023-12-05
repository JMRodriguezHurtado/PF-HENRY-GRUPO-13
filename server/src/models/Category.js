const { Schema, model } = require('mongoose');

const categorySchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      require: true
    },
    img: {
      type: String,
      unique: true,
      require: false
    },
    description: {
      type: String,
      unique: false,
      require: true
    },
    deleted: {
      type: Boolean,
      default: false
    },
    product:[ {
      type: Schema.Types.ObjectId,
      ref: 'Product',
    }],
  },
  {
    timeseries: false,
    versionKey: false
  }
);

categorySchema.methods.softDelete = function() {
  this.deleted = true;
  return this.save();
};

module.exports  = model("Category", categorySchema);