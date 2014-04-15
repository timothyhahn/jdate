'use strict';

var mongoose = require('mongoose'),
  Profile = mongoose.model('Profile');

/**
 * Populate database with sample application data
 */

Profile.find({}).remove(function() {
  Profile.create({
    name: 'The Person',
    location: 'City, State',
    gender: 'Neutral',
    age: 22
  }, {
    name: 'Lois Tucker',
    location: 'Arlington, MA',
    gender: 'Female',
    age: 73
  }, {
    name: 'Ruben Castro',
    location: 'San Diego, CA',
    gender: 'Male',
    age: 48
  }, {
    name: 'Lourdes Jackson',
    location: 'Layton, UT',
    gender: 'Female',
    age: 40
  }, {
    name: 'Marilyn Ruble',
    location: 'Blanchard, MI',
    gender: 'Female',
    age: 29
  }, {
    name: 'Richard Adkisson',
    location: 'Marietta, GA',
    gender: 'Male',
    age: 31
  }, {
    name: 'Kenneth Salinas',
    location: 'Everett, WA',
    gender: 'Male',
    age: 23
  }, {
    name: 'Jacqueline Miner',
    location: 'Minneapolis, MN',
    gender: 'Female',
    age: 22
  }, {
    name: 'Deanne Francis',
    location: 'New York, NY',
    gender: 'Female',
    age: 55
  }, {
    name: 'Amy Rodriquez',
    location: 'Monrovia, CA',
    gender: 'Female',
    age: 39
  }, {
    name: 'Nicole Boyd',
    location: 'Caldwell, ID',
    gender: 'Female',
    age: 61
  }, {
    name: 'Robert Johnson',
    location: 'Orrick, MO',
    gender: 'Male',
    age: 67
  }, function() {
    console.log('finished creating profiles');
    }
  );
});
