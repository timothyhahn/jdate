'use strict';

var mongoose = require('mongoose'),
    Profile = mongoose.model('Profile');

exports.profiles = function(req, res) {
  return Profile.find(function(err, profiles) {
    if (!err) {
      return res.json(profiles);
    } else {
      return res.send(err);
    }
  });
};


exports.returnProfile = function(req, res, id, profiles) {
  var shuffle = function(o) {
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
  };
  return Profile.findById(id, function(err, profile) {
    if (!err) {
      return res.json({you: profile,
        others: shuffle(profiles).slice(0, 3)
      });
    } else {
      res.send(err);
    }
  });
};

exports.profile = function(req, res) {
  var id = req.param('id'),
        others = Profile.find().lean().exec(function (err, profiles) {
        exports.returnProfile(req, res, id, profiles);
      });
  };

exports.addProfile = function(req, res) {
  var profile = req.body;
  Profile.create(profile);
  return res.json(profile);
};
