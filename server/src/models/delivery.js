const mongoose = require('mongoose');

const deliverySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      require: true,
      unique: true,
      maxLength: 32,
    },
    price: {
      type: mongoose.Decimal128,
      required: true,
      min: 0,
    },
    description: {
      type: String,
      trim: true,
      required: true,
    },
    filenameImage: {
      type: String,
    },
    logo: {
      type: String,
    },
    isDefaultDelivery: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model('Delivery', deliverySchema);
