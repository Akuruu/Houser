const { Schema, model } = require('mongoose');


const Owner = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must match an email address!'],
  },
  password: {
    type: String,
    required: true,
    unique: true
  },
  property: [propertySchema]
});

const Matchup = model('Property', propertySchema);

module.exports = Property;