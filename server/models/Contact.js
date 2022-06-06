const mongoose = require('mongoose');

const { Schema } = mongoose;

const contactSchema = new Schema({
  street: {
    type: String,
    required: true,
    trim: true
  },
  city: {
    type: String,
    required: true,
    trim: true
  },
  state: {
    type: String,
    required: true,
    trim: true
  },
  zipcode: {
    type: String,
    required: true,
    trim: true
  },
  phone1: {
    type: String,
    required: true,
    trim: true
  },
  phone2: {
    type: String,
    trim: true
  }
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
