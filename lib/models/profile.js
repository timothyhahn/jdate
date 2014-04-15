'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    autoIncrement = require('mongoose-auto-increment');

/**
 * Profile Schema
 */
var ProfileSchema = new Schema({
  name: String,
  location: String,
  gender: String,
  age: Number
});

/**
 * Validations
 */
ProfileSchema.path('age').validate(function (num) {
  return num >= 18 && num <= 110;
}, 'Age must be between 18 and 110');

ProfileSchema.plugin(autoIncrement.plugin, 'Profile');

mongoose.model('Profile', ProfileSchema);
