var orm = require("../config/orm.js");

//variables cols and vals are arrays

var burger = {
  all: function(cb) {
    orm.selectAll("burgers", function(res){
      cb(res);
    });
  },

  create: function(cols,vals,cb){
    orm.insertOne(burgers, cols, vals, function(res){
      cb(res);
    });
  },

  update: function(objColVals, condition, cb){
    orm.updateOne("burgers", objColVals, condition,function(res){
      cb(res);
    });
  }
};

//export the database functions for controller
module.exports = burgers
