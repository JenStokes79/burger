var orm = require("../config/orm.js");

//variables cols and vals are arrays

var burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res){
      cb(res);
    });
  },

  insertOne: function(cols,vals,cb){
    orm.insertOne("burgers", cols, vals, function(res){
      cb(res);
    });
  },

  updateOne: function(objColVals, condition, cb){
    orm.updateOne("burgers", objColVals, condition,function(res){
      cb(res);
    });
  }
};

//export the database functions for controller
module.exports = burger;
