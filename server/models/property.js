const { Schema, model } = require('mongoose');

const Property = new Schema({
  streetNumber: {
    type: Int,
    required: true
  },
  streetName: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  zipcode: {
      type: Int,
      min: 5,
      required: true
  },
  image: {
    type: String
  },
});

const Matchup = model('Property', propertySchema);

module.exports = Property;