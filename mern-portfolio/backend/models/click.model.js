const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const clickSchema = new Schema({
  click: {
    type: Boolean,
    unique: true
  }
});

const Click = mongoose.model('Click', clickSchema);

module.exports = Click;
