const mongoose = require("mongoose");

const { Schema } = mongoose;

const propertySchema = new Schema({
  nickname: {
    type: String,
    trim: true,
  },
  street: {
    type: String,
    required: true,
    trim: true,
  },
  city: {
    type: String,
    required: true,
    trim: true,
  },
  state: {
    type: String,
    required: true,
    trim: true,
  },
  zipcode: {
    type: String,
    required: true,
    trim: true,
  },
  rent: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
  },
  due: {
    type: Date,
  },
});

const Property = mongoose.model("Property", propertySchema);

module.exports = Property;
